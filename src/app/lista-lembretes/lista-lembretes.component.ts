import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lista-lembretes',
  templateUrl: './lista-lembretes.component.html',
  styleUrls: ['./lista-lembretes.component.css'],
})
export class ListaLembretesComponent implements OnInit {
  lembretes: any;
  currentLembrete = null;
  currentIndex = -1;
  title = '';

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.retrieveLembretesUid();
  }

  refreshList(): void {
    this.currentLembrete = null;
    this.currentIndex = -1;
    this.retrieveLembretesUid();
  }

  retrieveLembretes(): void {
    this.firebaseService
      .getAll()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.lembretes = data;
      });
  }

  retrieveLembretesUid(): void {
    this.firebaseService
      .getByUid()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.lembretes = data;
      });
  }

  setActiveLembrete(lembretes, index): void {
    this.currentLembrete = lembretes;
    this.currentIndex = index;
  }
}
