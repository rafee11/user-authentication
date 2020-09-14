import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../api_base/api.service';

@Injectable({
    providedIn: 'root',
})
export class ChangePasswordService {
    public constructor(private api: ApiService) {
        // constructor
    }

    public forgotPassword(payload): Observable<any> {
        return this.api.post('auth/forgot-password', payload);
    }

    public changePassword(payload): Observable<any> {
        return this.api.post('auth/change-password', payload);
    }

    public resetPassword(payload): Observable<any> {
        return this.api.post('auth/reset-password', payload);
    }
}
