import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { Lembrete } from '../lembrete.model';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-detalhes-lembretes',
  templateUrl: './detalhes-lembretes.component.html',
  styleUrls: ['./detalhes-lembretes.component.css'],
})
export class DetalhesLembretesComponent implements OnInit, OnChanges {
  @Input() lembrete: Lembrete;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentLembrete: Lembrete = null;
  message = '';

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentLembrete = { ...this.lembrete };
  }

  updateLembrete(): void {
    const data = {
      lembrete: this.currentLembrete.lembrete,
    };

    this.firebaseService
      .update(this.currentLembrete.id, data)
      .then(() => (this.message = 'Lembrete atualizado com sucesso!'))
      .catch((err) => console.log(err));
  }

  deleteLembrete(): void {
    this.firebaseService
      .delete(this.currentLembrete.id)
      .then(() => {
        this.refreshList.emit();
        this.message = 'O lembrete foi apagado com sucesso!';
      })
      .catch((err) => console.log(err));
  }
}
