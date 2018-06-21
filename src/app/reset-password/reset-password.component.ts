import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ResetPasswordService } from './reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;

  newPasswordVisible = true;
  repeatPasswordVisible = true;

  constructor(private route: ActivatedRoute, private resetPasswordService: ResetPasswordService) { }

  isPasswordsMatch() {
    return (this.resetPasswordForm.value.newPassword === this.resetPasswordForm.value.repeatPassword);
  }

  onSubmit() {
    const newPassword = this.resetPasswordForm.value.newPassword;
    const repeatPassword = this.resetPasswordForm.value.repeatPassword;
    const token = this.route.snapshot.paramMap.get('token');
    this.resetPasswordService.changePassword(newPassword, repeatPassword, token)
      .subscribe();
  }

  ngOnInit() {
    this.resetPasswordForm = new FormGroup({
      newPassword: new FormControl(null, Validators.required),
      repeatPassword: new FormControl(null, Validators.required)
    });
  }

}
