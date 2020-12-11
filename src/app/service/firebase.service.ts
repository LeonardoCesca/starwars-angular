import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private router: Router, private afAuth: AngularFireAuth) { }

 login ({email, password}: User) {
   return new Promise ((res, rej) => {
     this.afAuth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        localStorage['token'] = user.user.uid;
        this.router.navigate(['movie']);
     }).catch((error) => {
      //  console.log("ERRO:", error);
     })
   })
 }
}
