
import { AuthSerivice } from './../../services/auth.service';
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
    username:'',
    password:'',
  }



  requiredForm: FormGroup ;
  constructor(private fb: FormBuilder, private auth: AuthSerivice) {
    this.requiredForm = this.fb.group({
      username: ['', Validators.required ],
      password: ['', Validators.required ],
      });
  }

  ngOnInit(): void {
  }
  login() {
    // alert('Data: ' + this.requiredForm.value.username)
    this.auth.login(this.requiredForm.value).subscribe(data=>{
     console.log(data)
    })
  }


  public hasError = (controlName: string, errorName: string) =>{
    return this.requiredForm.controls[controlName].hasError(errorName);
  }
}

