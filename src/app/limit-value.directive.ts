import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appLimitValue]'
})
export class LimitValueDirective {

  @HostBinding('attr.name') name = true;

  @Input() set appLimitValue(value){
    this.name = value;
  }

}
