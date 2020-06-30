import { Component, OnInit } from '@angular/core';
import { Myservice } from '../myservice.service';

@Component({
  selector: 'app-behaviorsub',
  template: `
    <div>
    {{behaviorValue}}
    </div>
  `
})

export class BehavoirsubComponent implements OnInit {

  public behaviorValue: string = '';

  constructor(private s: Myservice) { }

  ngOnInit() {
    this.s.getbehaviorview().subscribe( v => {
      this.behaviorValue = v['textval'];
    });
  }
}
