export class Produit {
  private _CodeBarre: string;
  private _Titre: string;
  private _Prix: number;
  private _Description: string;
  private _EnSolde: boolean;

  constructor(obj?: any){
    this._CodeBarre = obj && obj._CodeBarre || "";
    this._Titre = obj && obj._Titre || "";
    this._Prix = obj && obj._Prix || 0;
    this._Description = obj && obj._Description || "";
    this._EnSolde = obj && obj._EnSolde || false;
  }

  get CodeBarre(): string {
    return this._CodeBarre;
  }
  set CodeBarre(value: string) {
    this._CodeBarre = value;
  }

  get Titre(): string {
    return this._Titre;
  }
  set Titre(value: string) {
    this._Titre = value;
  }

  get Prix(): number {
    return this._Prix;
  }
  set Prix(value: number) {
    this._Prix = value;
  }

  get Description(): string {
    return this._Description;
  }
  set Description(value: string) {
    this._Description = value;
  }

  get EnSolde(): boolean {
    return this._EnSolde;
  }
  set EnSolde(value: boolean) {
    this._EnSolde = value;
  }
}
