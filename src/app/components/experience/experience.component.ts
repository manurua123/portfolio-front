import { ExperienceService } from './../../services/experience.service';
import { Experience } from './../../models/experience';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ExperienceDialogComponent } from './experience-dialog/experience-dialog.component';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthSerivice } from 'src/app/services/auth.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  userAuth$: Observable<User>
  dataSource: any;

  constructor(public dialog: MatDialog, private experienceService: ExperienceService, private auth: AuthSerivice) {
    this.userAuth$ = auth.getUser()
  }

  ngOnInit(): void {
    this.updateTable()

  }
  updateTable() {
    this.experienceService.getAll().subscribe(data => { this.dataSource = data })
  }

  getYear(date: Date) {
    return moment(date).format('YYYY')
  }
  openDialog(data?: Experience) {
    let dialogRef = this.dialog.open(ExperienceDialogComponent);

    let instance = dialogRef.componentInstance;
    if (data) {
      instance.isDetailed = true;
      instance.dataRef = data
    }
    else {
      instance.isDetailed = false;
    }
    dialogRef.afterClosed().subscribe(data => {
      this.updateTable()

    });
  }

  delete(data: Experience) {

    this.experienceService.delete(data).subscribe(data =>
      this.updateTable())

  }

}
