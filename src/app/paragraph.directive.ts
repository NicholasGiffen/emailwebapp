import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appParagraphChange]'
})
export class ParagraphChangeDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.backgroundColor = "#007BFF"

    el.nativeElement.style.color = "white"

  }

}
