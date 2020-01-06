import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {interval} from 'rxjs';
import {scan, take} from 'rxjs/operators';
import {Router} from '@angular/router';

class RegisterUser {
  public phone: string;
  public password: string;
  public codeImg: string;
  public codeSms: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: RegisterUser;
  codeImgSrc = '';
  isDisable = false; // 开始禁用短信获取
  btnText: number|string = '获取短信验证码'; // 动态文字
  constructor(private rs: UserService, private router: Router) {
    this.model = new RegisterUser();
  }

  ngOnInit() {
  }

  getCodeImg() {
  }

  getSmsCode() {
    this.rs.getSmsCode(this.model.phone).subscribe(
      (result) => {
        if (result.code === 200) {
           // 获取成功，60s倒计时，警用按钮
            this.isDisable = true;
            const ob = interval(1000).pipe(
              scan( i => i - 1, 60),
              take(60)
            ).subscribe( (i) => {
              if (i > 0) {
                this.btnText = i + 's';
              } else {
                this.btnText = '获取验证码';
                this.isDisable = false;
              }
            });
        } else {
          alert('获取失败');
        }
      }
    );
  }

  register() {
    this.rs.register(this.model).subscribe(
      (result) => {
        if (result.code === 200) {
          alert('注册成功');
          setTimeout(() => {
            // @ts-ignore
            this.router.navigate('user/login');
          }, 200);
        } else {
          alert(result.message);
        }
      }
    );
  }
}
