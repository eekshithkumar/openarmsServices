import { Component, OnInit } from '@angular/core';
import { DonationService } from '../../donation.service';

declare var jQuery: any;

@Component({
  selector: 'app-alldonations',
  templateUrl: './alldonations.component.html',
  styleUrls: ['./alldonations.component.css']
})
export class AlldonationsComponent implements OnInit {

  donations: any;
  donationObj: any;

  constructor(private service: DonationService) {
    this.donationObj = {
      "d_Id": "",
      "d_type": "", // Corrected the typo here
      "dmsg": "",
      "address": "",
      "dest": "",
      "cust_id":""
    };
  }

  ngOnInit() {
    this.service.getDonations().subscribe((supportersData: any) => {
      this.donations = supportersData;
      console.log(supportersData);
    });
  }

  editDonation(cust: any) {
    this.donationObj = cust;
    jQuery('#SupporterModal').modal('show');
  }
  updateDonation() {
    this.service.updateDonation(this.donationObj).subscribe((data: any) => { console.log(data); });
  }

  deleteDonation(custId: any) {
    this.service.deleteDonation(custId).subscribe((data: any) => { console.log(data); });
    const i = this.donations.forEach((cust: any) => {
      return cust.custId == custId;
    });
    this.donations.splice(i, 1);
  }
}


