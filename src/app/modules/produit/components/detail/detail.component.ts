import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MagasinService} from '../../services/magasin.service';
import {Produit} from '../../../../modeles/produit';

@Component({
  selector: 'produit-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private _produit: Produit;
  constructor(private route: ActivatedRoute, private magasinService: MagasinService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this._produit = this.magasinService.ProduitStockParCodeBarre(params['cb']).Produit;
    });
  }


  get produit(): Produit {
    return this._produit;
  }
}
