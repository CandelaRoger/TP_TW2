import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../api/services/auth.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  usuario = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  mensajeError = '';

  onSubmit() {

    this.mensajeError = '';

    this.authService.login(
      this.usuario.email,
      this.usuario.password
    ).subscribe({

      next: (respuesta) => {

       
        this.router.navigate(['/productos']);
      },

      error: (error) => {

        this.mensajeError =
          error.error.error || "Correo o contraseña incorrectos.";

      }

    });

  }
}