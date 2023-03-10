import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Usuario from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly url: string = `${environment.apiUrl}/usuarios`;

  constructor(private http: HttpClient) { }

  registrar(usuario: Usuario): Observable<Usuario> {
    const url = `${this.url}/registrar`;
    return this.http.post<Usuario>(url, usuario);
  }

  login(usuario: Usuario): Observable<Usuario> {
    const url = `${this.url}/login`;
    return this.http.put<Usuario>(url, usuario);
  }
}