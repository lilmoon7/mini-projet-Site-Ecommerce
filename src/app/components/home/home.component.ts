import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  cartItemCount: number = 0;
  constructor(
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}
  getdetailes(){
    this.router.navigate(['/product-details'])
  }
  goToSignIn(): void {
    this.router.navigate(['/signin']);
  }
  goToCart(): void {
    this.router.navigate(['/cart']);
  }
  ngOnInit(): void {
    this.products = this.productService.getProductList();
    console.log('Produits chargés dans HomeComponent:', this.products);
    this.updateCartCount();
  }
  updateCartCount(): void {
    this.cartItemCount = this.cartService.getCartItemCount();
  }
  addToCart(product: Product, event: Event): void {
    this.cartService.addToCart(product);
    console.log('Produit ajouté au panier:', product.productTitle);
    this.updateCartCount();
    const button = event.target as HTMLElement;
    const buttonElement = button.closest('.btn-add-cart') as HTMLElement;

    if (buttonElement) {
      buttonElement.classList.add('added');
      setTimeout(() => {
        buttonElement.classList.remove('added');
      }, 800);
    }
  }

  getImageUrl(product: Product): string {
    if (product.productImage && product.productImage.toString().trim() !== '') {
      return product.productImage.toString();
    }
    return '';
  }
  getNumericPrice(priceString: String): string {
    return priceString.toString();
  }
  extractPrice(priceString: String): number {
    const priceStr = priceString.toString().replace(/[^\d.]/g, '');
    return parseFloat(priceStr) || 0;
  }
}
