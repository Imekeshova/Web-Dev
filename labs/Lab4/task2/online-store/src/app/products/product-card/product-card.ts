import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  template: `
    <div class="card">

      <div class="image-wrapper">
        <img [src]="product.images[currentImageIndex]" />

        <div class="controls">
          <button (click)="prevImage()">◀</button>
          <button (click)="nextImage()">▶</button>
        </div>
      </div>

      <h3>{{ product.name }}</h3>

      <p class="desc">{{ product.description }}</p>

      <p class="price">{{ product.price }} ₸</p>

      <div class="rating">
        @for (star of [1,2,3,4,5]; track star) {
          <span>{{ star <= product.rating ? '★' : '☆' }}</span>
        }
      </div>

      <a class="view" [href]="product.link" target="_blank">
        View on Kaspi
      </a>

      <button (click)="shareWhatsApp()">Share WhatsApp</button>
      <button (click)="shareTelegram()">Share Telegram</button>

    </div>
  `,
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent {

  @Input() product!: Product;

  currentImageIndex = 0;

  nextImage() {
    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.product.images.length;
  }

  prevImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.product.images.length) %
      this.product.images.length;
  }

  shareWhatsApp() {
    const message = encodeURIComponent(
      'Check out this product: ' + this.product.link
    );
    window.open('https://wa.me/?text=' + message, '_blank');
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);

    window.open(
      'https://t.me/share/url?url=' + url + '&text=' + text,
      '_blank'
    );
  }
}