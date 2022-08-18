import { EducationService } from './../../services/education.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import SwiperCore, { Grid, Pagination } from "swiper";
import { Education } from 'src/app/models/education';
import { EducationDialogComponent } from './education-dialog/education-dialog.component';
import { AuthSerivice } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import * as moment from 'moment';

SwiperCore.use([Pagination, Grid]);

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  userAuth$: Observable<User>
  dataSource: any;

  constructor(public dialog: MatDialog, private educationService: EducationService, private auth: AuthSerivice) {
    this.userAuth$ = auth.getUser()
  }

  ngOnInit(): void {
    this.updateTable()
  }
  getYear(date: Date) {
    return moment(date).format('YYYY')
  }

  updateTable() {
    this.educationService.getAll().subscribe(data => { this.dataSource = data })
  }

  openDialog(data?: Education) {
    let dialogRef = this.dialog.open(EducationDialogComponent);
    let instance = dialogRef.componentInstance;
    if (data) {
      instance.dataRef = data
    }
    dialogRef.afterClosed().subscribe(result => {
      this.updateTable()
    });
  }

  delete(data: Education) {
    this.educationService.delete(data).subscribe(data =>
      this.updateTable())

  }
}

