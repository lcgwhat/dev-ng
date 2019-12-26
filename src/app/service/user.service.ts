import { Injectable } from '@angular/core';
import {LoginUser} from '../login-user';
import {HttpClient} from '@angular/common/http';
import Result from '../common/resule';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = '/api/site/';
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
}
