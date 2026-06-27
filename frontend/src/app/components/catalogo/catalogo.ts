import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto, ProductoBackend } from '../../api/producto';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-catalogo',
  imports: [CommonModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class CatalogoComponent implements OnInit {
  listaProductos: ProductoBackend[] = [];
  cargando: boolean = true;

  constructor(
    private productoService: Producto,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe({
      next: (data) => {
        this.listaProductos = data;
        this.cargando = false;
        this.cd.detectChanges();
      },
      error: () => {
        this.cargando = false;
        Swal.fire({ icon: 'error', title: 'Oops...', text: 'No se pudieron cargar los productos.' });
      }
    });
  }

  agregarProducto(producto: ProductoBackend) {
    this.productoService.agregarAlCarrito(producto.Id, 1).subscribe({
      next: () => {
        Swal.fire({
          title: '¡Agregado!',
          text: `${producto.Nombre} se agregó al carrito.`,
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se pudo agregar el producto al carrito.'
        });
      }
    });
  }
}