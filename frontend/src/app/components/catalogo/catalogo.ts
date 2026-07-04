import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Producto } from '../../api/services/producto/producto.service';
import { AuthService } from '../../api/services/auth.service';
import { ProductoBackend } from '../../interfaces/producto.interface';
import { PokemonComponent } from '../pokemon/pokemon';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catalogo',
  imports: [CommonModule, FormsModule, PokemonComponent],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class CatalogoComponent implements OnInit {
  listaProductos: ProductoBackend[] = [];
  productosFiltrados: ProductoBackend[] = [];

  textoBusqueda: string = '';
  cargando: boolean = true;
  cantidades: { [id: number]: number } = {};

  private readonly CANTIDAD_MINIMA = 1;
  private readonly CANTIDAD_MAXIMA = 99;

  constructor(
    private productoService: Producto,
    private authService: AuthService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe({
      next: (data) => {
        this.listaProductos = data;
        this.productosFiltrados = [...data];
        data.forEach((producto) => (this.cantidades[producto.Id] = this.CANTIDAD_MINIMA));
        this.cargando = false;
        this.cd.detectChanges();
      },
      error: () => {
        this.cargando = false;
        Swal.fire({ icon: 'error', title: 'Oops...', text: 'No se pudieron cargar los productos.' });
      }
    });
  }

  obtenerCantidad(producto: ProductoBackend): number {
    return this.cantidades[producto.Id] ?? this.CANTIDAD_MINIMA;
  }

  incrementarCantidad(producto: ProductoBackend): void {
    const actual = this.obtenerCantidad(producto);
    if (actual < this.CANTIDAD_MAXIMA) {
      this.cantidades[producto.Id] = actual + 1;
    }
  }

  decrementarCantidad(producto: ProductoBackend): void {
    const actual = this.obtenerCantidad(producto);
    if (actual > this.CANTIDAD_MINIMA) {
      this.cantidades[producto.Id] = actual - 1;
    }
  }

  agregarProducto(producto: ProductoBackend) {
    if (!this.authService.estaLogueado()) {
      Swal.fire({
        icon: 'info',
        title: 'Iniciá sesión',
        text: 'Necesitás iniciar sesión para agregar productos al carrito.'
      }).then(() => {
        this.router.navigate(['/login']);
      });
      return;
    }

    const cantidad = this.obtenerCantidad(producto);
    this.productoService.agregarAlCarrito(producto.Id, cantidad).subscribe({
      next: () => {
        const sonido = new Audio('assets/sounds/agregarAlCarrito.mp3');
        sonido.play();
        Swal.fire({
          title: '¡Agregado!',
          text: `${cantidad} x ${producto.Nombre} se agregó al carrito.`,
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });
        this.cantidades[producto.Id] = this.CANTIDAD_MINIMA;
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se pudo agregar el producto al carrito.'
        });
      }
    });

  } filtrarProductos(): void {
    const texto = this.textoBusqueda.trim().toLowerCase();

    if (!texto) {
      this.productosFiltrados = [...this.listaProductos];
      return;
    }

    this.productosFiltrados = this.listaProductos.filter(producto =>
      producto.Nombre.toLowerCase().includes(texto) ||
      producto.Descripcion.toLowerCase().includes(texto) ||
      producto.Clasificacion.toLowerCase().includes(texto)
    );
  }
}