import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
