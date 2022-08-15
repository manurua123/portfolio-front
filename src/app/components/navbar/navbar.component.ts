import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import {
  MatDialog,

} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthSerivice } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userAuth$ : Observable<User>

  constructor(public dialog: MatDialog,private auth: AuthSerivice) {
    this.userAuth$ = auth.getUser()
  }

  ngOnInit(): void {}

  openDialog() {
    let dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  logAut(){
    this.auth.logOut()
  }
}
