import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Details} from './details.interface'

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http:HttpClient) { }

  getalldetails() 
  {
    return this.http.get("http://localhost:3000/details")
  }
  adddetails(form:any) 
  {
    let header= new HttpHeaders().set('content-type','application/json')

    return this.http.post("http://localhost:3000/details",form,{'headers':header})
  }
}
