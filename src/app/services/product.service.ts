import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  constructor() {
    this.initializeProducts();
  }

  private initializeProducts(): void {
    const product1 = new Product('P001');
    product1.productTitle = 'Laptop Dell XPS 15';
    product1.prouctPrice = '12999.99 DH';
    product1.productImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRegiq4BE2AGOikbuFxEF_Z4aUtD_4ldlq-zA&s';
    product1.category = 'Ordinateurs';

    const product2 = new Product('P002');
    product2.productTitle = 'iPhone 14 Pro';
    product2.prouctPrice = '10990.00 DH';
    product2.productImage = 'data:image/jpeg;base64,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';
    product2.category = 'Smartphones';

    const product3 = new Product('P003');
    product3.productTitle = 'Samsung Galaxy S23';
    product3.prouctPrice = '8999.99 DH';
    product3.productImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLKIw4qNhUzxP02L4uO9rVHoX7rIXVzCzKgg&s';
    product3.category = 'Smartphones';

    const product4 = new Product('P004');
    product4.productTitle = 'MacBook Air M2';
    product4.prouctPrice = '13990.00 DH';
    product4.productImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQae957vPnDga_cjGA544OCKF954gqweVQSrg&s';
    product4.category = 'Ordinateurs';

    const product5 = new Product('P005');
    product5.productTitle = 'iPad Pro 12.9"';
    product5.prouctPrice = '11999.99 DH';
    product5.productImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWh9AdVtxsXqYiDh8WiR_XFqdw3gnBKAoWGA&s';
    product5.category = 'Tablettes';

    const product6 = new Product('P006');
    product6.productTitle = 'Sony WH-1000XM5';
    product6.prouctPrice = '3499.99 DH';
    product6.productImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzSadGm8lPvpeMqFIDS01Y6IVvrhZYU4pFuQ&s';
    product6.category = 'Audio';

    const product7 = new Product('P007');
    product7.productTitle = 'Apple Watch Series 8';
    product7.prouctPrice = '4490.00 DH';
    product7.productImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWEco1HNsg9-Uc32aVuD_aVeDnwSqijr3_0Q&s';
    product7.category = 'Montres';

    const product8 = new Product('P008');
    product8.productTitle = 'AirPods Pro 2';
    product8.prouctPrice = '2799.99 DH';
    product8.productImage = 'https://uno.ma/pub/media/catalog/product/cache/af8d7fd2c4634f9c922fba76a4a30c04/l/d/ld0005977813_1.jpeg';
    product8.category = 'Audio';

    const product9 = new Product('P009');
    product9.productTitle = 'Nintendo Switch OLED';
    product9.prouctPrice = '3499.99 DH';
    product9.productImage = 'https://storage.micromagma.ma/micromagma/204d9acb708603351aca04984562e491.jpg';
    product9.category = 'Consoles';

    const product10 = new Product('P010');
    product10.productTitle = 'PlayStation 5';
    product10.prouctPrice = '4999.99 DH';
    product10.productImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXJCeqe9RErPgSAGqm52985gh5w8l2Ya-AEg&s';
    product10.category = 'Consoles';

    this.products = [
      product1, product2, product3, product4, product5,
      product6, product7, product8, product9, product10
    ];
  }


  getProducts(): Product[] {
    return [...this.products];
  }
  getProductList(): Product[] {
    return [...this.products];
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(Product => Product.productID === id.toString());
  }
}
  

