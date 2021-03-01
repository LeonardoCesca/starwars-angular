import { Component, Input, OnInit } from '@angular/core';
import { SwapiService } from '../../service/swapi/swapi.service';

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
  planets: any = [];
  planetsResult: string = '';
  loading: boolean = false;
  loaderType: string = "movies";

  constructor(private swapiService: SwapiService) { }

  ngOnInit(): void {
  }

  getDetails(i) {
    this.showDetails = !this.showDetails;
    this.loading = !this.loading;
    this.swapiService.getPlanetById(i).subscribe((item : any) => {
      item.planets.map(ix => {
        this.swapiService.getPlanetsByUrl(ix).subscribe((planet : any) => { 
          this.planets.push(planet.name);
          this.planetsResult = this.planets.join(", ");
          setTimeout(() => {
            this.loading = false;
          }, 2500);
        });
      });
    });
  }

}
