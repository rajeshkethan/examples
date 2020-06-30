import { Injectable } from '@angular/core';
import {  Subject, Observable, BehaviorSubject} from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from './modals/modal.component';


@Injectable ({
  providedIn: 'root'
})

export class Myservice {

  constructor(private modalService: NgbModal) {
    setTimeout(() => {
      this.modalService.open(ModalContentComponent);
    }, 5500);
  }

  private subject = new Subject<any>();
  private behave = new BehaviorSubject<Object>({ textval: 'Hello!'});

  sendmsg(msg: string) {
    this.subject.next( {text: msg});
  }

  clearmsg() {
    this.subject.next();
  }

  getmsg(): Observable<any> {
    return this.subject.asObservable();
  }

  setbehaviorview (behaves: Object) {
    this.behave.next(behaves);
  }

  getbehaviorview(): Observable<any> {
    return this.behave.asObservable();
  }
}
