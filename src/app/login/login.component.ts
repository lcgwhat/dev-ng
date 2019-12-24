import { Component, OnInit } from '@angular/core';
import {LoginUser} from '../login-user';
import {UserService} from '../service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginUser;

  constructor(private us: UserService) {
    this.model = new LoginUser('', '', false);
  }

  ngOnInit() {
  }
  login() {
    this.us.login(this.model);
  }
}
