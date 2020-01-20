import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    // route.paramMap是Observable
    // 获取必选参数
    route.paramMap.subscribe((pm: ParamMap) => {
      console.log(pm.get('id'));
    });
    // 获取查询参数
    route.queryParamMap.subscribe((pm: ParamMap) => {
      console.log(pm.get('foo'));
    });
  }

  ngOnInit() {
  }

}
