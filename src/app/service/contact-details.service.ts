import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactDetailsService {
  url="https://localhost:7075/api/ContactDetails";
  constructor(private http:HttpClient) { }
  get(){
    return this.http.get(this.url)
  }
  add(data :any){
    return this.http.post(this.url,data);
  }
  getById(id: number)
  {
    return this.http.get(this.url + "\\" + id);
  }
}
