import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {ProduitModule} from './modules/produit/produit.module';

const AppRouting: Routes = [
  {path: "home", redirectTo: "", pathMatch: "full"},
  {path: "", component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProduitModule,
    RouterModule.forRoot(AppRouting)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
