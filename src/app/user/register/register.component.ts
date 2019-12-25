import { Component, OnInit } from '@angular/core';

class RegisterUser {
  public name: string;
  public password: string;
  public captca: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: RegisterUser;
  codeImgSrc = '';
  constructor() {
    this.model = new RegisterUser();
  }

  ngOnInit() {
  }

  getCaptca() {
  }
}
