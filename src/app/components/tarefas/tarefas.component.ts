import { Component } from '@angular/core';
import Tarefa from 'src/app/models/Tarefa';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent {

  public tarefas: Tarefa[] = [
    new Tarefa({_id: "1", conteudo: "tarefa 1", concluido: true}),
    new Tarefa({_id: "2", conteudo: "tarefa 2", concluido: false}),
    new Tarefa({_id: "3", conteudo: "tarefa 3", concluido: false}),
  ];

  public teste: String = "teste";
}
