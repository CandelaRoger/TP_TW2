import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Producto } from '../../servicios/producto'; 

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class CarritoComponent implements OnInit {
  itemsCarrito: any[] = [];
  total: number = 0;

  constructor(
    private productoService: Producto,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itemsCarrito = this.productoService.obtenerCarrito();
    this.calcularTotal();
  }

  calcularTotal(): void {
    this.total = this.itemsCarrito.reduce((acc, item) => acc + (item.Precio * (item.cantidad || 1)), 0);
  }

  volverAlCatalogo(): void {
    this.router.navigate(['/productos']); 
  }

  finalizarCompra(): void {
    alert('Pedido realizado con éxito. Gracias por tu compra en Mundo Electrónico.');
    this.productoService.limpiarCarrito();
    this.volverAlCatalogo();
  }
}