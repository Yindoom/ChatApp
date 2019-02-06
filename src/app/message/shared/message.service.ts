import { map } from 'rxjs/operators';
import { MessageModule } from './../message.module';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private db: AngularFirestore) { }

  getMessages(): Observable<Message[]> {
    return this.db.collection<Message>('messages').snapshotChanges().pipe(map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Message;
        return {
          id: action.payload.doc.id,
          message: data.message
        };
      });
    }));
  }
}
