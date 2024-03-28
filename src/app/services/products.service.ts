import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl:string = "http://localhost:3000/products"
  constructor(public http:HttpClient) {

   }
   getAllproducts(){
    return this.http.get(this.baseUrl); // observable 
   }
}
