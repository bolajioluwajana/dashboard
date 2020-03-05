import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth.service'

import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';
  loginForm = new FormGroup({
    email: new FormControl('',
    [Validators.required]),
    password: new FormControl('',
    Validators.required)
  })
  error: any;
  constructor(public afAuth: AngularFireAuth, private router: Router, public authService: AuthService, private fb: FormBuilder){
    this.afAuth.auth.onAuthStateChanged(auth => {
      if(auth){
        this.router.navigateByUrl('/dashboard');
      }
    })
  }
  ngOnInit() {
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

GoogleLogin(){
  this.authService.GoogleLogin()
  .then(res =>{
    this.router.navigate(['dashboard'])
  }).catch(
    (err) => {
    this.error = err;
  })
}

Login(value){
  this.authService.doLogin(value)
  .then(res => {
    this.router.navigate(['/user']);
  }, err => {
    console.log(err);
    this.errorMessage = err.message;
  })
}

}