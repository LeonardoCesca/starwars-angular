import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SwapiService } from '../../service/swapi/swapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  inputValue: string = '';
  moviesSearched: any = [];
  moviesFiltered: any;

  @Output() moviesSearch = new EventEmitter<any>();

  search = new FormGroup({
    term: new FormControl('', Validators.required)
  })

  constructor(private swapiService: SwapiService) { }

  ngOnInit(): void {
  }

  get term() {
    return this.search.get('term');
  }

  getMoviesSearched(term): void {
    this.swapiService.getMoviesBySearch(term.value).subscribe((movies) => {
      this.moviesSearched.push(movies);
      this.moviesSearched.map(item => this.moviesFiltered = item);
      this.moviesSearch.emit(this.moviesFiltered);
    });
  }

}
