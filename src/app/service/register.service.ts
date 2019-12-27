import {HttpClient} from '@angular/common/http';
import Result from '../common/resule';

export class RegisterService {
  url = 'site/';
  constructor(private http: HttpClient) {
  }
  public register(param: any) {
     // @ts-ignore
    return this.http.post<Result>(this.url + 'register', param);
  }
  public existName(name: string) {
    return this.http.post<Result<boolean>>(this.url + 'exist-name', name);
  }

}
