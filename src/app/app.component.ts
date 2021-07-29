import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hello World How are you ?';
  jsonValue = {
    a: 'hello',
    b: 'world'
  }
  newDate = new Date();

  constructor(
    private httpService: HttpService
  ) {

  }

  handleEvent() {
    this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/1')
    .subscribe((response) => {
      this.jsonValue = response;
    })

  }
}
