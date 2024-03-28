import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card-row',
  templateUrl: './card-row.component.html',
  styleUrls: ['./card-row.component.css']
})
export class CardRowComponent {
  @Input() product:product={id:0,name:"",price:0,description:"",qunantity:0,totalWeight:0,animalType:"",type:"",image:""}
}
interface product{
  id:number
  name:string
  price:number
  description:string
  qunantity:number
  totalWeight:number
  animalType:string
  type:string
  image:string
}
