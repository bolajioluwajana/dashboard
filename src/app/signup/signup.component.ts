import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService } from '../auth.service'

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  error: any;

  constructor(public authService: AuthService, private router:Router, private fb:FormBuilder) {
    this.createForm();
   }

   createForm(){
    this.registerForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });

   }

   FacebookLogin() {
    this.authService.FacebookLogin()
    .then(res=> {
        this.router.navigate(['/dashboard']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }
  
  GoogleLogin() {
    this.authService.GoogleLogin()
    .then(res =>{
      this.router.navigate(['/dashboard'])
    }).catch(
      (err) => {
      this.error = err;
    })
  }

  Register(value){
    this.authService.Register(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "Your account has been created";
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }
  
  ngOnInit() {
  }

}
