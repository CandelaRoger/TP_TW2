import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Producto } from '../../api/services/producto/producto.service';
import { AuthService } from '../../api/services/auth.service';
import { CarritoItemBackend } from '../../interfaces/producto.interface';
import { PokemonComponent } from '../pokemon/pokemon';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, PokemonComponent],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class CarritoComponent implements OnInit {
  itemsCarrito: CarritoItemBackend[] = [];
  total: number = 0;

  private readonly CANTIDAD_MINIMA = 1;
  private readonly CANTIDAD_MAXIMA = 99;

  constructor(
    private productoService: Producto,
    private authService: AuthService, 
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (!this.authService.estaLogueado()) { 
      Swal.fire({
        icon: 'info', 
        title: 'Iniciá sesión', 
        text: 'Necesitás iniciar sesión para ver tu carrito.' 
      }).then(() => { 
        this.router.navigate(['/login']); 
      }); 
      return; 
    } 

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

  private recalcularTotal(): void {
    this.total = this.itemsCarrito.reduce((acc, item) => acc + item.Subtotal, 0);
  }

  incrementarCantidad(item: CarritoItemBackend): void {
    if (item.Cantidad >= this.CANTIDAD_MAXIMA) {
      return;
    }
    const nuevaCantidad = item.Cantidad + 1;
    this.productoService.actualizarCantidadCarrito(item.Id, nuevaCantidad).subscribe({
      next: () => {
        item.Cantidad = nuevaCantidad;
        item.Subtotal = item.Precio * nuevaCantidad;
        this.recalcularTotal();
        this.cd.detectChanges();
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se pudo actualizar la cantidad.'
        });
      }
    });
  }

  decrementarCantidad(item: CarritoItemBackend): void {
    if (item.Cantidad <= this.CANTIDAD_MINIMA) {
      return;
    }
    const nuevaCantidad = item.Cantidad - 1;
    this.productoService.actualizarCantidadCarrito(item.Id, nuevaCantidad).subscribe({
      next: () => {
        item.Cantidad = nuevaCantidad;
        item.Subtotal = item.Precio * nuevaCantidad;
        this.recalcularTotal();
        this.cd.detectChanges();
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se pudo actualizar la cantidad.'
        });
      }
    });
  }

  eliminarItem(item: CarritoItemBackend): void {
    Swal.fire({
      title: '¿Eliminar producto?',
      text: `Se quitará "${item.Nombre}" del carrito.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#EF4444'
    }).then((resultado) => {
      if (!resultado.isConfirmed) {
        return;
      }
      this.productoService.eliminarDelCarrito(item.Id).subscribe({
        next: () => {
          this.itemsCarrito = this.itemsCarrito.filter((i) => i.Id !== item.Id);
          this.recalcularTotal();
          this.cd.detectChanges();
        },
        error: () => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se pudo eliminar el producto.'
          });
        }
      });
    });
  }

  finalizarCompra(): void {
    this.productoService.confirmarPedido().subscribe({
      next: () => {
         const sonido = new Audio('assets/sounds/confirmarCompra.mp3');
        sonido.play();
        Swal.fire({
          title: '¡Compra exitosa!',
          text: 'Gracias por su compra en Mundo Pokemon :)',
          icon: 'success',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#896ef5'
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