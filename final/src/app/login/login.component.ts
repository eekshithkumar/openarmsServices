import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  customers: any;
  customer: any;

  //Dependency Injection for Router, EmpService
  constructor(private router: Router, private service: CustomerService) {
  }

  async validateLogin(loginForm: any) {
    console.log(loginForm);


    //Implementing LocalStorage
    localStorage.setItem("emailId", loginForm.emailId);

    if (loginForm.emailId == "HR" && loginForm.password == "HR") {
      this.service.setUserLoggedIn();
      this.router.navigate(['userhome']);

    } else {

      await this.service.custLogin(loginForm).then((data: any) => {
        console.log(data);
        this.customer = data;
      });

      if (this.customer != null) {
        this.service.setUserLoggedIn();
        this.router.navigate(['userhome']);
      } else {
        alert('Invalid Creadentials');
      }
    }
  }
}
