import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../servicios/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  imports: [CommonModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class CatalogoComponent implements OnInit {
  
  listaProductos: any[] = []; 

 
  constructor(
    private productoService: Producto,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
   
    this.productoService.obtenerProductos().subscribe({
      next: (data) => {
        this.listaProductos = data; 
        console.log('Productos cargados:', this.listaProductos);

        this.cd.detectChanges();
      },
      error: (err) => {
        console.error('Error al traer los productos del backend:', err);
      }
    });
  }

  agregarProducto(producto: any) {
    this.productoService.agregarAlCarrito(producto);
    alert(`${producto.Nombre} se agregó al pedido.`);
  }

  irAlCarrito() {
    this.router.navigate(['/pedido']);
  }
irAlRegistro() {
  this.router.navigate(['/registro']);
}
}
