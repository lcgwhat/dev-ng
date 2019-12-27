import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {UserComponent} from './user/user.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {PigComponent} from './pig/pig.component';


const routes: Routes = [
  {
    path: 'user', component: UserComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'pig', component: PigComponent}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
