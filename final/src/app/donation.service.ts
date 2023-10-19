import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private http: HttpClient) { }

  getDonations(): any {
    return this.http.get('http://localhost:8085/getAlldonations');
  }

  getDonationById(s_Id: any): any {
    return this.http.get('http://localhost:8085/getDonationById/' + s_Id);
  }

  getDonationByCustId(custId: any): any {
    return this.http.get('http://localhost:8085/getDonationsByCustId/' + custId);
  }

  donationRegister(supporter: any) {
    return this.http.post('registerDonation', supporter);
  }

  updateDonation(supporter: any) {
    return this.http.put('updateDonation', supporter);
  }

  deleteDonation(s_Id: any) {
    return this.http.delete('deleteDonation/' + s_Id);
  }
}
