import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRowComponent } from './card-row.component';

describe('CardRowComponent', () => {
  let component: CardRowComponent;
  let fixture: ComponentFixture<CardRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardRowComponent]
    });
    fixture = TestBed.createComponent(CardRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
