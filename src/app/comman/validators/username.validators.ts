import { AbstractControl, ValidationErrors } from '@angular/forms';
 

export class UserNameValidator{

    static isContainSpace(control: AbstractControl ) : ValidationErrors | null{

     return (control.value as string).indexOf(' ') >= 0 ? { containSpace : true} : null
    }


    static isTaken(control: AbstractControl) : Promise<ValidationErrors | null> {
 
        return new Promise((resolve, reject) => {
   
            setTimeout(() => {
                if(control.value === 'tarun'){
                     resolve({ isTaken : true })
                    }
                 else {
                     resolve(null)
                    }
            }, 2000);
      
        })

          }
}