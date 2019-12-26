import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '**', redirectTo: '/user/login'},
  {path: '', pathMatch: 'full', redirectTo: '/user/login'},
  {path: 'user', loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)},
  {path: 'rxjs', loadChildren: () => import('./rxjs/rxjs.module').then(mod => mod.RxjsModule)}
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
