import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { FirstUpperPipe } from './filters/first-upper.pipe';
import { DisponibilitePipe } from './filters/disponibilite.pipe';
import { SoldePipe } from './filters/solde.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FirstUpperPipe,
    DisponibilitePipe,
    SoldePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
