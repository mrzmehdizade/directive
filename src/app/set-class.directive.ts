import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSetClass]'
})
export class SetClassDirective {
@Input('appSetClass') set setClassName(classObj: any) {
  console.log(classObj);
  for(let key in classObj){
    if(classObj[key]){
      this.elementRef.nativeElement.classList.add(key);

    }
    else{
      this.elementRef.nativeElement.classList.remove(key);
    }
  }


}

  constructor(private elementRef: ElementRef) { }

}
