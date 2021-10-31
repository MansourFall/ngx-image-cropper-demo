import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


@Pipe({
  name: 'base64ToImg'
})
export class Base64ToImgPipe implements PipeTransform {

  constructor(public sanitizer: DomSanitizer) {}

  transform(base64: string, imgType: string, defaultUrl: string, ...args: unknown[]): unknown {
    defaultUrl = defaultUrl ? defaultUrl : 'assets/images/no-image.svg';
    return base64 && base64.length && imgType ? this.sanitizer.bypassSecurityTrustUrl(`data:${imgType};base64,${base64}`) : defaultUrl;
  }

}
