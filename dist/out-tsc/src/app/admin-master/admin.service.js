import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
        // this.URL = 'http://localhost:2233/nlc';
        this.URL = 'http://103.209.145.24:8098';
        // this.URL = '/nlc';
        this.lookupObject = [];
    }
    AdminService.prototype.getRequest = function (url, headers) {
        return this.http.get(this.URL + url, { headers: headers });
    };
    AdminService.prototype.postRequest = function (url, requestBody, headers) {
        if (headers) {
            return this.http.post(this.URL + url, requestBody, { headers: headers });
        }
        else {
            return this.http.post(this.URL + url, requestBody);
        }
    };
    AdminService.prototype.putRequest = function (url, requestBody, headers) {
        if (headers) {
            return this.http.put(this.URL + url, requestBody, { headers: headers });
        }
        else {
            return this.http.put(this.URL + url, requestBody);
        }
    };
    AdminService.prototype.deleteRequest = function (url, headers) {
        if (headers) {
            return this.http.delete(this.URL + url, { headers: headers });
        }
        else {
            return this.http.delete(this.URL + url);
        }
    };
    AdminService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AdminService);
    return AdminService;
}());
export { AdminService };
//# sourceMappingURL=admin.service.js.map