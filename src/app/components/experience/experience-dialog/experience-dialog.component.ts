import { Experience } from './../../../models/experience';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-experience-dialog',
  templateUrl: './experience-dialog.component.html',
  styleUrls: ['./experience-dialog.component.css']
})
export class ExperienceDialogComponent implements OnInit {
  @Input()
  isDetailed: boolean = false;
  @Input()
  dataRef : Experience ={
    position: '',
    company: '',
    companyLink: '',
    begin: new Date(0),
    end: new Date(0),
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.dataRef)
  }
  save() {
    alert('SUCCESS!! :-)'+ this.dataRef.begin );
  }

}
