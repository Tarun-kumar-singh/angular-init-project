import { Component, Input, Output, EventEmitter } from '@angular/core';
 
@Component({
  selector: 'app-alert-error',
  templateUrl: './alert-error.component.html',
  styleUrls: ['./alert-error.component.css']
})
export class AlertErrorComponent {

 @Input() message : string

 @Output() close = new EventEmitter<void>()

 onClose(){
    this.close.emit()
 }


}
