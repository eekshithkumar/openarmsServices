import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';

declare var jQuery: any;

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  customers: any;
  coutriesList: any;
  customerObj: any;

  constructor(private service: CustomerService) {
    this.customerObj = {
      "custId": "",
      "firstName": "", // Corrected the typo here
      "lastName": "",
      "gender": "",
      "dob": "",
      "country": "",
      "phone": "",
      "emailId": "",
      "password": "",
    };
  }

  ngOnInit() {
    this.service.getCustomers().subscribe((customerData: any) => {
      this.customers = customerData;
      console.log(customerData);
    });

    this.service.getCountries().subscribe((countriesData: any) => { this.coutriesList = countriesData; });
  }

  editCustomer(cust: any) {
    this.customerObj = cust;
    jQuery('#CustModal').modal('show');
  }
  updateCustomer() {
    this.service.updateCustomer(this.customerObj).subscribe((data: any) => { console.log(data); });
  }

  deleteCustomer(custId: any) {
    this.service.deleteCustomer(custId).subscribe((data: any) => { console.log(data); });
    const i = this.customers.forEach((cust: any) => {
      return cust.custId == custId;
    });
    this.customers.splice(i, 1);
  }
}
