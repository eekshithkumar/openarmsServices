import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/customer.service';
import { DonationService } from 'src/app/donation.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})

export class UserhomeComponent {

  donation: any;
  customer: any;

  constructor(private service: DonationService,private router: Router, private toastr: ToastrService, private ser: CustomerService) {
    this.customer = this.ser.getUserData();
    this.donation = {               // Set the appropriate value for d_Id
      "d_type": "",       // Set the appropriate value for d_type
      "address": "",         // Set the appropriate value for address
      "dmsg": "",            // Set the appropriate value for dmsg
      "dest": null,              // Set the appropriate value for dest
      "customer": {"custId": this.customer.custId }    // Set the appropriate value for custI}
    }    
  }

  donationRegister(regForm: any) {

    console.log(regForm);
    this.service.donationRegister(regForm).subscribe((data: any) => {
      console.log(data);

      if (data != null ) {
        // If successful, navigate to the login component
        this.showSuccess()
        this.router.navigate(['userhome']);
      }
    });
  }
  showSuccess() {
    this.toastr.success('Donation Registration', 'Successful');
  }
}
