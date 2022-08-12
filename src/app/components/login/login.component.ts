import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  dataRef: User = {
    userName:'',
    pass:'',
  }

  category = ['Diseño', 'WEB', 'MGMT']

  requiredForm: FormGroup ;
  constructor(private fb: FormBuilder) {
    this.requiredForm = this.fb.group({
      userName: ['', Validators.required ],
      pass: ['', Validators.required ],

      });
  }

  ngOnInit(): void {
  }
  login() {
    alert('SUCCESS!! :-)' );
  }
}

