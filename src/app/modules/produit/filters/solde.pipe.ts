import { Pipe, PipeTransform } from '@angular/core';
import {Produit} from '../../../modeles/produit';

@Pipe({
  name: 'solde'
})
export class SoldePipe implements PipeTransform {

  transform(value: number, solde: boolean, taux: number): any {
    return solde ? value * (1 - taux): value;
  }


  // transform(value: any, ...args): any {
  //   console.log(args);
  //   return null;
  // }
}
