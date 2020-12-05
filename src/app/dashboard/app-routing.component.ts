import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaLembretesComponent } from '../lista-lembretes/lista-lembretes.component';
import { NovoLembreteComponent } from '../novo-lembrete/novo-lembrete.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: 'lembretes', pathMatch: 'full' },
  { path: 'lembretes', component: ListaLembretesComponent },
  { path: 'adicionar', component: NovoLembreteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
