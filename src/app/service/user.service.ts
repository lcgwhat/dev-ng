import { Injectable } from '@angular/core';
import {LoginUser} from '../login-user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = '/api/users';
  constructor(private http: HttpClient) { }
  login(user: LoginUser) {
    // 返回的是 observation 可观察对象
    return this.http.post(this.url + 'login', user);
  }
}
