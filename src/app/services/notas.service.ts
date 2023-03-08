import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Nota from '../models/Nota';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  private readonly url: string = `${environment.apiUrl}/notas`;

  constructor(private http: HttpClient) { }

  get(): Observable<Nota[]>{
    return this.http.get<Nota[]>(this.url);
  }

  post(nota: Nota): Observable<Nota> {
    return this.http.post<Nota>(this.url, nota);
  }

  put(nota: Nota): Observable<Nota> {
    const url = `${this.url}/${nota._id}`
    return this.http.put<Nota>(url, nota);
  }

  delete(id: string): Observable<Nota> {
    const url = `${this.url}/${id}`
    return this.http.delete<Nota>(url);
  }
}
