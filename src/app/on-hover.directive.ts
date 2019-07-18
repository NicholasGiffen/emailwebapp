import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnHover]'
})
export class OnHoverDirective {

  constructor(private el: ElementRef) {  //el is a type of ElementRef
    


  }

  @HostListener('mouseover') onMouseOver() { 
    this.el.nativeElement.style.backgroundColor = "#DDDDDD"
  }

  @HostListener('mouseout') onMouseOut() { 
    this.el.nativeElement.style.backgroundColor = "#FFFFFF"
  }



}
