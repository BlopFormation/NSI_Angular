import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListeComponent} from './components/liste/liste.component';
import {DetailComponent} from './components/detail/detail.component';

const ProduitRoutes: Routes = [
  { path: "produits", children: [
      {path: "liste", component: ListeComponent },
      {path: "detail/:cb", component: DetailComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ProduitRoutes)
  ]
})
export class ProduitRoutingModule{}
