import { Component } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';

declare var jQuery: any;

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent {

  customers: any;
  coutriesList: any;
  customerObj: any;

  constructor(private service: CustomerService) {
    this.customerObj = {
      "empId": "",
      "fistName": "",
      "lastName": "",
      "gender": "",
      "dob": "",
      "country": "",
      "phone": "",
      "emailId": "",
      "password": "",
  }
  }

  ngOnInit() {
    this.service.getCustomers().subscribe((customerData: any) => {
      this.customers = customerData;
      console.log(customerData);
    });

    this.service.getCountries().subscribe((countriesData: any) => { this.coutriesList = countriesData; });
  
  }


  editCustomer(customer: any) {
    this.customerObj = customer;
    jQuery('#custModal').modal('show');
  }
  updateCustomer() {
    this.service.updateCustomer(this.customerObj).subscribe((data: any) => {console.log(data);});
  }

  deleteCustomer(empId: any) {
    this.service.deleteCustomer(empId).subscribe((data: any) => {console.log(data);});  
    const i = this.customers.forEach((customer: any) => {
      return customer.empId == empId;
    });
    this.customers.splice(i, 1);    
  }
}
