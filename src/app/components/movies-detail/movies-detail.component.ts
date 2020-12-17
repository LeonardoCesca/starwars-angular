import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.scss']
})
export class MoviesDetailComponent implements OnInit {

  @Input() producer;
  @Input() director;
  @Input() index;

  showDetails: boolean = false;
  currentIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getDetails(i) {
    this.showDetails = !this.showDetails;
  }

}
