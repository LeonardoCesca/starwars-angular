import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { FirebaseService } from '../../service/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  size: string = '107px';

  userForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]),
    password: new FormControl('', Validators.required)
  })

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  onSubmit() {
    this.firebaseService.login(this.userForm.value).then((item) => console.log(item)).catch(err => console.log(err.message));
  }

}
