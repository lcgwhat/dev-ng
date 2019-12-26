import { Component, OnInit } from '@angular/core';
import {fromEvent, interval, Observable, of} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import {log} from 'util';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Observable 对象创建，构造函数中传入订阅函数，其参数是观察者
    const xd = new Observable((observer) => {
      setInterval( () => {
        // 成功，发送数据
        observer.next({code: 200, message: 'xx'});
        // observer.error 和 observer.complete 会终止订阅
        // 失败
        // observer.error({code: 100, message: 'xx'});
        // 完成
        // observer.complete();
      }, 100);
    });
    console.log(xd);
    const subscrition = xd.subscribe((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    }, () => {
      console.log('complete');
    });
    // 终止订阅
    subscrition.unsubscribe();

    const ob = fromPromise(fetch('asset/data.json'));
    ob.subscribe({
      next(response) {
        console.log(response);
      },
      error(err) {
        console.log(err);
      }
    });

    // 通过定时器构造
    const ob3 = interval(1000).pipe(
      take(5)
    );
    ob3.subscribe(value => {
      console.log('计数' + value);
    });

    // 通过事件构造
    const ob4 = fromEvent(document, 'click');
    ob4.subscribe((evt: MouseEvent) => {
        log(evt.clientX + '-' + evt.clientY );
    });

    // 通过已存在的值
    const ob5 = of(5);
  }

}
