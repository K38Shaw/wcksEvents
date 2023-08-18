import { Component } from '@angular/core';


export class Ride{
  name: string = "";
  description: string = "";
  originLocation: string = " ";
  imageSrc: string = "../../assets/images/westernRailroad.jpeg";
  numberOnFairMap: number = 0;

  constructor(name: string, description: string, originLocation: string, imageSrc: string, numberOnFairMap: number){
    this.name = name;
    this.description = description;
    this.originLocation = originLocation;
    this.imageSrc = imageSrc
    this.numberOnFairMap = numberOnFairMap;
  }
}
@Component({
  selector: 'app-ride-history',
  templateUrl: './ride-history.component.html',
  styleUrls: ['./ride-history.component.css']
})

export class RideHistoryComponent {
 
  rides = [
    new Ride("Bullet", "Bullet ride description", "Unknown", "../../assets/images/bulletFront.jpeg", 1),
    new Ride("Western Railroad", "Railroad ride description", "Unknown", "../../assets/images/westernRailroad.jpeg", 2),
    new Ride("Round-Up", "Fair ride description", "Unknown", "../../assets/images/roundUp.jpeg", 3),
    new Ride("Scrambler", "Fair ride description", "Unknown", "../../assets/images/scrambler.jpeg", 4),
    new Ride("Big Ferris Wheel", "Fair ride description", "Unknown", "../../assets/images/bigFerris.jpeg", 5),
    new Ride("Roller Coaster", "Designed and built by the Allan Herschell Company, This is the oldest Little Dipper design with flat turns and the first model train. This ride is one of many that was acquired from Loveland, CO after the Great Thompson Flood in 1976. ", "Unknown", "../../assets/images/coasterPavillion.jpeg", 6),
    new Ride("Cars", "Fair ride description", "Unknown", "../../assets/images/cars.jpeg", 7),
    new Ride("Kiddie Train", "Fair ride description", "Unknown", "../../assets/images/kiddieTrain.jpeg", 8),
    new Ride("Boats", "Fair ride description", "Unknown", "../../assets/images/boats.jpeg", 9),
    new Ride("Kiddie Ferris Wheel", "Fair ride description", "Unknown", "../../assets/images/kiddieFerris.jpeg", 10),
    new Ride("Helicopters", "Fair ride description", "Unknown", "../../assets/images/helicopters2.jpeg", 11),
    new Ride("Merry-Go-Round", "Fair ride description", "Unknown", "../../assets/images/merryGoRound.jpeg", 12),
  ]



}
