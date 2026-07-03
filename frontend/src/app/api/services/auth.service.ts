import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api/usuario';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {

    return this.http.post(`${this.apiUrl}/login`, {
      email,
      password
    }).pipe(

      tap((respuesta: any) => {

        localStorage.setItem(
          "usuario",
          JSON.stringify(respuesta.usuario)
        );

      })

    );

  }

  logout() {

    localStorage.removeItem("usuario");

  }

  obtenerUsuario() {

    const usuario = localStorage.getItem("usuario");

    return usuario ? JSON.parse(usuario) : null;

  }

  estaLogueado(): boolean {

    return this.obtenerUsuario() != null;

  }

}