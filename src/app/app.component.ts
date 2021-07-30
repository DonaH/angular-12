import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hello World How are you ?';
  userObject = {
    name: 'John',
    age: '32',
    id: 0,
    isColored: true
  }

  showUser: boolean = true;
  posts: any = this.httpService.getRequest('https://jsonplaceholder.typicode.com/posts');


  constructor(
    private httpService: HttpService
  ) {

  }

  handleEvent(event: any) {
    console.log(event);
  }

  ngOnInit() {
    // this.getPosts();
  }
}
