import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../customer.service';
import { ToastrService } from 'ngx-toastr';
import { SupporterService } from '../../supporter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  customers: any;
  customer: any;
  supporter: any;

  //Dependency Injection for Router, EmpService
  constructor(private router: Router, private service: CustomerService, private toastr: ToastrService, private ser: SupporterService) {
  }

  async validateLogin(loginForm: any) {
    console.log(loginForm);

    if (loginForm.emailId === "admin" && loginForm.password === "admin") {
      this.service.setUserLoggedIn();
      this.showSuccess();
      this.router.navigate(['adminhome']);
    } else {
      // Try to login as a customer
      await this.service.custLogin(loginForm).then((data: any) => {
        console.log(data);
        this.customer = data;
        if (this.customer != null) {
          this.service.setUserData(this.customer);
          this.service.setUserLoggedIn();
          this.router.navigate(['userhome'], { state: { customer: this.customer } });
        }
      });

      // If not successful as a customer, try as a supporter
      if (this.customer == null) {
        await this.ser.supporterLogin(loginForm).then((data: any) => {
          console.log(data);
          this.supporter = data;
          if (this.supporter != null) {
            this.ser.setUserData(this.supporter);
            this.service.setUserLoggedIn(); // You may want to consider using a different flag for supporters
            this.router.navigate(['supporterhome'], { state: { supporter: this.supporter } });
          } else {
            this.showFail();
          }
        });
      }
    }

  }

  showSuccess() {
    this.toastr.success('Login', 'Successful');
  }

  showFail() {
    this.toastr.warning('Login Fail', 'Invalid credentials')
  }
}

