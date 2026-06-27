import { Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo';
import { CarritoComponent } from './components/carrito/carrito';
import { RegistroComponent } from './components/registro/registro';
import { Landing} from './components/landing/landing';
import { Login} from './components/login/login';


export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' }, 
  { path: 'productos', component: CatalogoComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'landing', component: Landing },
  { path: 'login', component: Login } ,
  { path: 'registro', component: RegistroComponent}
];
