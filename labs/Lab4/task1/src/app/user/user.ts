import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>User Page</h2>
    <input [(ngModel)]="name" />
    <p>{{ name }}</p>
  `,
})
export class User {
  name = '';
}