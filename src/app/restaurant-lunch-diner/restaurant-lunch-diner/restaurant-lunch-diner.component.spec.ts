import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantLunchDinerComponent } from './restaurant-lunch-diner.component';

describe('RestaurantLunchDinerComponent', () => {
  let component: RestaurantLunchDinerComponent;
  let fixture: ComponentFixture<RestaurantLunchDinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantLunchDinerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantLunchDinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
