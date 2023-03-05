import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Tarefa from '../models/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private readonly url: string = `${environment.apiUrl}/tarefas`


  constructor(private http: HttpClient) { }

  get(): Observable<Tarefa[]>{
    return this.http.get<Tarefa[]>(this.url);
  }

  post(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.url, tarefa);
  }
}
