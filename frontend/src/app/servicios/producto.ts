import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Producto {
  private apiUrl = 'http://localhost:3000/api/datos'; 
  private carrito: any[] = [];

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
  obtenerCarrito() {
    return this.carrito;
  }

  agregarAlCarrito(producto: any) {
   
    const existe = this.carrito.find(p => p.Id === producto.Id);
    if (existe) {
      
      existe.cantidad = (existe.cantidad || 1) + 1;
    } else {
      
      this.carrito.push({ ...producto, cantidad: 1 });
    }
  }

  limpiarCarrito() {
    this.carrito = [];
  }
}
