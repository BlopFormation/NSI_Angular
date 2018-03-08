import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUpper'
})
export class FirstUpperPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    let firstLetter: string = value[0];
    firstLetter = firstLetter.toUpperCase();
    return firstLetter+ value.slice(1, value.length);
  }

}
