import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  password = new FormControl('', [Validators.required]);

  onLogin(): void {
    if (this.email.value == 'test@nv.com' && this.password.value == 'tested') {
      console.log('successful login')
      // this.router.navigate(["home"])
    } else {
      console.log('unsuccessful login')
    }
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Email address is required';
    }

    return this.email.hasError('email') ? 'Please enter a valid email address' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'Password is required';
    }
    return '';
  }
}
