import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'callApi20181111';
  posts: Observable<any[]> = this.http
    .get('https://jsonplaceholder.typicode.com/posts')
    .pipe(map((posts: any[]) => posts.map((x: any) => ({ id: x.id, title: x.title }))));
  constructor(private http: HttpClient) {}
}
