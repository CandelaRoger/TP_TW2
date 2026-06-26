import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto, ProductoBackend } from '../../servicios/producto';import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  imports: [CommonModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class CatalogoComponent implements OnInit {
  // Array vacío donde guardaremos los productos que traiga el backend
  listaProductos: ProductoBackend[] = []; 
  // Inyectamos el servicio en el constructor
  constructor(
    private productoService: Producto,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
    // Cuando el componente se inicializa, llamamos al backend
    this.productoService.obtenerProductos().subscribe({
      next: (data) => {
        this.listaProductos = data; // Guardamos los datos recibidos
        console.log('Productos cargados:', this.listaProductos);

        this.cd.detectChanges();
      },
      error: (err) => {
        console.error('Error al traer los productos del backend:', err);
      }
    });
  }

  agregarProducto(producto: ProductoBackend) {
    console.log('[Frontend] Click en "Agregar" sobre producto:', producto);

    this.productoService.agregarAlCarrito(producto).subscribe({
      next: (carrito) => {
        console.log('[Frontend] Carrito actualizado luego de agregar:', carrito);
        alert(`${producto.Nombre} se agregó al pedido.`);
      },
      error: (err) => {
        console.error('[Frontend] Error al agregar producto al carrito:', err);
        alert('No se pudo agregar el producto al pedido.');
      }
    });
  }


}
