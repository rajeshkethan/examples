import { Component, OnInit } from '@angular/core';
import { Myservice } from '../myservice.service';

@Component({
  selector: 'app-behaviorview',
  template: `
  <div class="container">
  <div class="card is-dark">
  <div class="card-content">
  <p class="title is-4">Behavior Example</p>
  <p>What is the behavior?</p>
  <input class="input" (keyup)="sendValue(subjectValue.value)" type="text" #subjectValue placeholder="Enter behaviorSubject value">
  </div>
  </div>
  </div>
  <app-behaviorsub></app-behaviorsub>
  `
})

export class BehaviorviewComponent implements OnInit {

  constructor(private s: Myservice) { }

  ngOnInit() { }

  sendValue(value) {
    this.s.setbehaviorview({textval: value});
  }
}
