import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Categoria from '../models/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private readonly url: string = `${environment.apiUrl}/categorias`;

  constructor(private http: HttpClient) { }

  get(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.url);
  }

  post(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.url, categoria);
  }

  put(categoria: Categoria): Observable<Categoria> {
    const url = `${this.url}/${categoria._id}`
    return this.http.put<Categoria>(url, categoria);
  }

  delete(id: string): Observable<Categoria> {
    const url = `${this.url}/${id}`
    return this.http.delete<Categoria>(url);
  }
}
