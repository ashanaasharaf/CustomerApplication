import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../common/model/customer';
import { editCustomer } from '../../common/model/editcustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {

  private baseUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getCustomerById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addCustomer(customer: Customer): Observable<any> {
    return this.http.post(this.baseUrl, customer);
  }

  updateCustomer(customer: editCustomer): Observable<any> {
    return this.http.post(this.baseUrl, customer);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
