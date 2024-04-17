import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-pop-up',
  templateUrl: './alert-pop-up.component.html',
  styleUrls: ['./alert-pop-up.component.css'],
})
export class AlertPopUpComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      id: 0;
      name: '';
      price: 0;
      description: '';
      qunantity: 0;
      totalWeight: 0;
      animalType: '';
      type: '';
      image: '';
      alertType: '';
    }
  ) {}
}
