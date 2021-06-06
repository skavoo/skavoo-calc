import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DigitComponent } from './digit.component';
import { Digit2Component } from './digit2.component';

@NgModule({
  declarations: [AppComponent, HeroesComponent, DigitComponent, Digit2Component],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
