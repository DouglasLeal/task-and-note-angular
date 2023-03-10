import { Component } from '@angular/core';
import Usuario from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  public usuario: Usuario = new Usuario({});
  public confirmaSenha: string = "";

  constructor(private service: UsuarioService){}

  registrarUsuario(){
    this.service.registrar(this.usuario).subscribe(result => {
      console.log(result);
    });
  }
}
