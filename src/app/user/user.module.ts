import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user/user.component';
import {UserRoutingModule} from './user-routing.module';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { PhoneValidatorDirective } from './register/phone-validator.directive';


@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    RegisterComponent,
    PhoneValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],
  exports: [
  ]
})
export class UserModule { }
