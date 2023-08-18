import { Component } from '@angular/core';

@Component({
  selector: 'app-fair-history',
  templateUrl: './fair-history.component.html',
  styleUrls: ['./fair-history.component.css']
})
export class FairHistoryComponent {
  showFiller = false;
  showRides = false;
  showMarshalls = false;
  showThemes = false;
  historyHeading = document.getElementById('history-heading');


toggleShowMarshalls(){
  if(this.showMarshalls == true){
    this.showMarshalls = false;
  }
  else{
    this.showMarshalls = true;
    this.showRides = false;
    this.showThemes = false;
  }

}
toggleShowRides(){
  if(this.showRides == true){
    this.showRides = false;
  }
  else{
    this.showRides = true;
    this.showThemes = false;
    this.showMarshalls = false;
  }
}
toggleShowThemes(){
  if(this.showThemes == true){
    this.showThemes = false;
  }
  else{
    this.showThemes = true;
    this.showRides = false;
    this.showMarshalls = false;
  }
}


}
