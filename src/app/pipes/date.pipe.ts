import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dateFormat'})
export class DatePipe implements PipeTransform {

  transform(value:any) {
    if (value) {
      return value.slice(0,19);
    }
    return value;
  }

}
