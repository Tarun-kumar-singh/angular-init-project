import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  @Input('title') title : string 

  @Input('isExpand') isExpand : boolean

 onClick = () =>{

  this.isExpand = !this.isExpand

 }

}
