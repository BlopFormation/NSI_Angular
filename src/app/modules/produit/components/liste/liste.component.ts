import { Component, OnInit } from '@angular/core';
import {ProduitStock} from '../../../../modeles/produit-stock';
import {Produit} from '../../../../modeles/produit';
import {Magasin} from '../../../../modeles/magasin';
import {Router} from '@angular/router';
import {MagasinService} from '../../services/magasin.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'produit-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  private _stocks: Array<ProduitStock>;
  private _checkedSolde: boolean;
  private _checkedCommande: boolean;
  private _PageNbUp: number;
  Meteo: any;

  constructor(private router: Router, private magasinService: MagasinService, private httpClient: HttpClient){
  }


  ngOnInit(): void {
    this.httpClient
      .get("http://api.openweathermap.org/data/2.5/forecast?q=Brussels,BE&appid=24429ded848ec72a743564dbe43fe86d")
      .subscribe((data) => {
        this.Meteo = data;
      });

    this._stocks = [];
    this._checkedSolde = false;
    this._checkedCommande = false;
    this.UpdateProduits(this._checkedSolde, this._checkedCommande);
    this._PageNbUp = 5;
  }


  get PageNbUp(): number {
    return this._PageNbUp;
  }

  get stocks(): Array<ProduitStock> {
    return this._stocks;
  }
  set stocks(value: Array<ProduitStock>) {
    this._stocks = value;
  }

  Supprimer(item: ProduitStock){
    this.magasinService.SupprimerProduitStock(item);
    this.UpdateProduits(this._checkedSolde, this._checkedCommande);
  }

  UpdateProduits(checkedSolde: boolean, checkedCommande: boolean){
    let produits: Array<ProduitStock> = [];
    this._checkedSolde = checkedSolde;
    this._checkedCommande = checkedCommande;

    if(checkedSolde && checkedCommande)
      produits = this.magasinService.ProduitStocks.filter(value => value.Produit.EnSolde && value.Quantite <= 5);
    else if(checkedSolde && !checkedCommande)
      produits = this.magasinService.ProduitStocks.filter(value => value.Produit.EnSolde);
    else if(!checkedSolde && checkedCommande)
      produits = this.magasinService.ProduitStocks.filter(value => value.Quantite <= 5);
    else
      produits = this.magasinService.ProduitStocks;

    this._stocks = produits;
  }

  changePage(button: HTMLButtonElement){
    let text = button.innerText;

    switch (text){
      case "-": this._PageNbUp -= 5; break;
      case "+": this._PageNbUp += 5; break;
    }

  }
}
