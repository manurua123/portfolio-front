import { SkillService } from './../../../services/skill.service';
import { Component, Input, OnInit } from '@angular/core';
import { Skill } from './../../../models/skill';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-skills-dialog',
  templateUrl: './skills-dialog.component.html',
  styleUrls: ['./skills-dialog.component.css'],
})
export class SkillsDialogComponent implements OnInit {
  @Input()
  isDetailed: boolean = false;
  @Input()
  dataRef: Skill = {
    name: '',
    img: '',
    link: '',
    category: '',
    progress: 0,
  };

  category = ['Diseño', 'WEB', 'MGMT'];
  url = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  requiredForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private skillService: SkillService,
    public dialogRef: MatDialogRef<SkillsDialogComponent>
  ) {
    this.requiredForm = this.fb.group({
      name: ['', [Validators.required, Validators.min(5)]],
      img: ['', [Validators.min(10), Validators.pattern(this.url)]],
      link: ['', Validators.pattern(this.url)],
    });
  }

  ngOnInit(): void {}
  save() {
    this.skillService.save(this.dataRef).subscribe();
    this.dialogRef.close();
  }

  formatLabel(value: number) {
    if (value <= 100) {
      return Math.round(value) + '%';
    }
    return value;
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.requiredForm.controls[controlName].hasError(errorName);
  };
}
