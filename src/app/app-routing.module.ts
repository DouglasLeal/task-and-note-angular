import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { NotasComponent } from './components/notas/notas.component';
import { TarefasComponent } from './components/tarefas/tarefas.component';

const routes: Routes = [
  {path: "", redirectTo: "/tarefas", pathMatch: "full"},
  {path: "tarefas", component: TarefasComponent},
  {path: "categorias", component: CategoriasComponent},
  {path: "notas", component: NotasComponent },
  {path: "usuarios", loadChildren: () => import('./components/usuarios/usuarios.module').then(m => m.UsuariosModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
