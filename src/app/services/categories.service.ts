import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  baseUrl: string = 'http://localhost:5031/api/Category';
  Categories: any;
  constructor(public http: HttpClient) {

  }
  getAllCategories() {
    return this.http.get(this.baseUrl);
  }

}
