import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }

   activateEmmiter = new Subject<boolean>()   


  }
