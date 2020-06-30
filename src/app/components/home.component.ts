import { Component, OnInit } from '@angular/core';
import { Myservice } from '../myservice.service';

@Component({
  selector: 'app-home',
  template: `
<h2>Angular 6 Component Communication</h2>
<button (click)="sendmsg()" class="btn btn-primary">Send Message</button>
<button (click)="clearmsg()" class="btn btn-secondary">Clear Message</button>
 `
})

export class HomeComponent implements OnInit {

  constructor(private s: Myservice) { }

  sendmsg(): void {
    this.s.sendmsg('Message from Home Component to View Component!');
  }

  clearmsg(): void {
    this.s.clearmsg();
  }

  ngOnInit() { }

}
