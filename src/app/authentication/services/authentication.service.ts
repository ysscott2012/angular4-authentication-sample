import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// import user class
import { User } from '../../models/user';

// Services
import { HttpService } from '../../services/http.service';

@Injectable()
export class AuthenticationService {

  URL_USER_SIGNUP = environment.SERVER_URL + '/auth/signup';
  URL_USER_LOGIN = environment.SERVER_URL + '/auth/login';

  /**
   * Contructor.
   * @param http
   */
  constructor(
    private http: HttpService
  ) { }

  /**
   * register a new user.
   * @param user
   */
  signup(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.URL_USER_SIGNUP, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  /**
   * login.
   * @param user
   */
  login(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.URL_USER_LOGIN, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

}
