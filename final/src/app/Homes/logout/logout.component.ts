import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../customer.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private router: Router, private service: CustomerService,private toastr: ToastrService) {
    this.service.setUserLoggedOut();
    this.showSuccess();
    router.navigate(['login']);
  }
  showSuccess() {
    this.toastr.success('Logout', 'Successful');
  }
}