import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './sistema-login/login/login.component';
import { SignUpComponent } from './sistema-login/signUp/signup.component';

import { ListaLembretesComponent } from '../app/lista-lembretes/lista-lembretes.component';
import { DetalhesLembretesComponent } from '../app/detalhes-lembretes/detalhes-lembretes.component';
import { NovoLembreteComponent } from '../app/novo-lembrete/novo-lembrete.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: LoginComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'lembretes', component: ListaLembretesComponent },
  { path: 'adicionar', component: NovoLembreteComponent },
];

// const routes: Routes = [
//   { path: '', redirectTo: 'lembretes', pathMatch: 'full' },
//   { path: 'lembretes', component: ListaLembretesComponent },
//   { path: 'adicionar', component: NovoLembreteComponent },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
