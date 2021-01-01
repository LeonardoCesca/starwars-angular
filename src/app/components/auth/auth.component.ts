import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FirebaseService } from '../../service/firebase/firebase.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  size: string = '107px';

  errors: boolean = false;
  loading: boolean = false;
  registered: boolean = false;

  @Input() type: string;

  authForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]),
    password: new FormControl('', Validators.required)
  })

  constructor(private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit(): void { }

  get email() {
    return this.authForm.get('email');
  }

  get password() {
    return this.authForm.get('password');
  }

  async onSubmit(): Promise<void> {
    this.errors = false;
    if (this.type === 'login') {
      this.firebaseService.login(this.authForm.value).then(
        (user) => {
          localStorage.setItem('token', user.user.uid);
          this.firebaseService.getToken();
          this.loading = !this.loading;
          setTimeout(() => {
            this.router.navigate(['movies']);
          }, 3000); 
        }
      ).catch(() => {
        this.errors = true;
      });
    } else if (this.type === 'register') {
      this.firebaseService.register(this.authForm.value).then(() => {
          this.loading = !this.loading;
          setTimeout(() => {
            this.router.navigate(['login']);
          }, 3000); 
        }
      ).catch((err) => {
        this.errors = true;
        this.verifyEmailExists(err);
      });
    }
  }

  verifyEmailExists(err) {
    console.log(err.code);
    if(err.code === 'auth/email-already-in-use') {
      this.registered = true;
    }
  }
}
