import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap, tap } from 'rxjs';
// usmaos typscript con interfaces preguntar al profe si est anien asi
export interface ProductoBackend {
  Id: number;
  Nombre: string;
  Descripcion: string;
  Clasificacion: string;
  Precio: number;
}

export interface CarritoItemBackend {
  ItemId: number;
  ProductoId: number;
  Nombre: string;
  Descripcion: string;
  Clasificacion: string;
  Precio: number;
  Cantidad: number;
  Subtotal: number;
}

export interface CarritoBackend {
  CarritoId: number;
  Cerrado: boolean;
  Items: CarritoItemBackend[];
  Total: number;
}

@Injectable({
  providedIn: 'root',
})
export class Producto {
  private apiUrl = 'http://localhost:3000/api';
  private carritoIdKey = 'carritoId';

  constructor(private http: HttpClient) {}

  //products

  obtenerProductos(): Observable<ProductoBackend[]> {
    console.log('[Frontend] GET productos ->', `${this.apiUrl}/datos`);
    return this.http.get<ProductoBackend[]>(`${this.apiUrl}/datos`);
  }

  // carrito

  private obtenerCarritoIdGuardado(): number | null {
    const id = localStorage.getItem(this.carritoIdKey);
    return id ? Number(id) : null;
  }

  private guardarCarritoId(id: number): void {
    console.log('[Frontend] Guardando carritoId en localStorage:', id);
    localStorage.setItem(this.carritoIdKey, String(id));
  }

  private limpiarCarritoIdGuardado(): void {
    console.log('[Frontend] Limpiando carritoId de localStorage');
    localStorage.removeItem(this.carritoIdKey);
  }

  private crearCarrito(): Observable<{ CarritoId: number }> {
    console.log('[Frontend] POST carrito (creando carrito nuevo) ->', `${this.apiUrl}/carrito`);
    return this.http.post<{ CarritoId: number }>(`${this.apiUrl}/carrito`, {});
  }

  //devolvemos id actual
  private obtenerOcrearCarritoId(): Observable<number> {
    const idGuardado = this.obtenerCarritoIdGuardado();

    if (idGuardado) {
      console.log('[Frontend] Reutilizando carrito existente, id:', idGuardado);
      return of(idGuardado);
    }

    return this.crearCarrito().pipe(
      tap((res) => this.guardarCarritoId(res.CarritoId)),
      switchMap((res) => of(res.CarritoId))
    );
  }

  //agrga producto al carrito acautl si no exdiste lo crea
  agregarAlCarrito(producto: ProductoBackend, cantidad: number = 1): Observable<CarritoBackend> {
    return this.obtenerOcrearCarritoId().pipe(
      switchMap((carritoId) => {
        console.log('[Frontend] POST agregar item -> carritoId:', carritoId, 'productoId:', producto.Id);
        return this.http.post<CarritoBackend>(
          `${this.apiUrl}/carrito/${carritoId}/items`,
          { productoId: producto.Id, cantidad }
        );
      })
    );
  }

  //ytrae el carrito actual del cliente y sino null
  obtenerCarrito(): Observable<CarritoBackend | null> {
    const carritoId = this.obtenerCarritoIdGuardado();

    if (!carritoId) {
      console.log('[Frontend] No hay carritoId guardado, no se consulta al backend');
      return of(null);
    }

    console.log('[Frontend] GET carrito ->', `${this.apiUrl}/carrito/${carritoId}`);
    return this.http.get<CarritoBackend>(`${this.apiUrl}/carrito/${carritoId}`);
  }

  // confirma el pedido y sdsp limpi acarrito 
  finalizarPedido(): Observable<CarritoBackend | null> {
    const carritoId = this.obtenerCarritoIdGuardado();

    if (!carritoId) {
      console.log('[Frontend] No hay carritoId guardado, no se puede finalizar');
      return of(null);
    }

    console.log('[Frontend] POST finalizar pedido -> carritoId:', carritoId);
    return this.http
      .post<CarritoBackend>(`${this.apiUrl}/carrito/${carritoId}/finalizar`, {})
      .pipe(tap(() => this.limpiarCarritoIdGuardado()));
  }
}