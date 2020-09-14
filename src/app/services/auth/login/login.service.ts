import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ApiService } from '../../api_base/api.service';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    public constructor(private api: ApiService) {
    // constructor
    }

    public login(payload): Observable<any> {
        return this.api.post('login', payload);
    }
}
