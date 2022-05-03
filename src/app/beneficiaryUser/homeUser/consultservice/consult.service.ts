import { Consult } from './../model/consult';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ConsultService {

  url = 'http://localhost:3000/consult'

  constructor(private http: HttpClient,
             private router: Router) { }

  getconsult(email:string){
    return this.http.get(`${this.url}/showconsults/${email}`)
  }

  deleteconsult(id:string){

  return this.http.delete(`${this.url}/deleteconsult/${id}`)

  }

  updateConsult(id:string, consult: Consult ){

    return this.http.post(`${this.url}/updateconsult/${id}`,consult)
  }



}
