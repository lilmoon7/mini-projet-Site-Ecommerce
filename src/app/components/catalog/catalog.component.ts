import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-catalog',
  standalone: true,
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
  imports: [CommonModule, ProductDetailsComponent, RouterLink, RouterLinkActive]
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  filter: string = "";
  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProductList();
    console.log("ngOnInit products :", this.products);
    this.route.queryParams.subscribe((params) => {
      this.filter = params['filter'] ?? '';
      console.log("Filtre actif:", this.filter);
    });
  }
  getFilteredProducts(): Product[] {
    if (this.filter === '') {
      return this.products;
    }
    return this.products.filter((product: Product) => {
      const category = product.category.toString().toLowerCase();
      return category.includes(this.filter.toLowerCase());
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    console.log('Produit ajouté au panier:', product.productTitle);
  }
}
