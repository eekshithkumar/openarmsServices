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
      "doj":"",
      }
  }

  ngOnInit(){
    this.service.getCountries().subscribe((countriesData: any) => { this.coutriesList = countriesData; });
  
  }

  customerRegister(regForm: any) {

    console.log(regForm);

    this.customer.firstName = regForm.firstName;
    this.customer.lastName = regForm.lastName;
    this.customer.gender = regForm.gender;
    this.customer.country = regForm.country;
    this.customer.emailId = regForm.emailId;
    this.customer.password = regForm.password;
    this.customer.doj = regForm.doj;

    this.service.customerRegister(this.customer).subscribe((data: any) => {
      console.log(data);
    });
  }

}