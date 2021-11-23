import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comentImage'
})
export class ComentImagePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
