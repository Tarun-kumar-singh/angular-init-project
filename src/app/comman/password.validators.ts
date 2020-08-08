import { AbstractControl, ValidationErrors } from '@angular/forms';
 

export class PasswordValidators{

    static validOldPassword(control : AbstractControl){
        return new Promise((resolve) => {
            if(control.value === '1234'){ resolve({ invalidOldPassword : false }) }
             
            resolve(null) 
        })
    }

    static passwordMatched(control: AbstractControl ) : ValidationErrors | null{
    
            let newPassword = control.get('newPassword')
            let confirmPassword = control.get('confirmPassword')
            if(newPassword.value !== confirmPassword.value){ return{ passwordMatched: true }}
            else{ return { passwordMatched: false }}

    }
}