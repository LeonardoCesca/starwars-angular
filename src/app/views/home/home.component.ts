import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  hasToken: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo() {
    return localStorage['token'] ? this.router.navigate(['movie']) : this.router.navigate(['login']);
  }

  checkToken() {
    return localStorage['token'] ? !this.hasToken : this.hasToken;
  }
}
