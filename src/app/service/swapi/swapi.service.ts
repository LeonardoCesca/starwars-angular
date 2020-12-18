import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: HttpClient) { }

  getAllMovies() {
    return this.http.get(`${environment.apiUrl}/films`)
  }

  getPlanetById(id: number) {
    return this.http.get(`${environment.apiUrl}/films/${id}`)
  }

  getPlanetsByUrl(url) {
    return this.http.get(`${url}`)
  }
}
