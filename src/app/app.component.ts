import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RestaurantLunchDinerComponent } from './restaurant-lunch-diner/restaurant-lunch-diner/restaurant-lunch-diner.component';
import { NavigationBarComponent } from './navbar/navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-root',
  imports: [RestaurantLunchDinerComponent, NavigationBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'boijmans';
}
