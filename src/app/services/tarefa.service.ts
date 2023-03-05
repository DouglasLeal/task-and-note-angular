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
    console.log(this.url)
    return this.http.get<Tarefa[]>(this.url);
  }
}
