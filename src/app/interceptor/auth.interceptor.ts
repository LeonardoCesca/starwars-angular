import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

import { FirebaseService } from '../service/firebase/firebase.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router, public firebaseService: FirebaseService) {}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (this.firebaseService.user !== token) {
      this.router.navigate(['login']);
    }
    return next.handle(request);
  }
}
