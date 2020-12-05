import { Injectable } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Lembrete } from '../lembrete.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private dbPath = '/lembretes';

  lembreteRef: AngularFirestoreCollection<Lembrete> = null;

  constructor(private db: AngularFirestore) {
    this.lembreteRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Lembrete> {
    return this.lembreteRef;
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
