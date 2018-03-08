import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'disponibilite'
})
export class DisponibilitePipe implements PipeTransform {

  transform(value: number, args?: any): string {
    let image = "./assets/imgs/";

    switch (true){
      case value > 5: image += "green.png"; break;
      case value <= 5 && value > 0: image += "yellow.png"; break;
      default: image += "red.png";
    }

    return image;
  }

}
