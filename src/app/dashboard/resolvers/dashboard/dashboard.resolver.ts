import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserSummary } from '../../models/user-summary';

@Injectable({
  providedIn: 'root'
})
export class DashboardResolver implements Resolve<UserSummary> {
  constructor(private http: HttpClient){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserSummary> {
    return this.http.get<UserSummary>('projects/current');
  }
}
