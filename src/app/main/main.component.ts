import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCourse(value: string) {
    // 紧跟着path是必选参数（参数类型不能是对象）
    // 查询参数
    this.router.navigate(['/main/course', value, 666], {
      queryParams: {foo: 'bar'}
    });
  }
}
