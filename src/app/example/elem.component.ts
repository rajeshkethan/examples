import { Component, TemplateRef, ElementRef, ComponentFactoryResolver,
   ViewContainerRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-elem',
  templateUrl: '/elem.component.html',
  styles: [``]
})

export class ElemandTempComponent implements OnInit, AfterViewInit {
  @ViewChild('tref', {read: ElementRef}) tref: ElementRef;
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
  @ViewChild('tpl') tpl: TemplateRef<any>;

  constructor(private hostElement: ElementRef) {
    //outputs <app-elem>...</app-elem>
    console.log(this.hostElement.nativeElement.outerHTML);
  }

  ngAfterViewInit(): void {
      // outputs `I am span`
      console.log(this.tref.nativeElement.textContent);
  }

  ngOnInit() {

  }


}


