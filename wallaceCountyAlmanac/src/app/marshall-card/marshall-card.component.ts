import { Component } from '@angular/core';

export class Marshall{
  name: string = "";
  year: string = "";
  reasoning: string = "";
  imageSrc: string = "";

  constructor(name: string, year: string, imageSrc: string){
    this.name = name;
    this.year = year;
    this.imageSrc = imageSrc;
  }
}
@Component({
  selector: 'app-marshall-card',
  templateUrl: './marshall-card.component.html',
  styleUrls: ['./marshall-card.component.css']
})
export class MarshallCardComponent {
 marshalls = [
   new Marshall("Ellen Pancake", "2023", "../../assets/images/boats.jpeg"),
   new Marshall("Connie and Deonne Hudson", "2022", "../../assets/images/boats.jpeg"),
   new Marshall("Bobie Akers, Ione Brown, Shirley Sharp", "2021", "../../assets/images/boats.jpeg"),
   new Marshall("Leon and Patty Lock", "2020", "../../assets/images/boats.jpeg"),
   new Marshall("Delgar and Phyllis Finley", "2019", "../../assets/images/boats.jpeg"),
   new Marshall("John and Elaine Welsch", "2018", "../../assets/images/boats.jpeg"),
   new Marshall("Norma and Marty Pilger", "2017", "../../assets/images/boats.jpeg"),
   new Marshall("CT and Denise Farr", "2016", "../../assets/images/boats.jpeg"),
   new Marshall("Jim and Melba Baehler", "2015", "../../assets/images/boats.jpeg"),
   new Marshall(" Paul and Cora Lee McNall", "2014", "../../assets/images/boats.jpeg"),
   new Marshall("Vernon and Dixie Schemm", "2013", "../../assets/images/boats.jpeg"),
   new Marshall("Frances Wertz", "2012", "../../assets/images/boats.jpeg"),
   new Marshall("Fran Reiss and Robert McKinney", "2011", "../../assets/images/boats.jpeg"),
   new Marshall("Helen Cowles and Evelyn Bricker", "2010", "../../assets/images/boats.jpeg"),
   new Marshall("Betty Pilger", "2009", "../../assets/images/boats.jpeg"),
   new Marshall("Bud and Elaine Fischer", "2008", "../../assets/images/boats.jpeg"),
   new Marshall("Luella Sterret", "2007", "../../assets/images/boats.jpeg"),
   new Marshall("Loid and Glenda Koehn", "2006", "../../assets/images/boats.jpeg"),
   new Marshall("Ernie Poe", "2005", "../../assets/images/boats.jpeg"),
   new Marshall("Harold and Eileen Frasier", "2004", "../../assets/images/boats.jpeg"),
   new Marshall("Evylen Bricker", "2003", "../../assets/images/boats.jpeg"),
   new Marshall("Virgina Tilton and Ila Lowe", "2002", "../../assets/images/boats.jpeg"),
   new Marshall("Floyd and Helen Larson", "2001", "../../assets/images/boats.jpeg"),
   new Marshall("S.L and Goldie Daily", "2000", "../../assets/images/boats.jpeg"),
   new Marshall("Marianna Pilger", "1999", "../../assets/images/boats.jpeg"),
   new Marshall("Snick and Joan Harrison", "1998", "../../assets/images/boats.jpeg"),
   new Marshall("Harold and Iris Schmalzrid", "1997", "../../assets/images/boats.jpeg"),
   new Marshall("Thelma Agnew", "1996", "../../assets/images/boats.jpeg"),
   new Marshall("Glenn and Lucille Huffman", "1995", "../../assets/images/boats.jpeg"),
   new Marshall("Tom and Rosy Stewart", "1994", "../../assets/images/boats.jpeg"),
   new Marshall("Marion and Helen Cowles", "1993", "../../assets/images/boats.jpeg"),
   new Marshall("Betty Harris", "1992", "../../assets/images/boats.jpeg"),
   new Marshall("Everett and Helen Baehler", "1991", "../../assets/images/boats.jpeg"),
   new Marshall("Charles Pearce", "1990", "../../assets/images/boats.jpeg"),
   new Marshall("Harry 'Swede' Lutz", "1989", "../../assets/images/boats.jpeg"),
   new Marshall("Marion JR Cowles, Edgar Heyl, and E.A. See", "1988", "../../assets/images/boats.jpeg"),
   new Marshall("Orvall Bowman", "1987", "../../assets/images/boats.jpeg"),
  ]

}
