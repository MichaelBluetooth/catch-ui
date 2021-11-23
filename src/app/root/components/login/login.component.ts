import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rememberMe: new FormControl(false),
  });

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  login() {
    if (this.loginForm.valid) {
      this.auth.login(
        this.loginForm.controls['username'].value,
        this.loginForm.controls['password'].value
      );
    }
  }
}
