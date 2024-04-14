import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-search-home-icon',
  templateUrl: './search-home-icon.component.html',
  styleUrls: ['./search-home-icon.component.css'],
})
export class SearchHomeIconComponent {
  searchValue: string = '';
  constructor(public route: Router) {}
  search() {
    this.route.navigate(['products/search', this.searchValue]);
  }
}
