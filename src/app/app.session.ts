import { Injectable } from '../../node_modules/@angular/core';

@Injectable()
export class ApplicationSession {
    isLogged: boolean;
    constructor() {
        this.isLogged = true;
    }
}