import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidators } from '../comman/password.validators';

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrls: ['./password-update.component.css']
})
export class PasswordUpdateComponent {

  form;
  isChanged = false

  constructor(fb : FormBuilder) {
    
    this.form = fb.group({  

        oldPassword : ['', Validators.required, PasswordValidators.validOldPassword],
        newPassword : ['', Validators.required],
        confirmPassword: ['', Validators.required]

      },
      {
        validator: PasswordValidators.passwordMatched
      }
      )
    }


   get oldPassword(){
      return this.form.get('oldPassword')
   }

   get newPassword(){
    return this.form.get('newPassword')
  }


  get confirmPassword(){
    return this.form.get('confirmPassword')
  }

  submit(){
    console.log('submit...')
    this.isChanged = true
  }

}
