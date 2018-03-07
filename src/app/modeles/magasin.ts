import {ProduitStock} from './produit-stock';

export class Magasin {
  private _Nom: string;
  private _Produits: Array<ProduitStock>;

  constructor(obj?: any){
    this._Nom = obj && obj._Nom || "";
    this._Produits = new Array<ProduitStock>();
  }

  get Nom(): string {
    return this._Nom;
  }
  set Nom(value: string) {
    this._Nom = value;
  }

  get Produits(): Array<ProduitStock> {
    return this._Produits;
  }
  set Produits(value: Array<ProduitStock>) {
    this._Produits = value;
  }
}
