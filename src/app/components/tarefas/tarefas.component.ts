import { Component, OnInit } from '@angular/core';
import Tarefa from 'src/app/models/Tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {

  public tarefa: Tarefa = new Tarefa({});

  public tarefas: Tarefa[] = [];

  constructor(private service: TarefaService){}

  ngOnInit(): void {
      this.listarTarefas();
  }  

  listarTarefas(){
    this.service.get().subscribe(result => {
      console.log(result)
      this.tarefas = result;
    });
  }

  criarTarefa(){
    this.tarefas.push(this.tarefa);
    this.tarefa = new Tarefa({});
  }
}