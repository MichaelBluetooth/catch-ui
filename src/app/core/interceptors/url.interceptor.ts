import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('access_token');
    if (token) {
      return next.handle(
        request.clone({
          url: 'http://127.0.0.1:5000/api/' + request.url,
          headers: request.headers.set(
            'authorization',
            'Bearer ' + token
          ),
        })
      );
    } else {
      return next.handle(
        request.clone({
          url: 'http://127.0.0.1:5000/api/' + request.url,
        })
      );
    }
  }
}
