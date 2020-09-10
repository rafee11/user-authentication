import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './api.service';

describe('ApiService', (): void => {
    beforeEach((): void => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
        });
    });

    it('should be created', (): void => {
        const service: ApiService = TestBed.get(ApiService);
        expect(service).toBeTruthy();
    });
});
