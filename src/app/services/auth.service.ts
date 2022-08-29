import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})


export class AuthSerivice {
  private resourceURL = 'https://porfolio-rua.herokuapp.com/login/';

  private userObservable: BehaviorSubject<any> = new BehaviorSubject({})
  constructor(private http: HttpClient) {

  }


  login(data: any): Observable<any> {
    return this.http.post(this.resourceURL, data).pipe(map(
      data => {
        console.log("SERVICE: " + data)
        this.userObservable.next(data)
        return data;
      }
    ))
  }
  logOut() {
    this.userObservable.next('')
  }
  getUser() {
    return this.userObservable;
  }




}
