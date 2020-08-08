import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserNameValidator } from '../comman/validators/username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit{

  ngOnInit(): void {
   
  }


  form = new FormGroup({
  
    username: new FormControl("", [
           
            Validators.required,
            Validators.minLength(3),
            UserNameValidator.isContainSpace ],
            UserNameValidator.isTaken),
  
      password: new FormControl("", Validators.required)
  
  })

    get username(){
      return this.form.get('username')
    } 
  
    login(){
      this.form.setErrors({
         invalidLogin : true
      })
     
    }
}
