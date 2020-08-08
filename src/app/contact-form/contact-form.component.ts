import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  log(x){
    console.log(x)
  }

contactMethods = [
  {id:1, value:'Email'},
  {id:2, value:'Phone'},
  {id:3, value:'Facebook'}
]

contactMethods2 = [
  
    {id:1, value:'Phone'},
    {id:2, value:'Email'}

]


}
