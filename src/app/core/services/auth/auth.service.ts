import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): void {
    this.http.post('users/login', {username, password}).subscribe((resp: any) => {
      localStorage.setItem('access_token', resp['token']);
      localStorage.setItem('current_user', JSON.stringify(resp['user']));
      localStorage.setItem('current_project', JSON.stringify(resp['current_project']));
      this.router.navigate(['/']);
    });
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('current_user');
    localStorage.removeItem('current_project');
    this.router.navigate(['/login']);
  }
}
