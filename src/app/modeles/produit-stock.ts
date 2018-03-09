import {Produit} from './produit';

export class ProduitStock {
  private _Produit: Produit;
  private _Quantite: number;

  constructor(obj: any){
    this._Produit = obj && obj._Produit;
    this._Quantite = obj && obj._Quantite || 10;
  }

  get Produit(): Produit {
    return this._Produit;
  }
  set Produit(value: Produit) {
    this._Produit = value;
  }

  get Quantite(): number {
    return this._Quantite;
  }
  set Quantite(value: number) {
    this._Quantite = value;
  }
}
