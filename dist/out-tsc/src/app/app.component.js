import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ApplicationSession } from './app.session';
var AppComponent = /** @class */ (function () {
    function AppComponent(session) {
        this.session = session;
        this.title = 'yedai';
    }
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ApplicationSession])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map