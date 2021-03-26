import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { User } from './user';

@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }



  public findAll(): Observable<User[]> {
    console.log("find all")
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    console.log("save")
    return this.http.post<User>(this.usersUrl, user);
  }
}