import { Component } from '@angular/core';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})
export class RidesComponent {
  chosenRide = 1;


  // //Counts how many elements are child to the id of MAIN
  // let numberOfImages = document.getElementById("main").childElementCount;
  
  
  // document.getElementById("bigButton").addEventListener("click", ()=>{
  
  //   //Deselect Images
  //   let imageToDeselect = document.querySelector(`#main img:nth-child(${chosenImage})`);
  //   imageToDeselect.classList.remove("chosen");
    
  //   chosenImage += 1;
  //   if(chosenImage > numberOfImages){
  //     chosenImage = 1;
  //   }
  
  //   //Selecting New Image
    
  //   let imageToSelect = document.querySelector(`#main img:nth-child(${chosenImage})`);
  //   imageToSelect.classList.add("chosen");
  //   document.body.style.backgroundImage = `url(${imageToSelect.src})`
  
    
  
  
  // })
}
