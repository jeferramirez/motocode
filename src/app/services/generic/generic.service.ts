import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable()
export class GenericService {

  constructor( private afs: AngularFirestore) { }

}
