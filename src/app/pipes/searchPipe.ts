import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../shared/product';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(products: Products[], value) {
    return products.filter((product: Products) => {
      return product.name.toLowerCase().includes(value);
    });
  }

}
