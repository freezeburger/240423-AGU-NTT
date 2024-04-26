import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCssLevel',
  standalone: true
})
export class ToCssLevelPipe implements PipeTransform {

  transform(value: string, prefix = 'alert'): string | undefined {
    if(!value) return;

    return {
     'success' : prefix + '-success',
     'danger'  : prefix + '-danger',
     'primary' : prefix + '-primary',
     'warning' : prefix + '-warning',
    }[value];
  }

}
