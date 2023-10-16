import { Component } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-showuserbyid',
  templateUrl: './showuserbyid.component.html',
  styleUrls: ['./showuserbyid.component.css']
})
export class ShowuserbyidComponent {

  customers: any;
  custId: any;
  customer: any;
  emailId: any;

  constructor(private service: CustomerService) {
    this.emailId = localStorage.getItem('emailId');
  }

  getCustomer() {
    this.service.getCustomersById(this.custId).subscribe((customerData: any) => {
      this.customer = customerData;
    });
  }
}
