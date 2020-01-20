import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import { UcenterComponent } from './ucenter/ucenter.component';
import { CourseComponent as PathCourseComponent } from './ucenter/course/course.component';
import {CourseComponent} from './course/course.component';

@NgModule({
  declarations: [MainComponent, UcenterComponent, PathCourseComponent, CourseComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
