import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { Teste1Component } from './teste1/teste1.component';
import { Teste2Component } from './teste2/teste2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Teste1Component,
    Teste2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
