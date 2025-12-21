import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  @Input() product!: Product;
  @Output() buy = new EventEmitter<void>();
  getImageUrl(product: Product): String {
    return product.productImage ;
  }
  byButtonClicked(product: Product, event: Event): void {
    event.preventDefault();
    const button = event.target as HTMLElement;
    const buttonElement = button.closest('.btn') as HTMLElement;

    if (buttonElement) {
      buttonElement.classList.add('added');
      setTimeout(() => {
        buttonElement.classList.remove('added');
      }, 800);
    }
    this.buy.emit();
    console.log('Produit acheté:', product.productTitle);
  }
}
