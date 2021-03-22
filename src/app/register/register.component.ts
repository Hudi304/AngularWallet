import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterRequest } from '../register-request';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {

  registerRequest: RegisterRequest;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private regService: RegisterService) {
    this.registerRequest = new RegisterRequest();
  }

  onRegister() {
    this.registerRequest.email = "dasdsa"
    this.registerRequest.nickname = "dasdas"
    this.registerRequest.password = "312321"
    this.regService.requestRegister(this.registerRequest)
  }

}
