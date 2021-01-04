import { Component, Input, OnInit } from '@angular/core';
import { SwapiService } from '../../service/swapi/swapi.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies: any = [];

  @Input() moviesSearched;

  constructor(private swapiService: SwapiService) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  ngOnChanges(changes) {
    if (changes.moviesSearched && this.moviesSearched !== undefined) {
      this.movies = changes.moviesSearched.currentValue;
    }
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
}
