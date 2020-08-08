import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthAService } from './auth.service';

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{

    constructor(private authAService :AuthAService, private router: Router){}
    
    canActivate(route: ActivatedRouteSnapshot,
                state : RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
                        
                  return  this.authAService.isAuthenticated()
                            .then((isauthenticated : boolean) => {
                                if(isauthenticated){
                                  return true 
                                 }
                                else{  
                                    this.authAService.isErrorLogInMessage = true 
                                    this.router.navigate(['/'])
                                 }
                        })
                    }
                }