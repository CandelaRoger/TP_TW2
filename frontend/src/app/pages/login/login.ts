import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../api/services/auth.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

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
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  mensajeError = '';

  onSubmit(): void {

    this.mensajeError = '';

    if (!this.usuario.email) {
      this.mensajeError = 'Debe ingresar un correo electrónico.';
      return;
    }

    if (!this.usuario.password) {
      this.mensajeError = 'Debe ingresar una contraseña.';
      return;
    }

    this.authService.login(
      this.usuario.email,
      this.usuario.password
    ).subscribe({

      next: () => {

        this.router.navigate(['/productos']);

      },

      error: (err) => {

        if (err.status === 401) {
          this.mensajeError = 'Los datos ingresados son incorrectos.';
        } else {
          this.mensajeError =
            err.error?.error || 'Ocurrió un error al iniciar sesión.';
        }

        this.cdr.detectChanges();

      }

    });

  }
}