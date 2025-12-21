import { Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';

export const routes: Routes = [

    {path : 'home', component : HomeComponent, title: 'My Website'},
    {path : 'catalog', component : CatalogComponent, title: 'My Catalog products'},
    {path : 'product-details', component : ProductDetailsComponent, title: 'Product details'},
    {path : 'cart', component : CartComponent, title: 'My cart'},
    {path : 'signin', component : SigninComponent, title: 'My signin page'},
    {path : '', redirectTo : '/home', pathMatch : 'full'},

    { path: 'product/:id', component: ProductDetailsComponent },
    { path: '**', redirectTo: '/home' },

  {
    path: 'product/:id',
    component: ProductDetailsComponent
  }
];
