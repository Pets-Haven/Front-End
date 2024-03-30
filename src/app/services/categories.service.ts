import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  baseUrl: string = 'http://localhost:3000/Categories';
  Categories: any;
  constructor(public http: HttpClient) {
    this.getAllCategories().subscribe((Categories) => {
      this.Categories = Categories;
    });
  }
  getAllCategories() {
    return this.http.get(this.baseUrl);
  }
  getcategorybyid(id: string) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
