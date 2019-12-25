import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {UserModule} from './user/user.module';


@NgModule({
  declarations: [
    AppComponent, // 声明组件才能正常使用
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // 使用模板驱动表单
    // FormsModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
