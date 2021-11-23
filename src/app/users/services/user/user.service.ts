import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  update(user: any): void {
    this.http.put('users/profile', user).subscribe(() => {
      this.router.navigate(['/users', 'profile'], {});
    });
  }

  updatePassword(userId: number, newPassword: string): void {
    this.http
      .post('users/' + userId + '/reset_password', { new_password: newPassword })
      .subscribe(() => {
        this.router.navigate(['/users', 'profile']);
      });
  }
}
