import { PostComponent } from './post/post.component';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PasswordUpdateComponent } from './password-update/password-update.component';
import { MixComponent } from './mix/mix.component';
import { AuthGuard } from './auth-guard.service';
import { NgModule, Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DynamicformComponent } from './dynamicform/dynamicform.component';
 
const appRoutes : Routes = [
    {path: '', component: HomeComponent},
    { path:'posts', canActivate:[AuthGuard], component: PostComponent },
    { path:'details', component: PostDetailComponent },
    { path:'signup', component: SignupFormComponent },
    { path:'changepassword', component: PasswordUpdateComponent },
    { path: 'mix', component : MixComponent},
    {path: 'dynamicform', component : DynamicformComponent }
]


 @NgModule({

   imports:[ RouterModule.forRoot(appRoutes)],
exports:[RouterModule]

 })   
export class AppRoutingModule{}