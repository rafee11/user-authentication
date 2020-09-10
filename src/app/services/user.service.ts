import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api_base/api.service';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private api: ApiService) { }

    public usersList(payload): Observable<any> {
        return this.api.get('user', payload);
    }

    public deleteUser(payload, id): Observable<any> {
        return this.api.delete(`user/${id}`, payload);
    }

    public userDetails(payload, id): Observable<any> {
        return this.api.get(`user/${id}`, payload);
    }

    public updateUser(payload, id): Observable<any> {
        return this.api.put(`user/${id}`, payload);
    }

    public addUser(payload): Observable<any> {
        return this.api.post('user', payload);
    }
}
