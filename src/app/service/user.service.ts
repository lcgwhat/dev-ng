import { Injectable } from '@angular/core';
import {LoginUser} from '../login-user';
import {HttpClient} from '@angular/common/http';
import Result from '../common/resule';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  url = '/api/site/';
  private user: any;
  constructor(private http: HttpClient) { }
  login(user: LoginUser) {
    // 返回的是 observation 可观察对象
    // @ts-ignore
    return this.http.post<Result>(this.url + 'login', user);
  }
  public register(param: any) {
    // @ts-ignore
    return this.http.post<Result>(this.url + 'register', param);
  }
  public existName(name: string) {
    return this.http.post<Result<string>>(this.url + 'exist-name', {name});
  }

  public getSmsCode(phone: string) {
    return this.http.get<Result<any>>(this.url + 'get-sms-code?phone=' + phone);
  }

  // 判断是否登入
  public isLogin() {
    // @ts-ignore
    return this.http.post<Result<any>>(this.url + 'is-login').pipe(
       map((r: Result<any>) => {
         if (r.code === 200) {
           this.user = r.data;
           return true;
         } else {
           return false;
         }
       }),
      catchError(err => of(false))
    );
  }
}
