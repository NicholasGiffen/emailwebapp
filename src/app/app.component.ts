import { Component, ViewChild, ElementRef, AfterContentInit, OnInit, ViewChildren } from '@angular/core';

@Component({  //component decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
}) 
export class AppComponent implements AfterContentInit {
  // title = 'ng6';
    @ViewChild('ourElement', {
      static: false //had to add this 2nd argument, Taylor was just using ang5 
      //when false, element MAY NOT be there 
    })
    private readonly ourElementRef: ElementRef;

    constructor() {
      console.log('constructor', this.ourElementRef);
    }

    ngAfterContentInit() {
      console.log('ngAfterContentInit', this.ourElementRef);
    }

}
