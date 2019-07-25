import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private readonly http: HttpClient) {} //imported httpclient for json data

  //a promise means that it will asynchroniously change somthing
  get(url: string): Promise<any> { //when making http requests, hae to pass it a url
    return this.http.get(url, {
      headers: this.buildOptions()
    })
    .toPromise() //whenever you use a promise ALWAYS have a .catch to display the error, if there is one
    .catch(err => {
      console.error(err);
    });
  }

  buildOptions(): HttpHeaders { //headers are fields of meta data for eerytime you make a request
    return new HttpHeaders({
      Accept: 'application/json'
    });
  }
}
