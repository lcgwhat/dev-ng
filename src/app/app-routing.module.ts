import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: '**', component: HomeComponent},
  {path: 'user', loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)},
  {path: 'rxjs', loadChildren: () => import('./rxjs/rxjs.module').then(mod => mod.RxjsModule)},
  {path: 'main', loadChildren: () => import('./main/main.module').then(mod => mod.MainModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
