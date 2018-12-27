import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Router, Route, UrlSegment } from '@angular/router';
import { Injectable } from '../../node_modules/@angular/core';
import { ApplicationSession } from './app.session';
import { Observable } from '../../node_modules/rxjs';

@Injectable()
export class LoginSessionGaurd implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<boolean> | Promise<boolean> | boolean {
        return true;
    }

}

@Injectable()
export class LazyGaurd implements CanLoad {
    constructor(public session: ApplicationSession, public router: Router) {
    }
    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        return true;
    }
}