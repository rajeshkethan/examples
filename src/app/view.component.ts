import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Myservice } from './myservice.service';

@Component({
  selector: 'app-view',
  template: `
<!-- main app container -->
<div class="jumbotron">
    <div class="container text-center">
        <div class="row">
            <div class="col-sm-8 offset-sm-2">
                <div *ngIf="msg" class="alert alert-success">{{msg.text}}</div>
                <app-home></app-home>
            </div>
        </div>
    </div>
</div>

<!-- credits -->
<div class="text-center">
    <p>
        <a href="http://jasonwatmore.com/post/2018/06/25/angular-6-communicating-between-components-with-observable-subject" target="_top">Angular 6 - Communicating Between Components with Observable & Subject</a>
    </p>
    <p>
        <a href="http://jasonwatmore.com" target="_top">JasonWatmore.com</a>
    </p>
</div>
 `
})

export class ViewComponent implements OnInit {

  msg: any;
  subscription: Subscription;

  constructor(private s: Myservice) {
    this.subscription = this.s.getmsg().subscribe(mesg => { this.msg = mesg; } );
   }


  ngOnInit() { }

  ngdestroy() {
    this.subscription.unsubscribe();
  }
}
