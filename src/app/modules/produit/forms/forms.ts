import {FormControl, Validators} from '@angular/forms';
import {Produit} from '../../../modeles/produit';

export const CREER_PRODUIT = {
  CodeBarre: new FormControl('',[
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(5)
  ]),
  Titre: new FormControl('',[
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(10)
  ]),
  Prix: new FormControl(25),
  Description: new FormControl('', [
    Validators.required
  ]),
  EnSolde: new FormControl(false),
  TauxSolde: new FormControl()
};
