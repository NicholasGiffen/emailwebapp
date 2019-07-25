import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root' //provide it in root module 
})
export class EmailService {
  constructor(
    private readonly rest: RestService, //can and just did inject services into eachother
    private readonly auth: AuthService
  ) {}

  getEmails() {
    return this.rest.get(environment.apiURL + '/emails?userId=' + this.auth.getUserId());
  }
}
