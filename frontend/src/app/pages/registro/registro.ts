import { Component,ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms'; 
import { Router } from '@angular/router';
import { Producto} from '../../api/services/producto/producto.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class RegistroComponent {

  usuario = {
  nombre: '',
  apellido: '',
  email: '',
  password: '',
  direccion: ''
};

  mensajeError: string = '';

  constructor(
    private productoService: Producto,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  onSubmit(): void {
    this.productoService.registrarUsuario(this.usuario).subscribe({
      next: (res) => {
        this.router.navigate(['/login']); 
      },
      error: (err) => {
        this.mensajeError = err.error?.error || 'Ocurrió un error en el registro.';
        this.cdr.detectChanges();
      }
    });
  }
}