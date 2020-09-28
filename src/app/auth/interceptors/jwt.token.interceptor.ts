import { Injectable } from '@angular/core';

import {HttpHandler, HttpRequest, HttpEvent, HttpInterceptor, HttpErrorResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";
import { AuthService } from 'src/app/service/authentication.service';

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let interceptedRequest = request.clone({
      setHeaders: {
        Authorization: `${this.auth.getToken()}`
      }
    });

    return next.handle(interceptedRequest).pipe(catchError(x => this.handleErrors(x)));
  }

  private handleErrors(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401) {
      this.auth.redirectToUrl = this.router.url;
      this.router.navigate(['/login']);
      return of(err.message);
    }
  }
}