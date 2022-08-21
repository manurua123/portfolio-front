import { SkillService } from './../../services/skill.service';
import { Category, Skill } from './../../models/skill';
import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { SkillsDialogComponent } from './skills-dialog/skills-dialog.component';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthSerivice } from 'src/app/services/auth.service';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  categorias: Category[] = [
    { name: 'Diseño', icon: "design_services" },
    { name: 'Development', icon: "code" },
    { name: 'Management', icon: "account_tree" },
  ];


  ramdon() {
    return Math.floor(Math.random() * 100);

  }
  userAuth$: Observable<User>
  dataSource: any;

  constructor(public dialog: MatDialog, private auth: AuthSerivice, private skillService: SkillService) {
    this.userAuth$ = auth.getUser()
  }

  ngOnInit(): void {
    this.updateTable()
  }

  filterArray(cat: string) {
    if (this.dataSource)
      return this.dataSource.filter((skill) => skill.category === cat);
  }

  updateTable() {
    this.skillService.getAll().subscribe(data => { this.dataSource = data })
  }

  openDialog(data?: Skill) {
    let dialogRef = this.dialog.open(SkillsDialogComponent);
    let instance = dialogRef.componentInstance;
    if (data) {
      instance.dataRef = data
    }
    dialogRef.afterClosed().subscribe(result => {
      this.updateTable()
    });
  }
  delete(data: Skill) {
    this.skillService.delete(data).subscribe(data =>
      this.updateTable())

  }
}
