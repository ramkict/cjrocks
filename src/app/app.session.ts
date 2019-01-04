import { Injectable } from '../../node_modules/@angular/core';

@Injectable()
export class ApplicationSession {
    isLogged: boolean;
    apiCall: boolean;
    constructor() {
        this.isLogged = true;
        this.apiCall = false;
    }

    showLoader() {
        this.apiCall = true;
    }

    hideLoader() {
        this.apiCall = false;
    }
}