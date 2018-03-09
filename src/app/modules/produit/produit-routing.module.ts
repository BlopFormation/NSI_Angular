import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListeComponent} from './components/liste/liste.component';
import {DetailComponent} from './components/detail/detail.component';
import {EditComponent} from './components/edit/edit.component';
import {CreateComponent} from './components/create/create.component';

const ProduitRoutes: Routes = [
  { path: "produits", children: [
      {path: "liste", component: ListeComponent },
      {path: "detail/:cb", component: DetailComponent },
      {path: "edit/:cb", component: EditComponent },
      {path: "create", component: CreateComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ProduitRoutes)
  ]
})
export class ProduitRoutingModule{}
