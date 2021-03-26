import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequest } from './register-request';
import { Observable } from 'rxjs';
import { RegisterResponse } from './register-response';
import { Pipe, PipeTransform } from '@angular/core';

@Injectable()
export class RegisterService {



  private userUrl: string;
  public registerResponse: RegisterResponse;

  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8080/register';
    this.registerResponse = new RegisterResponse();
  }

  // public requestRegister(registerReq: RegisterRequest) {

  //   let options = {
  //     headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  //   };

  //   console.log(registerReq.email + ' ' + registerReq.nickname)

  //   return this.http.post<RegisterRequest>(this.userUrl, registerReq)
  //     .subscribe()
  // }


  public async requestRegister(registerReq: RegisterRequest): Observable<RegisterResponse> {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response' as 'response'
    };
    console.log(registerReq.email + ' ' + registerReq.nickname)

    // return this.http.post<RegisterResponse>(this.userUrl, registerReq)
    //   .toPromise()
    //   .then(res => {
    //     result = res;
    //     console.log(" Got RegisterRespons " + JSON.stringify(res))
    //   })

    return this.http.post<RegisterResponse>(this.userUrl, registerReq)
    //console.log(result)

    // if (result.emailAlreadyUsed == false &&
    //   result.nicknameAlreadyUsed == false &&
    //   result.nicknameAlreadyUsed == false) {
    //   console.log("user Registred sucessfully")
    // }
    //return result
  }






}
