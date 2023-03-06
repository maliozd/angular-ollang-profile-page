import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicComponentLoadDirective]'
})
export class DynamicComponentLoadDirective {

  constructor(public viewContainerRef : ViewContainerRef) { }

}
