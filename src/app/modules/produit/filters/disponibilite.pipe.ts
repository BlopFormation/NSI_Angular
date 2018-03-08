import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'disponibilite'
})
export class DisponibilitePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer){}
  transform(value: number, args?: any): string {
    let image = "<img src='./assets/imgs/";

    switch (true){
      case value > 5: image += "green.png"; break;
      case value <= 5 && value > 0: image += "yellow.png"; break;
      default: image += "red.png";
    }

    image += "'>";
    return image;
  }

}
