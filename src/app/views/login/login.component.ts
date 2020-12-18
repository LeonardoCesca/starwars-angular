import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FirebaseService } from '../../service/firebase/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  size: string = '107px';

  errors: boolean = false;
  loading: boolean = false;

  userForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]),
    password: new FormControl('', Validators.required)
  })

  constructor(private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit(): void {
    this.verifyLogged();
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  async onSubmit(): Promise<void> {
    this.firebaseService.login(this.userForm.value).then(
      (user) => {
        localStorage['token'] = user.user.uid;
        this.loading = !this.loading;
        setTimeout(() => {
          this.router.navigate(['movies']);
        }, 3000); 
      }
    ).catch(() => {
      this.errors = !this.errors;
    });
  }

  verifyLogged() {
    return !localStorage['token'] ? '' : this.router.navigate(['movies']);
  }
}
