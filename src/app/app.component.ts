import { Component } from '@angular/core';
class Animal {
  name: string;
  constructor(name:string) {
    this.name = name;
  }
  show() {
    return `动物的名字${this.name}`;
  }
}
class Dog extends Animal {

  constructor(name: string) {
    super(name);
  }
  static getName() {
    return 'limi';
  }
}
Dog.getName();
const dog = new Dog('pipixia');
console.log(dog.show());
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
}
