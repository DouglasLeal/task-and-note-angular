import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { TarefasComponent } from './components/tarefas/tarefas.component';

const routes: Routes = [
  {path: "", redirectTo: "/categorias", pathMatch: "full"},
  {path: "tarefas", component: TarefasComponent},
  {path: "categorias", component: CategoriasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
