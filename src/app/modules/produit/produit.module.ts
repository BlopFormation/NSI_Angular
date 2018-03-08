import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeComponent } from './components/liste/liste.component';
import { DetailComponent } from './components/detail/detail.component';
import {ProduitRoutingModule} from './produit-routing.module';
import {SoldePipe} from './filters/solde.pipe';
import {FirstUpperPipe} from './filters/first-upper.pipe';
import {DisponibilitePipe} from './filters/disponibilite.pipe';
import {RouterModule, Routes} from '@angular/router';
import { ProduitViewComponent } from './components/produit-view/produit-view.component';


@NgModule({
  imports: [
    CommonModule,
    ProduitRoutingModule,
    RouterModule
  ],
  declarations: [
    ListeComponent,
    DetailComponent,
    SoldePipe,
    FirstUpperPipe,
    DisponibilitePipe,
    ProduitViewComponent
  ],
  exports: [ SoldePipe, FirstUpperPipe, DisponibilitePipe ]
})
export class ProduitModule { }
