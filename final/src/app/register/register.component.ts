import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer: any;
  coutriesList: any;
  

  //Dependency Injection for EmpService
  constructor(private router: Router, private service: CustomerService, private toastr: ToastrService) {
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

      if (data != null ) {
        // If successful, navigate to the login component
        this.showSuccess()
        this.router.navigate(['login']);
      }
    });
  }
  showSuccess() {
    this.toastr.success('Registration', 'Successful');
  }
}