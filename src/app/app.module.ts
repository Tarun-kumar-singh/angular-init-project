import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { TestComponent } from './test/test.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { PasswordUpdateComponent } from './password-update/password-update.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { NavigationComponent } from './navigation/navigation.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { MixComponent } from './mix/mix.component';
import { Abbreviate } from './pipes/abbreviate.pipe';
import { AdvertismentComponent } from './advertisment/advertisment.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { firebaseModule } from './firebasedata/firebase.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexComponent } from './flex/flex.component';
import { DynamicformComponent } from './dynamicform/dynamicform.component';
// declaration is the list of component, directives, pipes
// imports are the list of modules that we have to used in component
// provideres are the list of services
// 

 @NgModule({
  
  declarations: [
    AppComponent,
    SignupFormComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    TestComponent,
    ContactFormComponent,
    PasswordUpdateComponent,
    PostComponent,
    NavigationComponent,
    PostDetailComponent,
    MixComponent,
    Abbreviate,
    AdvertismentComponent,
    HomeComponent,
    FlexComponent,
    DynamicformComponent,     
  ],
  
  imports: [
    ToastrModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,                               
    ReactiveFormsModule,
    FlexLayoutModule,
    firebaseModule,
    AppRoutingModule,

  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
