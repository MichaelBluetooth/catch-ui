import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HzFunction } from '../models/hzfunction';

@Injectable({ providedIn: 'root' })
export class HzFunctionsService {
  constructor(private http: HttpClient, private router: Router) {}

  create(fn: HzFunction) {
    this.http
      .post<HzFunction>('hzfunctions', fn)
      .subscribe((resp: HzFunction) => {
        this.router.navigate(['/hzfunctions', resp.id]);
      });
  }

  update(id: number, fn: HzFunction) {
    this.http
      .put<HzFunction>(`hzfunctions/${id}`, fn)
      .subscribe((resp: HzFunction) => {
        this.router.navigate(['/hzfunctions', resp.id]);
      });
  }
}
