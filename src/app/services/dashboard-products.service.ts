import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardProductsService {

  baseUrl: string = 'http://localhost:5031/api/DashboardProducts/';

  constructor(public http: HttpClient) { }

  getAllProducts() {
    return this.http.get(this.baseUrl,{headers: {Authorization: 'Bearer ' + localStorage.getItem('_petsToken')}});
  }
}
