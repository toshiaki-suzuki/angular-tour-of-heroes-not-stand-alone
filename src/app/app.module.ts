import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
