import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Producto, CarritoItemBackend } from '../../servicios/producto'; 

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class CarritoComponent implements OnInit {
  itemsCarrito: CarritoItemBackend[] = [];
  total: number = 0;

  constructor(
    private productoService: Producto,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

 ngOnInit(): void {
    console.log('[Frontend] Cargando carrito desde el backend...');

    this.productoService.obtenerCarrito().subscribe({
      next: (carrito) => {
        console.log('[Frontend] Respuesta del backend (carrito):', carrito);
     this.itemsCarrito = carrito?.Items ?? [];
        this.total = carrito?.Total ?? 0;

        this.cd.detectChanges();
      },
      error: (err) => {
        console.error('[Frontend] Error al obtener el carrito:', err);
      }
    });
  }
  calcularTotal(): void {
    this.total = this.itemsCarrito.reduce((acc, item) => acc + (item.Precio * (item.Cantidad || 1)), 0);
  }

  volverAlCatalogo(): void {
    this.router.navigate(['/productos']); 
  }

   finalizarCompra(): void {
    console.log('[Frontend] Confirmando pedido...');

    this.productoService.finalizarPedido().subscribe({
      next: (resumen) => {
        console.log('[Frontend] Pedido finalizado, resumen:', resumen);
        alert('Pedido realizado con éxito. Gracias por tu compra en Mundo Electrónico.');
        this.itemsCarrito = [];
        this.total = 0;

        this.cd.detectChanges();
        this.volverAlCatalogo();
      },
      error: (err) => {
        console.error('[Frontend] Error al finalizar el pedido:', err);
        alert('No se pudo confirmar el pedido.');
      }
    });
}}