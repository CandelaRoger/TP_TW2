import { Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo';
import { CarritoComponent } from './components/carrito/carrito';

export const routes: Routes = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' }, 
  { path: 'productos', component: CatalogoComponent },
  { path: 'pedido', component: CarritoComponent }
];
