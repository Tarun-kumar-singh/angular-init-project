import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class AuthAService{

    loggedIn = false
    isErrorLogInMessage : boolean = false

    isAuthenticated(){
        const promise = new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(this.loggedIn)
            }, 1000);
        })
        return promise
    }

    logIn(){
        this.loggedIn = true
    }

    logOut(){
        this.loggedIn = false
    }

}