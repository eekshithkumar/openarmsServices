import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/customer.service';
import { FundService } from '../../fund.service';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent {

  fund: any;
  customer: any;

  constructor(private service: FundService,private router: Router, private toastr: ToastrService, private ser: CustomerService) {
    this.customer = this.ser.getUserData();
    this.fund = {              
      "f_amount": "",         // Set the appropriate value for address
      "fmsg": "",            // Set the appropriate value for dmsg
      "fdest": null,              // Set the appropriate value for dest
      "customer": {"custId": this.customer.custId }    // Set the appropriate value for custI}
    }    
  }

  fundRegister(regForm: any) {

    console.log(regForm);
    this.service.fundRegister(regForm).subscribe((data: any) => {
      console.log(data);

      if (data != null ) {
        // If successful, navigate to the login component
        this.showSuccess()
        this.router.navigate(['special']);
      }
    });
  }
  showSuccess() {
    this.toastr.success('Fund Registration', 'Successful');
  }
}