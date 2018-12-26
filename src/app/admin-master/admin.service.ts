import { Injectable } from '../../../node_modules/@angular/core';
import { Http, Headers } from '../../../node_modules/@angular/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class AdminService {

    private URL: string; 

    constructor(public http: Http) {
        this.URL = '';
    }

    getRequest(url: string, headers?: Headers): Observable<any> {
        return this.http.get(this.URL + url, { headers: headers });
    }

    postRequest(url: string, requestBody: any, headers?: Headers): Observable<any> {
        if (headers) {
            return this.http.post(this.URL + url, requestBody, { headers: headers });
        } else {
            return this.http.post(this.URL + url, requestBody);
        }

    }

    putRequest(url: string, requestBody: any, headers?: Headers): Observable<any> {
        if (headers) {
            return this.http.post(this.URL + url, requestBody, { headers: headers });
        } else {
            return this.http.post(this.URL + url, requestBody);

        }

    }
}