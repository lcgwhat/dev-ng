import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private us: UserService, private router: Router) { }

  ngOnInit() {
    this.us.isLogin().subscribe(
      result => {
        console.log(result);
        if (result) {
          // @ts-ignore
          this.router.navigate(['/main']);
          console.log('已经登入');
        } else {
          this.router.navigate(['/user/login']);
        }
      }
    );
  }

}
