import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing.module';
import { OwlModule } from 'ngx-owl-carousel';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ViewComponent } from './view.component';
import { CarouselComponent } from './components/owlcarousel.component';
import { HomeComponent } from './components/home.component';
import { BehaviorviewComponent } from './components/behavoir-view.component';
import { BehavoirsubComponent } from './components/behavior-sub.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ModalContentComponent, NgbdModalComponent } from './modals/modal.component';

@NgModule({
  declarations: [
    AppComponent, ViewComponent, CarouselComponent, HomeComponent, BehaviorviewComponent, ModalContentComponent,
     BehavoirsubComponent, HeaderComponent, FooterComponent, LoginComponent, NgbdModalComponent,
  ],
  imports: [
    BrowserModule, RoutingModule, NgbModalModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalContentComponent]
})
export class AppModule { }
