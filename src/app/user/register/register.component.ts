import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

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
  constructor(private route: ActivatedRoute) {
    this.model = new RegisterUser();
    console.log(route);
  }

  ngOnInit() {
  }

  getCaptca() {
  }
}
