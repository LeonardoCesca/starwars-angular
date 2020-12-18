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
  isActive: boolean = true;

  constructor(private swapiService: SwapiService) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(): void {
    this.swapiService.getAllMovies().subscribe(movies => {
      this.movies = movies;
      console.log(this.movies);
    })
  }

  toggleStatus(i: number) {
    this.activeIndex = i;
    this.isActive = true;
    return this.activeIndex;
  }
}
