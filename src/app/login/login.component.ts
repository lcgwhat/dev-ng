import { Component, OnInit } from '@angular/core';
import {LoginUser} from '../login-user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginUser;
  constructor() {
    this.model = new LoginUser('', '', false);
  }

  ngOnInit() {
  }
  login() {
    console.log(this.model);
  }
}
