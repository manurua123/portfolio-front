import { Experience } from './../../../models/experience';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience-dialog',
  templateUrl: './experience-dialog.component.html',
  styleUrls: ['./experience-dialog.component.css']
})
export class ExperienceDialogComponent implements OnInit {
  @Input()
  isDetailed: boolean = false;
  @Input()
  dataRef: Experience = {
    position: '',
    company: '',
    companyLink: '',
    begin: new Date(),
    end: null,
  }

  requiredForm: FormGroup ;
  constructor(private fb: FormBuilder) {
    this.requiredForm = this.fb.group({
      position: ['', Validators.required ],
      company: ['', Validators.required ],


      });
  }

  ngOnInit(): void {

  }
  save() {
    alert('SUCCESS!! :-)' + this.dataRef.begin);
  }

}
