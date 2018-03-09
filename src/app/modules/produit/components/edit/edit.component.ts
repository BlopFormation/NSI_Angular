import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MagasinService} from '../../services/magasin.service';
import {ProduitModule} from '../../produit.module';
import {Produit} from '../../../../modeles/produit';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  form: FormGroup;
  private produit: Produit;
  errors: Array<any> = [];

  constructor(private route: ActivatedRoute, private builder: FormBuilder, private magasinService: MagasinService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.produit =  this.magasinService.ProduitStockParCodeBarre(params["cb"]).Produit;
    });

    this.form = this.builder.group({
      titre: new FormControl("",[
        Validators.required,
        Validators.minLength(5),
      ])
    });
  }

  submitForm(){
    if(this.form.invalid){
      for(let i in this.form.controls){
        let controls = this.form.controls[i];
        for(let j in controls.errors){
          let error = controls.errors[j];

          this.errors.push({key: j, value: error});
        }
      }
    }
  }



}
