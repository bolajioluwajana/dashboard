import { UserService } from './user.model';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, rootRouterConfig } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layout/default/default.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/component/shared.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';


export const firebaseConfig = {
  apiKey: "AIzaSyDRwdCp-7brEOVAYZ4IJ3CEPHCnSW-pGro",
  authDomain: "data-dashboard-f79ca.firebaseapp.com",
  databaseURL: "https://data-dashboard-f79ca.firebaseio.com",
  projectId: "data-dashboard-f79ca",
  storageBucket: "data-dashboard-f79ca.appspot.com",
  messagingSenderId: "350907223638",
  appId: "1:350907223638:web:743b5609f8174c640eb5f7"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    HttpClientModule,
    SharedModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(rootRouterConfig, {useHash: false}),
    ReactiveFormsModule,
],
  providers: [
    AuthService,
    UserService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

