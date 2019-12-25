import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {LoginUser} from '../../login-user';


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
    this.us.login(this.model).subscribe(
      (result) => {
        if (result.code === 200) {
          alert('登入成功');
        }
        console.log(result.code);
      },
      (err) => {
        alert('登录失败');
        console.log(err);
      }
    );
  }
}
