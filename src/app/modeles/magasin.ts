import {ProduitStock} from './produit-stock';

export class Magasin {
  private _Nom: string;
  private _Produits: Array<ProduitStock>;

  constructor(obj?: any){
    this._Nom = obj && obj._Nom || "";
    this._Produits = new Array<ProduitStock>();

    if(obj && obj._Produits)this.InitProduits(obj._Produits);
  }

  private InitProduits(_produits: any){
    _produits.forEach(value => {
      this._Produits.push(<ProduitStock>value);
    });
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
