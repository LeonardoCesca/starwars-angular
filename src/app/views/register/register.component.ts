import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FirebaseService } from '../../service/firebase/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  size: string = '107px';

  errors: boolean = false;
  loading: boolean = false;

  registerForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]),
    password: new FormControl('', Validators.required)
  })

  constructor(private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit(): void {
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  async onSubmit(): Promise<void> {
    this.errors = false;
    this.firebaseService.register(this.registerForm.value).then(
      (user) => {
        localStorage['token'] = user.user.uid;
        this.loading = !this.loading;
        setTimeout(() => {
          this.router.navigate(['movies']);
        }, 3000); 
      }
    ).catch(() => {
      this.errors = true;
    });
  }
}
