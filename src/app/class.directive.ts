import { Directive,ElementRef,HostBinding,HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  @HostBinding('style.backgroundColor') backgroundColor :string = 'transparent';

  constructor(private elementRef : ElementRef,private renderer : Renderer2) {
    //this.elementRef.nativeElement.style.backgroundColor = 'red';
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','red');
  }
  @HostListener('mouseenter') onMouseOver(){
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','red');
    this.backgroundColor = 'red';
  }
  @HostListener('mouseleave') onMouseOut(){
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','yellow');
    this.backgroundColor = 'yellow';
  }
}
