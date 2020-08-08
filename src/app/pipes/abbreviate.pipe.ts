import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'abbreviate'
})
export class Abbreviate implements PipeTransform{
    transform(value : any){
     let result : string = ''
         value.trim().split(" ").map((value) => result = result + " " + value[0])
        return result
    }
}