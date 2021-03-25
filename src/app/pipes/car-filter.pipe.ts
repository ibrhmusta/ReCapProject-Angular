import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetail';

@Pipe({
  name: 'carFilter',
})
export class CarFilterPipe implements PipeTransform {
  transform(value: CarDetail[], carDetailFilter: string): CarDetail[] {
    carDetailFilter = carDetailFilter ? carDetailFilter.toLocaleLowerCase(): '';

    return carDetailFilter? value.filter((d: CarDetail) =>
            d.brandName.toLocaleLowerCase().indexOf(carDetailFilter) !== -1 
            || d.colorName.toLocaleLowerCase().indexOf(carDetailFilter) !== -1 
            || d.modelYear.toString().toLocaleLowerCase().indexOf(carDetailFilter) !== -1 
            || d.description.toLocaleLowerCase().indexOf(carDetailFilter) !== -1 
            || d.dailyPrice.toString().toLocaleLowerCase().indexOf(carDetailFilter) !== -1 
            || d.brandModel.toLocaleLowerCase().indexOf(carDetailFilter) !== -1) : value;
  }
}
