import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterRequest } from '../register-request';
import { RegisterResponse } from '../register-response';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {

  registerSuccessful: boolean = false;
  registerRequest: RegisterRequest;
  registerResponse: RegisterResponse;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private regService: RegisterService) {
    this.registerRequest = new RegisterRequest();
    this.registerResponse = new RegisterResponse();
  }

  onRegister() {
    this.regService.requestRegister(this.registerRequest)
      .subscribe(data => {
        this.registerResponse = data
      })
    console.log(this.registerResponse)
    if (this.registerResponse.emailAlreadyUsed == false &&
      this.registerResponse.nicknameAlreadyUsed == false &&
      this.registerResponse.nicknameAlreadyUsed == false) {
      console.log("user Registred sucessfully")
    }
  }

}
