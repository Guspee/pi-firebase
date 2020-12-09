import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  NgForm,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Lembrete } from '../lembrete.model';
import { FirebaseService } from '../services/firebase.service';
import { AuthService } from '../services/login.service';

@Component({
  selector: 'app-novo-lembrete',
  templateUrl: './novo-lembrete.component.html',
  styleUrls: ['./novo-lembrete.component.css'],
})
export class NovoLembreteComponent implements OnInit {
  lembrete: Lembrete = new Lembrete();
  constructor(
    private firebaseService: FirebaseService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  salvarLembrete(): void {
    this.lembrete.uid = this.authService.getUserId();
    this.firebaseService.create(this.lembrete).then(() => {
      console.log('Lembrete criado!');
    });
  }

  novoLembrete(): void {
    this.lembrete = new Lembrete();
  }
}
