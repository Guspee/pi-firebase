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
    private AuthService: AuthService
  ) {}

  ngOnInit(): void {}

  salvarLembrete(): void {
    this.firebaseService.create(this.lembrete).then(() => {
      console.log('Lembrete criado!');
    });
  }

  getUid(user) {
    this.AuthService.getUid(user);
  }

  novoLembrete(): void {
    this.lembrete = new Lembrete();
  }
}
