import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from './login-request';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

  private userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8080/login';
  }

  public requestLoginFromServer(loginReq: LoginRequest) {
    return this.http.post<LoginRequest>(this.userUrl, loginReq);
  }

  // public loginRespones(): {

  // }


}


