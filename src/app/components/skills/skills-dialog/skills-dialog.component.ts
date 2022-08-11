import { Component, Input, OnInit } from '@angular/core';
import { Skill } from './../../../models/skill';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-skills-dialog',
  templateUrl: './skills-dialog.component.html',
  styleUrls: ['./skills-dialog.component.css']
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
  }

  category = ['Diseño', 'WEB', 'MGMT']

  requiredForm: FormGroup ;
  constructor(private fb: FormBuilder) {
    this.requiredForm = this.fb.group({
      name: ['', Validators.required ],
      img: ['', Validators.required ],
      link:['', [Validators.required, ]],
      category: ['', Validators.required ],
      });
  }

  ngOnInit(): void {
  }
  save() {
    alert('SUCCESS!! :-)' );
  }
}
