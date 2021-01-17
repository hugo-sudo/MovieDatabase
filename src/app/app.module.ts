import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { Api1Service } from './api/api1.service';


import {MatCardModule} from '@angular/material/card';

import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatPaginatorModule,
  ],
  providers: [Api1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
