import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequest } from './register-request';


@Injectable()
export class RegisterService {

  private userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8080/register';
  }

  public requestRegister(registerReq: RegisterRequest) {
    console.log(registerReq.email + ' ' + registerReq.nickname)
    
    return this.http.post<RegisterRequest>(this.userUrl, registerReq)
    .subscribe(
      data => { console.log("POST Request is successful ", data); },
      error => { console.log("Error", error); }
    )
  }


}
