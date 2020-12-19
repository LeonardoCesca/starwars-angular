import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  size: string = '107px';

  moviesFiltered: any;

  constructor() { }

  ngOnInit(): void {
  }

  getMoviesFiltered(movies: any) {
    this.moviesFiltered = movies;
  }

}
