import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { ProductoBackend, CarritoBackend } from '../../../interfaces/producto.interface';
import { AuthService } from '../auth.service'; 


@Injectable({
  providedIn: 'root',
})
export class Producto {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private authService: AuthService) {} 


  private headersUsuario(): HttpHeaders { 
    const usuario = this.authService.obtenerUsuario(); 
    let headers = new HttpHeaders(); 

    if (usuario?.id) { 
      headers = headers.set('x-usuario-id', String(usuario.id)); 
    } 

    return headers;
  } 

  obtenerProductos(): Observable<ProductoBackend[]> {
    return this.http.get<ProductoBackend[]>(`${this.apiUrl}/datos`);
  }

  agregarAlCarrito(productoId: number, cantidad: number = 1): Observable<{ mensaje: string }> {
    return this.http.post<{ mensaje: string }>( 
      `${this.apiUrl}/carrito`,
      { productoId, cantidad },
      { headers: this.headersUsuario() } 
    );
  }

  obtenerCarrito(): Observable<CarritoBackend> {
    return this.http.get<CarritoBackend>(`${this.apiUrl}/carrito`, { headers: this.headersUsuario() }); 
  }

  confirmarPedido(): Observable<{ mensaje: string }> {
    return this.http.post<{ mensaje: string }>( 
      `${this.apiUrl}/carrito/confirmar`,
      {},
      { headers: this.headersUsuario() } 
    );
  }

  actualizarCantidadCarrito(itemId: number, cantidad: number): Observable<{ mensaje: string }> {
    return this.http.put<{ mensaje: string }>( 
      `${this.apiUrl}/carrito/${itemId}`,
      { cantidad },
      { headers: this.headersUsuario() } 
    );
  }

  eliminarDelCarrito(itemId: number): Observable<{ mensaje: string }> {
    return this.http.delete<{ mensaje: string }>(
      `${this.apiUrl}/carrito/${itemId}`,
      { headers: this.headersUsuario() } 
    );
  }

registrarUsuario(usuario: any): Observable<any> {
  const urlRegistro = 'http://localhost:3000/api/usuario/registro';
  return this.http.post(urlRegistro, usuario);
}
}