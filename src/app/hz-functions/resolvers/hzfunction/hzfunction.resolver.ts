import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { HzFunction } from '../../models/hzfunction';

@Injectable({
  providedIn: 'root'
})
export class HzfunctionResolver implements Resolve<HzFunction> {
  constructor(private http: HttpClient){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<HzFunction> {
    return this.http.get<HzFunction>(`hzfunctions/${route.params['id']}`);
  }
}
