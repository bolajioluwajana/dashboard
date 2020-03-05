import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { SignupComponent } from './signup/signup.component';


export const rootRouterConfig: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path:'register', component: SignupComponent},
  { path: 'dashboard', component: DefaultComponent,
    children: [{ path:'',
        component: DashboardComponent,
      }, { path: 'posts',
      component: PostsComponent
      }]
  }, { path: 'posts',
  component: PostsComponent
  },
{path: 'signout', component: LoginComponent}]

@NgModule({
 
})
export class AppRoutingModule { }
