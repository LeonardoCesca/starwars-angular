import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuthModule } from '@angular/fire/auth'

import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { MovieComponent } from './views/movie/movie.component';

import { environment } from '../environments/environment';
import { LoaderComponent } from './components/loader/loader.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesDetailComponent } from './components/movies-detail/movies-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HomeComponent,
    LoginComponent,
    MovieComponent,
    LoaderComponent,
    MoviesListComponent,
    MoviesDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
