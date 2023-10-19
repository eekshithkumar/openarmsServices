import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { FundService } from '../../fund.service';

@Component({
  selector: 'app-myfund',
  templateUrl: './myfund.component.html',
  styleUrls: ['./myfund.component.css']
})
export class MyfundComponent implements OnInit {
  custdata: any;
  funds: any;
  custId: any;
  customer: any;

  constructor(private service: FundService, private ser: CustomerService) {
    this.customer = this.ser.getUserData();
  }

  ngOnInit() {
    this.getFundByCustId();
  }

  // getDonationByCustId() {
  //   this.service.getDonationByCustId(this.customer.custId).subscribe((donationData: any) => {
  //     this.donations = donationData;
  //   });
  // }

  getFundByCustId() {
    this.service.getFundByCustId(this.customer.custId).subscribe(
      (fundData: any) => {
        this.funds = fundData;
      },
      (error: any) => {
        console.error('Error fetching donation data:', error);
        // You can also display an error message to the user.
      }
    );
  }
  
}
