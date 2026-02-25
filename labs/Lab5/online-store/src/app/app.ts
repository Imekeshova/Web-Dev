import { Component } from '@angular/core';

import { ProductListComponent } from './products/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.html'
})
export class AppComponent {

  selectedCategoryId: number | null = null;

  categories = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Accessories' },
    { id: 3, name: 'Headphnes' },
    { id: 4, name: 'Other' }
  ];

  selectCategory(id: number | null) {
    this.selectedCategoryId = id;
  }
}