import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateIsBefore'
})
export class DateIsBefore implements PipeTransform {

  transform(value: Date, args?: any): boolean {
    let now=new Date();
    let val=new Date(value);
    return val.getTime()<now.getTime();
  }
}
