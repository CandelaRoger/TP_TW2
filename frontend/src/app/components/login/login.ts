import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  usuario = {
    email: '',
    password: ''
  };

  mensajeError = '';

  onSubmit() {
    console.log('Login con:', this.usuario);
    // Acá después llamás al servicio que hace el POST al backend
  }
}