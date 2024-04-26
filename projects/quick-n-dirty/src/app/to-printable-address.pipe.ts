import { Pipe, PipeTransform } from '@angular/core';
import { DeliveryAddress } from '../../../../types/interfaces/user.interface';

@Pipe({
  name: 'toPrintableAddress',
  standalone: true
})
export class ToPrintableAddressPipe implements PipeTransform {

  transform(address: DeliveryAddress): string {
    return `
${address.suite}  ${address.street}
${address.city} - ${address.zipcode}
    `;
  }

}
