import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ForgotPasswordComponent } from './forgot-password.component';

describe('ForgotPasswordComponent', (): void => {
    let component: ForgotPasswordComponent;
    let fixture: ComponentFixture<ForgotPasswordComponent>;
    beforeEach(async((): void => {
        TestBed.configureTestingModule({
            declarations: [ForgotPasswordComponent],
            imports: [FormsModule, ReactiveFormsModule,
                RouterTestingModule, HttpClientTestingModule],
        }).compileComponents()
            .then((): void => {
                fixture = TestBed.createComponent(ForgotPasswordComponent);
                component = fixture.componentInstance;
            });
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(ForgotPasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });

    it('form should not be submitted', (): void => {
        expect(component.submitted).toBeFalsy();
    });

    it('form should be submitted', (): void => {
        component.onSubmit();
        expect(component.submitted).toBeTruthy();
    });

    it('form should be invalid', (): void => {
        component.forgotpasswordForm.controls.email.setValue('');
        expect(component.forgotpasswordForm.invalid).toBeTruthy();
    });

    it('form email should be invalid', (): void => {
        component.forgotpasswordForm.controls.email.setValue('john');
        component.onSubmit();
        expect(component.forgotpasswordForm.invalid).toBeTruthy();
    });

    it('form should be valid', (): void => {
        component.forgotpasswordForm.controls.email.setValue('john@gmail.com');
        component.onSubmit();
        expect(component.forgotpasswordForm.invalid).toBeFalsy();
    });
});
