import { Component } from '@angular/core';
import {Magasin} from './modeles/magasin';
import {Produit} from './modeles/produit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _Produit: Produit;
  BgColor: string;
  TextColor: string;

  constructor(){
    this._Produit = new Produit({
      _CodeBarre: "cb0",
      _Titre: "Produit0",
      _Prix: 25.52,
      _Description: "Description du produit 0"
    });

    console.log(this._Produit);
  }


  get Produit(): Produit {
    return this._Produit;
  }
  set Produit(value: Produit) {
    this._Produit = value;
  }
}
