import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AuthInterceptor } from './interceptor/auth.interceptor';

import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { MovieComponent } from './views/movie/movie.component';

import { environment } from '../environments/environment';
import { LoaderComponent } from './components/loader/loader.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesDetailComponent } from './components/movies-detail/movies-detail.component';
import { SearchComponent } from './components/search/search.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthComponent } from './components/auth/auth.component';
import { LogoutComponent } from './components/logout/logout.component';

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
    SearchComponent,
    RegisterComponent,
    AuthComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
