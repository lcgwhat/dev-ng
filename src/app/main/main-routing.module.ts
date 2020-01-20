import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main.component';
import {UcenterComponent} from './ucenter/ucenter.component';
import {CourseComponent as PathCourseComponent} from './ucenter/course/course.component';
import {CourseComponent} from './course/course.component';
import {NotFoundComponent} from '../not-found.component';


const routes: Routes = [
  { path: 'main', component: MainComponent, children: [
      {path: 'ucenter', component: UcenterComponent, children: [
          {path: 'course', component: PathCourseComponent},
          {path: '', pathMatch: 'full', component: PathCourseComponent},
          {path: '**', component: NotFoundComponent}
        ]},
      {path: 'course/:id/:pid', component: CourseComponent},
      {path: '', pathMatch: 'full', component: UcenterComponent},
      {path: '**', component: NotFoundComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
