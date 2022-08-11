import { Education } from './../../../models/education';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    begin: new Date,

    progress: 0,
  }
  requiredForm: FormGroup ;
 constructor(private fb: FormBuilder) {
  this.requiredForm = this.fb.group({
    career: ['', Validators.required ],
    university: ['', Validators.required ],

    description: ['', Validators.required ],
    progress: [0, Validators.required ],
    link: ['', Validators.required ],
    });
 }


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


