import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { SwapiService } from '../../service/swapi/swapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  inputValue: string = '';
  moviesSearched: any = [];

  @Output() moviesSearch = new EventEmitter<any>();

  constructor(private swapiService: SwapiService) { }

  ngOnInit(): void {
  }

  getMoviesSearched(term): void {
    this.inputValue = term.target.value;
    this.swapiService.getMoviesBySearch(this.inputValue).subscribe((movies) => {
      this.moviesSearched = movies;
      this.moviesSearch.emit(this.moviesSearched.results);
    });
  }

}
