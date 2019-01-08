import * as tslib_1 from "tslib";
import { Router } from '@angular/router';
import { Injectable } from '../../node_modules/@angular/core';
import { ApplicationSession } from './app.session';
var LoginSessionGaurd = /** @class */ (function () {
    function LoginSessionGaurd() {
    }
    LoginSessionGaurd.prototype.canActivate = function (route, state) {
        return true;
    };
    LoginSessionGaurd = tslib_1.__decorate([
        Injectable()
    ], LoginSessionGaurd);
    return LoginSessionGaurd;
}());
export { LoginSessionGaurd };
var LazyGaurd = /** @class */ (function () {
    function LazyGaurd(session, router) {
        this.session = session;
        this.router = router;
    }
    LazyGaurd.prototype.canLoad = function (route, segments) {
        return true;
    };
    LazyGaurd = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [ApplicationSession, Router])
    ], LazyGaurd);
    return LazyGaurd;
}());
export { LazyGaurd };
//# sourceMappingURL=auth.gaurd.js.map