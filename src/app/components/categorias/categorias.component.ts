import { Component, OnInit } from '@angular/core';
import Categoria from 'src/app/models/Categoria';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  public categoria: Categoria = new Categoria({});

  public categorias: Categoria[] = [];

  constructor(private service: CategoriasService){}

  ngOnInit(): void {
    this.listarCategorias();
  }

  listarCategorias() {
    this.service.get().subscribe(result => {
      this.categorias = result;
    });
  }

  criarCategoria() {
    this.service.post(this.categoria).subscribe(result => {
      this.listarCategorias();
      this.categoria = new Categoria({});
    });
  }

  editarCategoria() {
    this.service.put(this.categoria).subscribe(result => {
      this.listarCategorias();
      this.categoria = new Categoria({});
    });
  }

  preparaEditar(categoria: Categoria){
    Object.assign(this.categoria, categoria);
  }

  excluirCategoria(id: string){
    this.service.delete(id).subscribe(result => {
      this.listarCategorias();
    })
  }  
}
