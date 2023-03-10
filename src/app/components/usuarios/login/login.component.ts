import { Component } from '@angular/core';
import Usuario from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public usuario: Usuario = new Usuario({});

  constructor(private service: UsuarioService){}

  login(){
    this.service.login(this.usuario).subscribe(result => {
      console.log(result);
    });
  }
}
