import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsManagmentComponent } from './products-managment.component';

describe('ProductsManagmentComponent', () => {
  let component: ProductsManagmentComponent;
  let fixture: ComponentFixture<ProductsManagmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsManagmentComponent]
    });
    fixture = TestBed.createComponent(ProductsManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
