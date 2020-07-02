import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ViewComponent } from './view.component';
import { CarouselComponent } from './components/owlcarousel.component';
import { HomeComponent } from './components/home.component';
import { BehaviorviewComponent } from './components/behavoir-view.component';
import { LoginComponent } from './login/login.component';
import { NgbdModalComponent } from './modals/modal.component';
import { ElemandTempComponent } from './example/elem.component';
import { ExampleComponent } from './example/example.component';


const routes: Routes = [
  { path: '', component: ViewComponent},
  { path: 'owl', component: CarouselComponent},
  { path: 'home', component: HomeComponent},
  { path: 'behavoir', component: BehaviorviewComponent},
  { path: 'login', component: LoginComponent},
  { path: 'modal', component: NgbdModalComponent},
  { path: 'endt', component: ElemandTempComponent},
  { path: 'exmp', component: ExampleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }
// export const routing = RouterModule.forRoot(routes);
