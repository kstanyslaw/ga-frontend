import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from '../../../user.model';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  passwordVisible = true;

  messages = {
      default: {message: '', alertClass: 'form-text text-muted', formClass: '', valid: false},
      // tslint:disable-next-line:max-line-length
      emailIsTaken: {message: 'Нет зарегистрированных пользователей с такой электронной почтой.', alertClass: 'alert alert-danger', formClass: 'danger', valid: false},
      // tslint:disable-next-line:max-line-length
      invalidEmail: {message: 'Проверьте, правильно ли введен адрес электронной почты.', alertClass: 'alert alert-warning', formClass: 'warning', valid: false},
  };

  emailCheck = this.messages.default;

  constructor (private authenticationService: AuthenticationService) { }

  onSubmit() {
      const user = new User(
        this.loginForm.value.email,
        this.loginForm.value.password
      );
      this.authenticationService.login(user)
          .subscribe(
              data => {
                localStorage.setItem('token', data.token);
                localStorage.setItem('userId', data.userId);
                localStorage.setItem('userRole', data.userRole);
                this.authenticationService.isShow = false;
              },
              error => console.error(error)
          );
      this.loginForm.reset();
  }

  onCheckEmail() {
      // Is email occupied
      this.authenticationService.checkEmailFree(this.loginForm.value.email).subscribe(
          data => {
              switch (true) {
                  case !this.authenticationService.checkEmailValid(this.loginForm.value.email):
                      this.emailCheck = this.messages.invalidEmail;
                      break;
                case !data['result']:
                      this.emailCheck = this.messages.emailIsTaken;
                      break;
                  default:
                      this.emailCheck = this.messages.default;
                      this.emailCheck.valid = true;
              }
          },
          error => console.error(error)
      );
  }

  onResetPasswd() {
      this.authenticationService.resetPasswd()
        .subscribe();
  }

  ngOnInit() {
      this.loginForm = new FormGroup({
          email: new FormControl(null, Validators.required),
          password: new FormControl(null, Validators.required)
      });
  }
}
