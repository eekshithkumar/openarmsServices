import { Component, OnInit } from '@angular/core';
import { FundService } from '../../fund.service';


declare var jQuery: any;

@Component({
  selector: 'app-allfunds',
  templateUrl: './allfunds.component.html',
  styleUrls: ['./allfunds.component.css']
})
export class AllfundsComponent implements OnInit {

  funds: any;
  fundObj: any;

  constructor(private service: FundService) {
    this.fundObj = {
      "f_Id": "",
      "f_amount": "",
      "fmsg": "",
      "fdest": "",
      "cust_id":""
    };
  }

  ngOnInit() {
    this.service.getFunds().subscribe((supportersData: any) => {
      this.funds = supportersData;
      console.log(supportersData);
    });
  }

  editFund(cust: any) {
    console.log('editFund');
    console.log(cust);
    this.fundObj = cust;
    jQuery('#FundModal').modal('show');
  }

  updateFund() {
    this.service.updateFund(this.fundObj).subscribe((data: any) => { console.log(data); });
  }

  deleteFund(custId: any) {
    this.service.deleteFund(custId).subscribe((data: any) => { console.log(data); });
    const i = this.funds.forEach((cust: any) => {
      return cust.custId == custId;
    });
    this.funds.splice(i, 1);
  }
}


