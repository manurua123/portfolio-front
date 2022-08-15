import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})


export class PostService {
  private resourceURL = ' http://localhost:8080/post/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.resourceURL + "all");
  }

  save(educacion: Post): Observable<any> {
    return this.httpClient.post<any>(this.resourceURL + 'create', educacion);

  }

  delete(post: Post): Observable<Post> {
    return this.httpClient.delete<Post>(this.resourceURL + '/delete/' + post.id);

  }
}
