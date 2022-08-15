import { EducationService } from './../../services/education.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { MatDialog } from '@angular/material/dialog';
import SwiperCore, { Grid, Pagination } from "swiper";
import { Education } from 'src/app/models/education';
import { EducationDialogComponent } from './education-dialog/education-dialog.component';
import { AuthSerivice } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

SwiperCore.use([Pagination, Grid]);

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {


  userAuth$ : Observable<User>
  dataSource: any;
  constructor(public dialog: MatDialog, private educationService: EducationService,private auth: AuthSerivice) {
    this.userAuth$ = auth.getUser()
  }

  ngOnInit(): void {
    this.educationService.getAll().subscribe(data => { this.dataSource = data })
  }
  delete(data: any) {
    alert('ID A ELIMIANAR: ' + data.id);
  }

  openDialog(data?: Education) {
    let dialogRef = this.dialog.open(EducationDialogComponent);
    let instance = dialogRef.componentInstance;
    if (data) {
      instance.isDetailed = true;
      instance.dataRef = data
    }
    else {
      instance.isDetailed = false;
    }
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

