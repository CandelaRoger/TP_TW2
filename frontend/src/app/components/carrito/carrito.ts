import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Producto } from '../../servicios/producto';
import { CarritoItemBackend } from '../../interfaces/producto.interface';
import Swal from 'sweetalert2';

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
    this.productoService.obtenerCarrito().subscribe({
      next: (carrito) => {
        this.itemsCarrito = carrito?.Items ?? [];
        this.total = carrito?.Total ?? 0;
        this.cd.detectChanges();
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se pudo cargar el carrito.'
        });
      }
    });
  }

  volverAlCatalogo(): void {
    this.router.navigate(['/productos']);
  }

  finalizarCompra(): void {
    this.productoService.confirmarPedido().subscribe({
      next: () => {
        Swal.fire({
          title: '¡Compra exitosa!',
          text: 'Gracias por su compra en Mundo Pokemon :)',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then(() => {
          this.itemsCarrito = [];
          this.total = 0;
          this.cd.detectChanges();
          this.volverAlCatalogo();
        });
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se pudo confirmar el pedido. Intentá de nuevo.'
        });
      }
    });
  }
}