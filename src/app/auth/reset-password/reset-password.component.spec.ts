import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ResetPasswordComponent } from './reset-password.component';

/* eslint-disable-next-line */
describe('ResetPasswordComponent', (): void => {
    let component: ResetPasswordComponent;
    let fixture: ComponentFixture<ResetPasswordComponent>;

    beforeEach(async((): void => {
        TestBed.configureTestingModule({
            declarations: [ResetPasswordComponent],
            imports: [FormsModule,
                ReactiveFormsModule,
                RouterTestingModule,
                HttpClientTestingModule,
            ],
        }).compileComponents()
            .then((): void => {
                fixture = TestBed.createComponent(ResetPasswordComponent);
                component = fixture.componentInstance;
            });
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(ResetPasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });

    it('form should not be submitted', (): void => {
        expect(component.submitted).toBeFalsy();
    });

    it('password one type should be password', (): void => {
        expect(component.PasswordOneType).toBe('password');
    });

    it('password two type should be password', (): void => {
        expect(component.PasswordTwoType).toBe('password');
    });

    it('password one type should be text', (): void => {
        component.togglePass(1);
        expect(component.PasswordOneType).toBe('text');
    });

    it('password two type should be text', (): void => {
        component.togglePass(2);
        expect(component.PasswordTwoType).toBe('text');
    });

    it('form should be submitted', (): void => {
        component.onSubmit();
        expect(component.submitted).toBeTruthy();
    });

    it('form should be invalid', (): void => {
        component.resetpasswordForm.controls.password.setValue('');
        component.resetpasswordForm.controls.confirmPassword.setValue('');
        expect(component.resetpasswordForm.invalid).toBeTruthy();
    });

    it('password should be min 6 char', (): void => {
        component.resetpasswordForm.controls.password.setValue('john');
        component.resetpasswordForm.controls.confirmPassword.setValue('john');
        component.onSubmit();
        expect(component.resetpasswordForm.invalid).toBeTruthy();
    });

    it('password should not match', (): void => {
        component.resetpasswordForm.controls.password.setValue('1234567');
        component.resetpasswordForm.controls.confirmPassword.setValue('123456');
        component.onSubmit();
        expect(component.resetpasswordForm.invalid).toBeTruthy();
    });

    it('form should be valid', (): void => {
        component.resetpasswordForm.controls.password.setValue('1234567');
        component.resetpasswordForm.controls.confirmPassword.setValue('1234567');
        component.onSubmit();
        expect(component.resetpasswordForm.valid).toBeFalsy();
    });
});
