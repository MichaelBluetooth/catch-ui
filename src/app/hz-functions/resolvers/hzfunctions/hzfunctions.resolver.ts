import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { EntityCollection } from 'src/app/core/models/entity-collection';
import { HzFunction } from '../../models/hzfunction';

@Injectable({
  providedIn: 'root',
})
export class HzfunctionsResolver implements Resolve<EntityCollection<HzFunction>> {
  constructor(private http: HttpClient) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<EntityCollection<HzFunction>> {
    return this.http.get<EntityCollection<HzFunction>>('hzfunctions');
  }
}
