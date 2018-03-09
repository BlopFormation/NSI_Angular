import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MagasinService} from '../../services/magasin.service';
import {ProduitModule} from '../../produit.module';
import {Produit} from '../../../../modeles/produit';
// import {CreateForm} from '../../forms/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent{
  // form: FormGroup;
  // produit: Produit;
  // errors: Array<any> = [];
  //
  // constructor(private route: ActivatedRoute, private builder: FormBuilder, private magasinService: MagasinService) { }
  //
  // ngOnInit() {
  //   this.route.params.subscribe(params => {
  //     this.produit =  this.magasinService.ProduitStockParCodeBarre(params["cb"]).Produit;
  //   });
  //
  //   // this.form = this.builder.group({
  //   //   titre: new FormControl("",[
  //   //     Validators.required,
  //   //     Validators.minLength(5),
  //   //   ])
  //   // });
  //   this.form = this.builder.group(CreateForm());
  // }
  //
  // submitForm(){
  //   if(this.form.invalid){
  //     for(let i in this.form.controls){
  //       let controls = this.form.controls[i];
  //       for(let j in controls.errors){
  //         let error = controls.errors[j];
  //
  //         this.errors.push({key: j, value: error});
  //       }
  //     }
  //   }else{
  //     for(let ctrl in this.form.controls){
  //       console.log(this.form.controls[ctrl].value);
  //     }
  //   }
  // }



}
