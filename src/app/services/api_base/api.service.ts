import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    public constructor(private http: HttpClient) {
    // constructor
    }

    public get(
        path: string,
        params: HttpParams = new HttpParams(),
    ): Observable<any> {
        return this.http
            .get(`${environment.apiBaseUrl}${path}`, { params })
            .pipe(catchError(this.formatErrors));
    }

    public post(path: string, body: any): Observable<any> {
        return this.http
            .post(`${environment.apiBaseUrl}${path}`, body)
            .pipe(catchError(this.formatErrors));
    }

    public put(path: string, body: any): Observable<any> {
        return this.http
            .put(`${environment.apiBaseUrl}${path}`, body)
            .pipe(catchError(this.formatErrors));
    }

    public delete(path, body: any): Observable<any> {
        return this.http
            .delete(`${environment.apiBaseUrl}${path}`, body)
            .pipe(catchError(this.formatErrors));
    }

    private formatErrors(error: any): any {
        return throwError(error.error);
    }
}
