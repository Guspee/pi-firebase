import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import 'firebase/auth';

import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { NovoLembreteComponent } from '../app/novo-lembrete/novo-lembrete.component';
import { ListaLembretesComponent } from '../app/lista-lembretes/lista-lembretes.component';
import { DetalhesLembretesComponent } from '../app/detalhes-lembretes/detalhes-lembretes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginComponent } from './sistema-login/login/login.component';
import { SignUpComponent } from './sistema-login/signUp/signup.component';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { AuthService } from './services/login.service';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    NovoLembreteComponent,
    ListaLembretesComponent,
    DetalhesLembretesComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [AuthService, MatDatepickerModule, MatNativeDateModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
