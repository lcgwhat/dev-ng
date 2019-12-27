import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../../service/register.service';
import {UserService} from '../../service/user.service';
import {interval} from 'rxjs';
import {scan, take} from 'rxjs/operators';

class RegisterUser {
  public name: string;
  public password: string;
  public captca: string;
  public smsCode: string;
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
  constructor(private rs: UserService) {
    this.model = new RegisterUser();
  }

  ngOnInit() {
  }

  getCaptca() {
  }

  getSmsCode() {
    this.rs.getSmsCode(this.model.name).subscribe(
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

  debounce(fn, delay) {
    let timer   = null;

    return function() {
      const args = arguments;
      const context = this;

      if (timer) {
        clearTimeout(timer);

        // tslint:disable-next-line:only-arrow-functions
        timer = setTimeout(function() {
          fn.apply(context, args);
        }, delay);
      } else {
        // tslint:disable-next-line:only-arrow-functions
        timer = setTimeout(function() {
          fn.apply(context, args);
        }, delay);
      }
    };
  }
}
