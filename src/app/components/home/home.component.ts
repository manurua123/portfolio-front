import { Observable } from 'rxjs';
import { AuthSerivice } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   userAuth$ : Observable<User>
  constructor(private auth: AuthSerivice) {
    this.userAuth$ = auth.getUser()
   }

  ngOnInit(): void {}





}
