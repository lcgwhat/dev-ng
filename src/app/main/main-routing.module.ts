import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main.component';
import {UcenterComponent} from './ucenter/ucenter.component';
import {CourseComponent} from './ucenter/course/course.component';


const routes: Routes = [
  { path: 'main', component: MainComponent, children: [
      {path: 'ucenter', component: UcenterComponent},
      {path: 'course/:id/:pid', component: CourseComponent},
      {path: '', pathMatch: 'full', component: UcenterComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
