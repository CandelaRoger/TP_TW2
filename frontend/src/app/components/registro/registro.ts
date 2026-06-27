import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { Producto} from '../../api/producto';

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
    private router: Router
  ) {}

  onSubmit(): void {
    this.productoService.registrarUsuario(this.usuario).subscribe({
      next: (res) => {
        alert('Registro exitoso');
        this.router.navigate(['/productos']); 
      },
      error: (err) => {
        this.mensajeError = err.error?.error || 'Ocurrió un error en el registro.';
      }
    });
  }
}