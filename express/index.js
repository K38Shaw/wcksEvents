const express = require('express');
require('dotenv').config();
const mysql = require('mysql');

const app = express()

class GrandMarshal{
    constructor(name, year, image){
        this.name = name;
        this.year = year;
        this.image = image;
        
    }
}
app.get('/deleteMarshal/marshalName', (request, response) => {
     const{marshalName} = request.params;
     const query = `DELETE FROM grandMarshals WHERE name = '${marshalName}'`;
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




app.get('/', (request, response) => {
   response.send('Hello World!')  
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