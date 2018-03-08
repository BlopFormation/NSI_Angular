import { Pipe, PipeTransform } from '@angular/core';
import {Produit} from '../modeles/produit';

@Pipe({
  name: 'solde'
})
export class SoldePipe implements PipeTransform {

  transform(value: number, enSolde: boolean, taux: number): any {
    console.log(value);
    console.log(enSolde);
    console.log(taux);
    return enSolde ? value * (1 - taux): value;
  }

}
