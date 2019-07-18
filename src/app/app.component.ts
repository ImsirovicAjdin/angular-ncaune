import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      Parent component
    </div>
    <app-child *ngFor="let vehicle of vehicles" [car]="vehicle"></app-child>
  `
})
export class AppComponent {
  vehicles = [
    {
      id: 1,
      make: 'Toyota'
    },
    {
      id: 2, 
      make: 'Subaru'
    },
    {
      make: 'VW'
    },
    {
    }
  ]
}
