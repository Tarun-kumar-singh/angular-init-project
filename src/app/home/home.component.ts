import { Component, OnInit } from '@angular/core';
import { AuthAService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authAService: AuthAService, private route : ActivatedRoute) { }

  isLoggedIn : boolean
  isErrorLogInMessage : boolean = this.authAService.isErrorLogInMessage 
  errorLogInMessage : string = 'Please Log in first'

  ngOnInit(): void {
   }

  onLogIn(){
     this.authAService.logIn()
    this.isLoggedIn = true
     }
  onLogout(){
    this.authAService.loggedIn = false
    this.isLoggedIn = false
  }

}
