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
  url = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

 constructor(private fb: FormBuilder) {
  this.requiredForm = this.fb.group({
    career: ['', [Validators.required,Validators.min(5) ]],
    university: ['', [Validators.required,Validators.min(5),] ],
    img: ['', [Validators.required,Validators.minLength(10),Validators.pattern(this.url) ]],
    description: ['', [Validators.required,Validators.min(5)] ],
    progress: [0, Validators.required ],
    link: ['', [Validators.required,Validators.min(10),Validators.pattern(this.url)] ],
    certification:['', [Validators.min(10),Validators.pattern(this.url)] ],
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

  public hasError = (controlName: string, errorName: string) =>{
    return this.requiredForm.controls[controlName].hasError(errorName);
  }





}


