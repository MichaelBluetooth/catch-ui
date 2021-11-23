import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.less'],
})
export class ChangePasswordComponent implements OnInit {
  @Input() user: any;

  passwordForm = new FormGroup(
    {
      newPassword: new FormControl('', [Validators.required, Validators.minLength(6), , Validators.pattern('.*[0-9].*')]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('.*[0-9].*')]),
    },
    [this.matchPassword]
  );

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  matchPassword(control: AbstractControl): ValidationErrors | null {
    const password = control.get('newPassword').value;
    const confirm = control.get('confirmPassword').value;
    if (password != confirm) {
      return { noMatch: true };
    }
    return null;
  }

  submit(){
    this.userService.updatePassword(this.user.id, this.passwordForm.value.newPassword)
  }
}
