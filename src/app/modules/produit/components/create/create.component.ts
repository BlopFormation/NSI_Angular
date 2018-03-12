import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CREER_PRODUIT} from '../../forms/forms';
import {Produit} from '../../../../modeles/produit';
import {MagasinService} from '../../services/magasin.service';
import {ProduitStock} from '../../../../modeles/produit-stock';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  private _CreateForm: FormGroup;
  private _Produit: Produit;

  constructor(private router: Router, private builder: FormBuilder, private _MagasinService: MagasinService) { }

  ngOnInit() {
    this._CreateForm = this.builder.group(CREER_PRODUIT);
    this._Produit = new Produit();
  }

  get CreateForm(): FormGroup{
    return this._CreateForm;
  }
  // set CreateForm(v: FormGroup){
  //   this._CreateForm = v;
  // }


  get Produit(): Produit {
    return this._Produit;
  }

  set Produit(value: Produit) {
    this._Produit = value;
  }

  CreateProduit(){
    if(this.CreateForm.valid){
      console.log(this._Produit);
      this._MagasinService.AddProduit(this._Produit, 10);
      this.router.navigateByUrl("/produits/liste");
    }else{
      console.log("ERREUR");
    }
  }
}
