import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer: any;
  coutriesList: any;
  

  //Dependency Injection for EmpService
  constructor(private service: CustomerService) {
    this.customer = {
      "empId": "",
      "firstName": "",
      "lastName": "",
      "gender": "",
      "country": "",
      "emailId": "",
      "password": "",
      "dob":"",
      "phone":""
      }
  }

  ngOnInit(){
    this.service.getCountries().subscribe((countriesData: any) => { this.coutriesList = countriesData; });
  
  }

  customerRegister(regForm: any) {

    console.log(regForm);

   

    this.service.customerRegister(regForm).subscribe((data: any) => {
      console.log(data);
    });
  }

}