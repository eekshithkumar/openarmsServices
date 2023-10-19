import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginStatus: any;
  service: any;

  
  ngOnInit() {
    this.service.getLoginStatus().subscribe((data: any) => {
      this.loginStatus = data;
    });
  }
}

