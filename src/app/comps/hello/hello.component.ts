import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h2>Hello, {{name}}</h2>
    <input placeholder="Enter your name" [(ngModel)]="name"/>
  `,
  styles: [` h2 {
      color: #1976d2;
      font-family: Arial, sans-serif;
    }
    input {
      padding: 6px;
      margin-top: 10px;
      border-radius: 4px;
      border: 1px solid #ccc;
    }`],
  imports: [FormsModule]

})
export class HelloComponent {
  name = "hemant";
}
