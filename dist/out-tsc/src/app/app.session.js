import * as tslib_1 from "tslib";
import { Injectable } from '../../node_modules/@angular/core';
var ApplicationSession = /** @class */ (function () {
    function ApplicationSession() {
        this.isLogged = true;
        this.apiCall = false;
    }
    ApplicationSession.prototype.showLoader = function () {
        this.apiCall = true;
    };
    ApplicationSession.prototype.hideLoader = function () {
        this.apiCall = false;
    };
    ApplicationSession = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], ApplicationSession);
    return ApplicationSession;
}());
export { ApplicationSession };
//# sourceMappingURL=app.session.js.map