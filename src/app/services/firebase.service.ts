import { Injectable } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Lembrete } from '../lembrete.model';
import { AuthService } from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private dbPath = '/lembretes';

  lembreteRef: AngularFirestoreCollection<Lembrete> = null;

  constructor(public db: AngularFirestore, public authService: AuthService) {
    this.lembreteRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Lembrete> {
    return this.lembreteRef;
  }

  getByUid(): AngularFirestoreCollection<Lembrete> {
    return this.db.collection('/lembretes', (ref) =>
      ref.where('uid', '==', this.authService.getUserId())
    );
  }

  create(lembrete: Lembrete): any {
    return this.lembreteRef.add({ ...lembrete });
  }

  update(id: string, data: any): Promise<void> {
    return this.lembreteRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.lembreteRef.doc(id).delete();
  }
}
