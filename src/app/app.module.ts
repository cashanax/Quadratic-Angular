import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuadraticComponent } from './quadratic/quadratic.component';
import { TreComponent } from './tre/tre.component';

@NgModule({
  declarations: [
    AppComponent,
    QuadraticComponent,
    TreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
