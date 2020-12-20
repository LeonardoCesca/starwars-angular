import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  size: string = '107px';
  type: string = 'register';

  constructor() { }

  ngOnInit(): void {}

}
