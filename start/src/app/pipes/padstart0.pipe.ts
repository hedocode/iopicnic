import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padstart0'
})
export class Padstart0Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (value + '').padStart(2, '0');
  }

}
