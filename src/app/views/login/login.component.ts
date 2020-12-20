import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  size: string = '107px';
  type: string = 'login';

  constructor() { }

  ngOnInit(): void {}
}
