import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from '@angular/common'
import { ProductoBackend, CarritoItemBackend } from "../../interfaces/producto.interface";

@Component({
    selector: 'app-pokemon',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './pokemon.html',
    styleUrl: './pokemon.css'
})
export class PokemonComponent{

    @Input() datos: any;
    @Input() vista: 'catalogo' | 'carrito' = 'catalogo';
    @Input() cantidad: number= 1;
    @Input() subtotal: number= 0;

    @Output()onIncrementar= new EventEmitter<any>();
    @Output() onDecrementar = new EventEmitter<any>();
    @Output() onAgregar = new EventEmitter<any>();
    @Output() onEliminar = new EventEmitter<any>();
}