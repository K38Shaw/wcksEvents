const express = require('express');
require('dotenv').config();
const mysql = require('mysql');

const app = express()


//All Routes and Structs pertaining to the grand marshal history
class GrandMarshal{
    constructor(name, year, image){
        this.name = name;
        this.year = year;
        this.image = image;
        
    }
}
app.get('/deleteMarshalByName/marshalName', (request, response) => {
     const{marshalName} = request.params;
     const query = `DELETE FROM grandMarshals WHERE name = '${marshalName}'`;
      runQuery(query).then((data)=>{
             response.send(data);
         }).catch((err)=>{
             response.send({"error": err});
         })
})
app.get('/deleteMarshalByYear/:year', (request, response) => {
     const {year} = request.params;
     const query = `DELETE FROM grandMarshals WHERE year = '${year}'`;
      runQuery(query).then((data)=>{
             response.send(data);
         }).catch((err)=>{
             response.send({"error": err});
         })
     
})

app.get('/addMarshal/:name/:year', (request, response) => {
    const {name, year, image} = request.params;
    const query = `INSERT INTO grandMarshals(name, year, image) VALUES ('${name}','${year}','default.jpeg')`;

    runQuery(query).then((data)=>{
        response.send(data);
    }).catch((err)=>{
        response.send({"error": err});
    })
})

app.get('/grandMarshalData', (request, response) => {
     const query = `SELECT name, year FROM grandMarshals`;
      runQuery(query).then((data)=>{
             response.send(data);
         }).catch((err)=>{
             response.send({"error": err});
         })
})

app.get('/marshalByYear/:year', (request, response) => {
     const {year} = request.params;
     const query = `SELECT * FROM grandMarshals WHERE year='${year}'`;
       runQuery(query).then((data)=>{
              response.send(data);
          }).catch((err)=>{
              response.send({"error": err});
          })
})
app.get('/marshalByName/:name', (request, response) => {
     const {name} = request.params;
     const query = `SELECT * FROM grandMarshals WHERE name='${name}'`;
      runQuery(query).then((data)=>{
             response.send(data);
         }).catch((err)=>{
             response.send({"error": err});
         })
})


//All routes and structs pertaining to the ride history





// All routes and structs pertaining to the vendor list

app.get('/getVendorData', (request, response) => {
     const query = `SELECT * FROM Vendors`;
      runQuery(query).then((data)=>{
             response.send(data);
         }).catch((err)=>{
             response.send({"error": err});
         })
})
app.get('/getVendorByName/:name', (request, response) => {
     const {name} = request.params;
     const query = `SELECT * FROM Vendors WHERE name = '${name}'`;
      runQuery(query).then((data)=>{
             response.send(data);
         }).catch((err)=>{
             response.send({"error": err});
         })
})



app.get('/addVendor/:name/:hours/:location/:description', (request, response) => {
     const {name, hours, location, description} = request.params;
     const query = `INSERT INTO Vendors(name, hours, location, description, image) VALUES ('${name}','${hours}','${location}','${description}', 'foodDefault')`;
      runQuery(query).then((data)=>{
             response.send(data);
         }).catch((err)=>{
             response.send({"error": err});
         })
})

app.get('/deleteVendorByName/:name', (request, response) => {
     const {name} = request.params;
     const query = `DELETE FROM Vendors WHERE name = '${name}'`;
       runQuery(query).then((data)=>{
              response.send(data);
          }).catch((err)=>{
              response.send({"error": err});
          })
})


//All routes and structs pertaining to the Sponsors list

app.get('/getSponsorData', (request, response) => {
     const query = `SELECT * FROM Sponsors`;
      runQuery(query).then((data)=>{
             response.send(data);
         }).catch((err)=>{
             response.send({"error": err});
         })
})

app.get('/getSponsorByName/:name', (request, response) => {
     const {name} = request.params;
     const query = `SELECT * FROM Sponsors WHERE name = '${name}'`;
      runQuery(query).then((data)=>{
             response.send(data);
         }).catch((err)=>{
             response.send({"error": err});
         })
})

app.get('/addSponsor/:name/:message/:tier', (request, response) => {
     const {name, tier, message} = request.params;
     const query = `INSERT INTO Sponsors(name, tier, message, image) VALUES ('${name}','${tier}','${message}', 'sonsorDefault')`;
      runQuery(query).then((data)=>{
             response.send(data);
         }).catch((err)=>{
             response.send({"error": err});
         })
    })

app.get('/deleteSponserByName/:name', (request, response) => {
     const {name} = request.params;
     const query = `DELETE FROM Sponsors WHERE name = '${name}'`;
      runQuery(query).then((data)=>{
             response.send(data);
         }).catch((err)=>{
             response.send({"error": err});
         })
})




app.get('/', (request, response) => {
   response.send('Welcome to WcKs Events!')  
})


function runQuery(query, success, fail){
return new Promise((success, fail)=>{
    const connection = mysql.createConnection({
        host: process.env.APP_HOST,
        user: process.env.APP_USER,
        password: process.env.APP_PASSWORD,
        database: process.env.APP_DATABASE,
        port: process.env.APP_PORT
    })
    console.log(process.env.APP_DATABASE);
    connection.connect((err) => {
        if(err){
            fail(err);
        }else{
           connection.query(query, (err, result) => {
               if(err){   fail(err)
               }else{     success(result)
               }
           })
        }
    })})
}
    

app.listen(1979, () => {
    console.log(`Server is Listening on 1979`)
})