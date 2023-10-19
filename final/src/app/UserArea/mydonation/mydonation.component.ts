import { Component, OnInit } from '@angular/core';
import { DonationService } from '../../donation.service';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-mydonation',
  templateUrl: './mydonation.component.html',
  styleUrls: ['./mydonation.component.css']
})
export class MydonationComponent implements OnInit {
  custdata: any;
  donations: any;
  custId: any;
  customer: any;

  constructor(private service: DonationService, private ser: CustomerService) {
    this.customer = this.ser.getUserData();
  }

  ngOnInit() {
    this.getDonationByCustId();
  }

  // getDonationByCustId() {
  //   this.service.getDonationByCustId(this.customer.custId).subscribe((donationData: any) => {
  //     this.donations = donationData;
  //   });
  // }

  getDonationByCustId() {
    this.service.getDonationByCustId(this.customer.custId).subscribe(
      (donationData: any) => {
        this.donations = donationData;
      },
      (error: any) => {
        console.error('Error fetching donation data:', error);
        // You can also display an error message to the user.
      }
    );
  }
  
}
