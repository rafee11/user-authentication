import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { LoginService } from './login.service';

describe('LoginService', (): void => {
    let service: LoginService;
    beforeEach((): void => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
        });
        service = TestBed.get(LoginService);
    });

    it('should be created', (): void => {
        expect(service).toBeTruthy();
    });

    it('login should be success', (done: DoneFn): void => {
        service
            .login({
                email: 'olivier@usecology.com',
                password: '1234',
            })
            .subscribe((token): void => {
                done();
                expect(token).toBeTruthy();
            });
    });

    it('login should be Failed', (done: DoneFn): void => {
        service
            .login({
                email: 'olivier@usecology1.com',
                password: '1234',
            })
            .subscribe(
                (): void => {},
                (error): void => {
                    done();
                    expect('Cannot find user').toBe(error);
                },
            );
    });
});
