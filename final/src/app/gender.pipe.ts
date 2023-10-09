import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: any,gender:string): any {
    if( gender == "Female")
    {
    return "Ms." + value;}
  
    else if( gender == "Male")
    {
    return "Mr." + value;}
  
    else
    return value;
  }

}
