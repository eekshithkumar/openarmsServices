import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exp'
})
export class ExpPipe implements PipeTransform {

  currentYear: any;
  joinYear: any;
  experience: any;

  transform(value: any): any {
    
    this.currentYear = new Date().getFullYear();
    this.joinYear = new Date(value).getFullYear();
    this.experience = this.currentYear - this.joinYear;
    
    return this.experience;
  }

}