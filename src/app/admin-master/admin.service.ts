import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AdminService {

    private URL: string;

    constructor(public http: HttpClient) {
        this.URL = 'http://localhost:2233/nlc';
        // this.URL = '/nlc';
    }

    getRequest(url: string, headers?: HttpHeaders): Observable<any> {
        return this.http.get(this.URL + url, { headers: headers });
    }

    postRequest(url: string, requestBody: any, headers?: HttpHeaders): Observable<any> {
        if (headers) {
            return this.http.post(this.URL + url, requestBody, { headers: headers });
        } else {
            return this.http.post(this.URL + url, requestBody);
        }

    }

    putRequest(url: string, requestBody: any, headers?: HttpHeaders): Observable<any> {
        if (headers) {
            return this.http.put(this.URL + url, requestBody, { headers: headers });
        } else {
            return this.http.put(this.URL + url, requestBody);

        }
    }
    deleteRequest(url: string, headers?: HttpHeaders): Observable<any> {
        if (headers) {
            return this.http.delete(this.URL + url, { headers: headers });
        } else {
            return this.http.delete(this.URL + url);

        }
    }
}
