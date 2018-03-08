import {Component, OnInit} from '@angular/core';
import {Magasin} from './modeles/magasin';
import {Produit} from './modeles/produit';
import {ProduitStock} from './modeles/produit-stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private _magasin: Magasin;
  private _stocks: Array<ProduitStock>;
  private _checkedSolde: boolean;
  private _checkedCommande: boolean;
  private _PageNbUp: number;

  constructor(){
  }


  ngOnInit(): void {
    // let nom = prompt("Quel est le nom de votre magasin ?");
    let nom = "MonMagasin";
    this._magasin = new Magasin({_Nom: nom});

    let produitStocks = [];
    for(let i = 0; i < 42; i++){
      produitStocks.push(<ProduitStock>{
        Produit: <Produit>{
          CodeBarre: "cb"+ i,
          Titre: "Produit"+ i,
          Prix: 10+ i,
          Description: "Description du produit "+ i,
          EnSolde: false
        },
        Quantite: 10
      });
    }
    this._magasin.Produits = <Array<ProduitStock>>produitStocks;
    this._checkedSolde = false;
    this._checkedCommande = false;
    this.UpdateProduits(this._checkedSolde, this._checkedCommande);
    this._PageNbUp = 5;
  }


  get PageNbUp(): number {
    return this._PageNbUp;
  }

  get magasin(): Magasin {
    return this._magasin;
  }
  set magasin(value: Magasin) {
    this._magasin = value;
  }

  get stocks(): Array<ProduitStock> {
    return this._stocks;
  }
  set stocks(value: Array<ProduitStock>) {
    this._stocks = value;
  }

  Acheter(item: ProduitStock, quantite: HTMLInputElement){
    item.Quantite -= parseInt(quantite.value);
  }
  Commander(item: ProduitStock, quantite: HTMLInputElement){
    item.Quantite += parseInt(quantite.value);
  }
  Supprimer(item: ProduitStock){
    let index = this.magasin.Produits.findIndex(value => item.Produit.CodeBarre == value.Produit.CodeBarre);
    this.magasin.Produits.splice(index, 1);
    this.UpdateProduits(this._checkedSolde, this._checkedCommande);
  }
  MettreEnSolde(item: ProduitStock, button: HTMLButtonElement){
    item.Produit.EnSolde = !item.Produit.EnSolde;
    button.innerHTML = item.Produit.EnSolde ? "Supprimer la solde" : "Mettre en solde";
  }

  UpdateProduits(checkedSolde: boolean, checkedCommande: boolean){
    let produits: Array<ProduitStock> = [];
    this._checkedSolde = checkedSolde;
    this._checkedCommande = checkedCommande;

    if(checkedSolde && checkedCommande)
      produits = this.magasin.Produits.filter(value => value.Produit.EnSolde && value.Quantite <= 5);
    else if(checkedSolde && !checkedCommande)
      produits = this.magasin.Produits.filter(value => value.Produit.EnSolde);
    else if(!checkedSolde && checkedCommande)
      produits = this.magasin.Produits.filter(value => value.Quantite <= 5);
    else
      produits = this.magasin.Produits;

    this._stocks = produits;
  }

  changePage(button: HTMLButtonElement){
    let text = button.innerText;

    console.log(this._PageNbUp);
    switch (text){
      case "-": this._PageNbUp -= 5; break;
      case "+": this._PageNbUp += 5; break;
    }

    console.log(this._PageNbUp);
  }
}
