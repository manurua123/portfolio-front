import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})


export class PostService {
  private resourceURL = 'https://porfolio-rua.herokuapp.com/post/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.resourceURL + "all");
  }

  save(post: Post): Observable<any> {
    return this.httpClient.post<any>(this.resourceURL + 'create', post);

  }

  delete(post: Post): Observable<Post> {
    return this.httpClient.delete<Post>(this.resourceURL + '/delete/' + post.id);

  }
}
