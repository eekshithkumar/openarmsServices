import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupporterService {

  private userData: any;

  setUserData(data: any) {
    this.userData = data;
  }  

  getUserData() {
    return this.userData;
  }

  getSupporterById() {
    throw new Error('Method not implemented.');
  }

  isUserLogged: boolean;


  constructor(private http: HttpClient) {
    this.isUserLogged = false;
  }

  getCountries(): any {
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  getSupporters(): any {
    return this.http.get('http://localhost:8085/getAllSupporters');
  }

  getSupportersById(s_Id: any): any {
    return this.http.get('http://localhost:8085/getSupporterById/' + s_Id);
  }

  supporterRegister(supporter: any) {
    return this.http.post('registerSupporter', supporter);
  }

  updateSupporter(supporter: any) {
    return this.http.put('updateSupporter', supporter);
  }

  deleteSupporter(s_Id: any) {
    return this.http.delete('deleteSupporter/' + s_Id);
  }

  supporterLogin(suporter: any) {
    return this.http.get('supporterLogin/' + suporter.emailId + "/" + suporter.password).toPromise();
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
