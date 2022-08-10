import { Education } from './../../../models/education';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-education-dialog',
  templateUrl: './education-dialog.component.html',
  styleUrls: ['./education-dialog.component.css']
})
export class EducationDialogComponent implements OnInit {

  @Input()
  isDetailed: boolean = false;
  @Input()
  dataRef : Education = {
    career: '',
    university: '',
    img:'',
    link: '',
    description: '',
    certification: '',
    duration: '' ,
    begin: new Date,
    end: new Date,
    progress: 0,
  }
 constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
  }
  save() {
    alert('SUCCESS!! :-)'+ this.dataRef.progress );
  }

  formatLabel(value: number) {
    if (value <= 100) {
      return Math.round(value) + '%';
    }

    return value;
  }





}


