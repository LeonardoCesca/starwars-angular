import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afAuth: AngularFireAuth) { }

 login ({email, password}: User) {
   return this.afAuth.signInWithEmailAndPassword(email, password);
 }
}
