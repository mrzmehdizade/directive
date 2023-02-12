import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {
@Input('appTimes') set render(time: number){

  for(let i=0; i<time; i++){
    this.vcRef.createEmbeddedView(this.temRef,{})

  }

}
  constructor(private temRef: TemplateRef<any>,private vcRef: ViewContainerRef ) { }

}
