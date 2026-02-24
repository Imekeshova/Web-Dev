import { Component } from '@angular/core';
import { ReversePipe } from './reverse.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReversePipe],
  template: `
    <h2>Reverse Machine</h2>
    <p>{{ word | reverse }}</p>
  `,
})
export class App {
  word = 'You are a champion';
}