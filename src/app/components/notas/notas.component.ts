import { Component, OnInit } from '@angular/core';
import Categoria from 'src/app/models/Categoria';
import Nota from 'src/app/models/Nota';
import { CategoriasService } from 'src/app/services/categorias.service';
import { NotasService } from 'src/app/services/notas.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent implements OnInit {

  public categorias: Categoria[] = [];
  public notas: Nota[] = [];

  public nota: Nota = new Nota({categoria: new Categoria({})});

  public cores: any[] = [
    {valor: "primary", texto: "azul"},
    {valor: "secondary", texto: "cinza"},
    {valor: "success", texto: "verde"},
    {valor: "danger", texto: "vermelho"},
    {valor: "warning", texto: "amarelo"},
    {valor: "info", texto: "azul claro"},
    {valor: "light", texto: "branco"},
    {valor: "dark", texto: "preto"},
  ];

  constructor(
    private categoriaService: CategoriasService,
    private notaService: NotasService){
  }

  ngOnInit(): void {
      this.listarCategorias();
      this.listarNotas();
  }

  listarCategorias(){
    this.categoriaService.get().subscribe(result => {
      this.categorias = result;
    });
  }

  listarNotas(){
    this.notaService.get().subscribe(result => {
      this.notas = result;
    });
  }

  criarNota(){
    this.notaService.post(this.nota).subscribe(result => {
      this.nota = new Nota({categoria: new Categoria({})});
      this.listarNotas( );

      
      let btn: HTMLElement | null = document.querySelector("#notaModal .btn-close");
      btn?.click();
    });
  }

  excluirNota(nota: Nota){
    this.notaService.delete(nota._id!).subscribe(result => {
      this.listarNotas( );
    });
  }

  preparaEditar(nota: Nota){
    Object.assign(this.nota, nota);
  }

  editarNota(){
    this.notaService.put(this.nota).subscribe(result => {
      this.listarNotas();

      let btn: HTMLElement | null = document.querySelector("#notaEditarModal .btn-close");
      btn?.click();
    });
  }

  verificarNota(){
    if(this.nota._id != undefined){
      this.nota = new Nota({categoria: new Categoria({})});
    }
  }
}
