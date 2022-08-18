import { ExperienceService } from './../../../services/experience.service';
import { Experience } from './../../../models/experience';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-experience-dialog',
  templateUrl: './experience-dialog.component.html',
  styleUrls: ['./experience-dialog.component.css']
})
export class ExperienceDialogComponent implements OnInit {

  @Input()
  dataRef: Experience = {
    position: '',
    company: '',
    companyLink: '',
    begin: new Date(),
    end: null,
  }


  requiredForm: FormGroup;
  constructor(private fb: FormBuilder, private experienceSericice: ExperienceService, public dialogRef: MatDialogRef<ExperienceDialogComponent>) {

    this.requiredForm = this.fb.group({
      position: ['', Validators.required],
      company: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }
  save() {
    this.experienceSericice.save(this.dataRef).subscribe()
    this.dialogRef.close();
  }
  close() {

  }


}
