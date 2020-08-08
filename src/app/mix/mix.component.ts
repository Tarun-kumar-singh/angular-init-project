import { Component, OnInit, Input } from '@angular/core';
import { DemoService } from '../services/demo.service';
 

@Component({
  selector: 'app-mix',
  templateUrl: './mix.component.html',
  styleUrls: ['./mix.component.css']
})
export class MixComponent implements OnInit {

  date = new Date()
  stringValue = ""
  isActivated : boolean = false
  offLine = true
  appStatus = new Promise((resolve, rejects) => {
      setTimeout(() => {
        this.offLine = false
        resolve('Online')
      }, 2000);  
  })
  constructor(private demoService : DemoService) { }

  ngOnInit(): void {

  }

  onChange(){
    console.log(this.stringValue)
  }

 

}
