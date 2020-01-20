import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import { UcenterComponent } from './ucenter/ucenter.component';
import { CourseComponent } from './ucenter/course/course.component';

@NgModule({
  declarations: [MainComponent, UcenterComponent, CourseComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
