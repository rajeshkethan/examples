import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container">
  <h1 style="margin: 10px auto;"> <a class="navbar-brand" [routerLink]="['/']">{{ name }}</a>    </h1>
</div>
</nav>
`,
  styles: [`
  h1 {
  letter-spacing: 8px;
}

h5 {
  letter-spacing: 3px;
}
  `]
})
export class HeaderComponent implements OnInit {

  name: string = 'All examples of  Angular';
  constructor() { }

  ngOnInit() {
  }

}
