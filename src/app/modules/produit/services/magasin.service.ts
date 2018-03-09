import { Injectable } from '@angular/core';
import {Magasin} from '../../../modeles/magasin';
import {ProduitStock} from '../../../modeles/produit-stock';
import {Produit} from '../../../modeles/produit';

@Injectable()
export class MagasinService {
  private _Magasin: Magasin;

  constructor() {
    this.InitMagasin();
  }

  private InitMagasin(){
    let obj = localStorage.getItem("magasin");
    if(!obj){
      this.LoadMagasin();
    }else{
      let objParse = JSON.parse(obj);
      this._Magasin = new Magasin(objParse);
    }
  }
  private LoadMagasin(){

    this._Magasin = new Magasin({_Nom: "BlopStore"});

    let produitStocks = [];
    for(let i = 0; i < 42; i++) {
      produitStocks.push(<ProduitStock>{
        Produit: <Produit>{
          CodeBarre: "cb" + i,
          Titre: "Produit" + i,
          Prix: 10 + i,
          Description: "Description du produit " + i,
          EnSolde: false,
          TauxSolde: 0.2
        },
        Quantite: 10
      });
    }

    this._Magasin.Produits = <Array<ProduitStock>>produitStocks;

    localStorage.setItem("magasin", JSON.stringify(this._Magasin));
  }

  get ProduitStocks(): Array<ProduitStock>{
    return this._Magasin.Produits;
  }
  ProduitStockParCodeBarre(codeBarre: string): ProduitStock | null{
    let index = this._Magasin.Produits.findIndex(value => value.Produit.CodeBarre == codeBarre);
    return index >= 0 ? this._Magasin.Produits[index] : null;
  }

  SupprimerProduitStock(produitStock: ProduitStock){
    let index = this._Magasin.Produits.findIndex(value => produitStock.Produit.CodeBarre == value.Produit.CodeBarre);

    if(index >= 0){
      this._Magasin.Produits.splice(index, 1);
    }
    localStorage.setItem("magasin", JSON.stringify(this._Magasin));
  }
}
