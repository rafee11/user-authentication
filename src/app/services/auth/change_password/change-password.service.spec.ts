import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ChangePasswordService } from './change-password.service';

describe('ChangePasswordService', (): void => {
    let service: ChangePasswordService;
    beforeEach((): void => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
        });
        service = TestBed.get(ChangePasswordService);
    });

    it('should be created', (): void => {
        expect(service).toBeTruthy();
    });

    it('forgot password should be success', (done: DoneFn): void => {
        service
            .forgotPassword({
                email: 'olivier@usecology.com',
            })
            .subscribe((res): void => {
                done();
                expect(res).toBeTruthy();
            });
    });

    it('forgot password should be Failed', (done: DoneFn): void => {
        service
            .forgotPassword({
                email: 'john@usecology.com',
            })
            .subscribe(
                (): void => {},
                (error): void => {
                    done();
                    expect('Email not found').toBe(error.message);
                },
            );
    });

    it('password successfully changed', (done: DoneFn): void => {
        service
            .changePassword({
                currentPassword: '12345678',
                newPassword: '123456789',
                confirmPassword: '123456789',
            })
            .subscribe((res): void => {
                done();
                expect(res).toBeTruthy();
            });
    });

    it('password should not be changed', (done: DoneFn): void => {
        service
            .changePassword({
                currentPassword: '12345678',
                newPassword: '12345678',
                confirmPassword: '123456789',
            })
            .subscribe((): void => {},
                (error): void => {
                    done();
                    expect(error).toBeTruthy();
                });
    });

    it('password successfully reseted', (done: DoneFn): void => {
        service
            .resetPassword({
                password: '123456789',
                confirmPassword: '123456789',
            })
            .subscribe((res): void => {
                done();
                expect(res).toBeTruthy();
            });
    });

    it('password should not be changed', (done: DoneFn): void => {
        service
            .resetPassword({
                password: '12345678',
                confirmPassword: '123456789',
            })
            .subscribe((): void => {},
                (error): void => {
                    done();
                    expect(error).toBeTruthy();
                });
    });
});
