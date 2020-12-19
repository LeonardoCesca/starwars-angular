import { Component, OnInit } from '@angular/core';

import { SwapiService } from '../../service/swapi/swapi.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies: any = [];
  activeIndex: number;

  constructor(private swapiService: SwapiService) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(): void {
    this.swapiService.getAllMovies().subscribe(movies => {
      this.movies = movies;
      this.movies.results.forEach((movie) => {
        const currentMovie = movie;
        currentMovie.isActive = false;
      });
    });
  }

  toggleStatus(i: number) {
    this.activeIndex = i;
    Object.keys(this.movies.results).map((movieId) => {
      if (+movieId === this.activeIndex) {
        this.movies.results[movieId].isActive = !this.movies.results[movieId].isActive; 
      } else {
        this.movies.results[movieId].isActive = false;
      }
    });    
    return this.activeIndex;
  }
}
