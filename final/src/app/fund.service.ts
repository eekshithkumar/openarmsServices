import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FundService {

  constructor(private http: HttpClient) { }

  getFunds(): any {
    return this.http.get('http://localhost:8085/getAllfunds');
  }

  getFundById(s_Id: any): any {
    return this.http.get('http://localhost:8085/getFundById/' + s_Id);
  }

  getFundByCustId(custId: any): any {
    return this.http.get('http://localhost:8085/getFundByCustId/' + custId);
  }

  fundRegister(supporter: any) {
    return this.http.post('registerFund', supporter);
  }

  updateFund(supporter: any) {
    return this.http.put('updateFund', supporter);
  }

  deleteFund(s_Id: any) {
    return this.http.delete('deleteFund/' + s_Id);
  }
}
