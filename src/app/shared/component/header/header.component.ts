import { Injectable } from "@angular/core";
import { AuthService } from 'src/app/auth.service';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
 @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

 
  constructor(public authService: AuthService, private router: Router ) { }

  ngOnInit() {}
    toggleSideBar(){
     this.toggleSideBarForMe.emit(); 
     setTimeout(() => {
      window.dispatchEvent(
          new Event('resize')
      );
   }, 300);
    }
   
    SignOut(){
      this.authService.doLogout()
      localStorage.removeItem('dashboard')
        this.router.navigate(['login'])
      
    }
    
    }
  
    
  

  

