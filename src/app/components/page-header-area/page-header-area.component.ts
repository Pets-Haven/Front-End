import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header-area',
  templateUrl: './page-header-area.component.html',
  styleUrls: ['./page-header-area.component.css']
})
export class PageHeaderAreaComponent {
  @Input() mainText : string = '';
}
