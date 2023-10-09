import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  getCustomerById() {
    throw new Error('Method not implemented.');
  }

  isUserLogged: boolean;

  //Dependency Injection for HTTPClient
  constructor(private http: HttpClient) {
    this.isUserLogged = false;
  }

  getCountries(): any {
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  getCustomers(): any {
    return this.http.get('http://localhost:8085/getAllCustomers');
  }

  getCustomersById(custId: any): any {
    return this.http.get('http://localhost:8085/getCustomerById/' + custId);
  }

  customerRegister(customer: any) {
    return this.http.post('registerCustomer', customer);
  }

  updateCustomer(customer: any) {
    return this.http.put('updateCustomer', customer);
  }

  deleteCustomer(custId: any) {
    return this.http.delete('deleteCustomer/' + custId);
  }

  custLogin(customer: any) {
    return this.http.get('custLogin/' + customer.emailId + "/" + customer.password).toPromise();
  }

  //Successfully Logged In
  setUserLoggedIn() {
    this.isUserLogged = true;
  }

   //Logout
  setUserLoggedOut() {
    this.isUserLogged = false;
  }

  getUserLoggedStatus(): boolean {
    return this.isUserLogged;
  }

}
