import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  customers: any;
  customer: any;

  //Dependency Injection for Router, EmpService
  constructor(private router: Router, private service: CustomerService, private toastr: ToastrService) {
  }

  async validateLogin(loginForm: any) {
    console.log(loginForm);

    //Implementing LocalStorage
    localStorage.setItem("emailId", loginForm.emailId);

    if (loginForm.emailId == "admin" && loginForm.password == "admin") {
      this.service.setUserLoggedIn();
      this.showSuccess()
      this.router.navigate(['adminhome']);

    } else {

      await this.service.custLogin(loginForm).then((data: any) => {
        console.log(data);
        this.customer = data;
      });

      if (this.customer != null) {
        this.service.setUserLoggedIn();
        this.router.navigate(['userhome'], { state: { customer: this.customer } });
      } else {
        this.showFail();
      }
    }

    localStorage.setItem("customerName", this.customer.data);
  }
  showSuccess() {
    this.toastr.success('Login', 'Successful');
  }

  showFail() {
    this.toastr.warning('Login Fail', 'Invalid credentials')
  }
}