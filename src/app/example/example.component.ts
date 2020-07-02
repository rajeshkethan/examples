
import { Component, TemplateRef, ElementRef, ComponentFactoryResolver,
  ViewContainerRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { AnotherComponent } from './another.component';



@Component({
  selector: 'app-example',
  template: `
    <div class="container">
      <div class="row py-5">
        <div class="col-md-12">
        <h3 class="text-center py-4 text-danger">
          This is for the example of ViewContainerRef
        </h3>
          <P>using ViewContainerRef Dynamically generated component</P>
          <h1>Application Content</h1>
          <ng-container #container></ng-container>
          <h3>End of Application</h3>

          <P>using TemplateRef Dynamically createEmbeddedView</P>
          <ng-template #template>
            <h1>Template Content</h1>
            <h3>Dynamically Generated!</h3>
          </ng-template>
        </div>
      </div>
    </div>
  `,
  entryComponents: [AnotherComponent],
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef }) ctr: ViewContainerRef;
  @ViewChild('template', { read: TemplateRef }) tpl: TemplateRef<any>;

  constructor(private resolve: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    const factory = this.resolve.resolveComponentFactory(AnotherComponent);
    this.ctr.createComponent(factory);

    const view = this.tpl.createEmbeddedView(null);
    this.ctr.insert(view);
  }
}
