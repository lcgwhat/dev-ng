import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {UserModule} from './user/user.module';
import {RxjsModule} from './rxjs/rxjs.module';
import { HomeComponent } from './home/home.component';
import {MainModule} from './main/main.module';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent, // 声明组件才能正常使用
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // 使用模板驱动表单
    // FormsModule,
    UserModule,
    RxjsModule,
    MainModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
