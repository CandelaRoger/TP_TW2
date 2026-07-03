import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoBackend, CarritoBackend } from '../../../interfaces/producto.interface';


@Injectable({
  providedIn: 'root',
})
export class Producto {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<ProductoBackend[]> {
    return this.http.get<ProductoBackend[]>(`${this.apiUrl}/datos`);
  }

  agregarAlCarrito(productoId: number, cantidad: number = 1): Observable<{ mensaje: string }> {
    return this.http.post<{ mensaje: string }>(`${this.apiUrl}/carrito`, { productoId, cantidad });
  }

  obtenerCarrito(): Observable<CarritoBackend> {
    return this.http.get<CarritoBackend>(`${this.apiUrl}/carrito`);
  }

  confirmarPedido(): Observable<{ mensaje: string }> {
    return this.http.post<{ mensaje: string }>(`${this.apiUrl}/carrito/confirmar`, {});
  }

  actualizarCantidadCarrito(itemId: number, cantidad: number): Observable<{ mensaje: string }> {
    return this.http.put<{ mensaje: string }>(`${this.apiUrl}/carrito/${itemId}`, { cantidad });
  }

  eliminarDelCarrito(itemId: number): Observable<{ mensaje: string }> {
    return this.http.delete<{ mensaje: string }>(`${this.apiUrl}/carrito/${itemId}`);
  }

registrarUsuario(usuario: any): Observable<any> {
  const urlRegistro = 'http://localhost:3000/api/usuario/registro';
  return this.http.post(urlRegistro, usuario);
}
}