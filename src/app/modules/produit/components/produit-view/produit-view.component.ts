import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProduitStock} from '../../../../modeles/produit-stock';

@Component({
  selector: 'produit-view',
  templateUrl: './produit-view.component.html',
  styleUrls: ['./produit-view.component.css']
})
export class ProduitViewComponent implements OnInit {
  @Input() produitStock: ProduitStock;
  @Output() deleteEvent: EventEmitter<ProduitStock> = new EventEmitter<ProduitStock>();

  constructor() { }

  ngOnInit() {
  }

  Acheter(item: ProduitStock, quantite: HTMLInputElement){
    item.Quantite -= parseInt(quantite.value);
  }
  Commander(item: ProduitStock, quantite: HTMLInputElement){
    item.Quantite += parseInt(quantite.value);
  }
  Supprimer(item: ProduitStock){
    // let index = this.magasin.Produits.findIndex(value => item.Produit.CodeBarre == value.Produit.CodeBarre);
    // this.magasin.Produits.splice(index, 1);
    // this.UpdateProduits(this._checkedSolde, this._checkedCommande);
    this.deleteEvent.emit(item);
  }
  MettreEnSolde(item: ProduitStock, button: HTMLButtonElement){
    item.Produit.EnSolde = !item.Produit.EnSolde;
    button.innerHTML = item.Produit.EnSolde ? "Supprimer la solde" : "Mettre en solde";
  }
}
