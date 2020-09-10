import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginComponent } from './login.component';

describe('LoginComponent', (): void => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let de: DebugElement;
    beforeEach(async((): void => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [FormsModule, ReactiveFormsModule],
        })
            .compileComponents()
            .then((): void => {
                fixture = TestBed.createComponent(LoginComponent);
                component = fixture.componentInstance;
                de = fixture.debugElement.query(By.css('form'));
            });
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(LoginComponent);
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
        component.login();
        expect(component.submitted).toBeTruthy();
    });

    it('input type should be text', (): void => {
        component.passwordToggle();
        expect(component.passwordType).toBe('text');
    });

    it('input type should be password', (): void => {
        component.passwordToggle();
        component.passwordToggle();
        expect(component.passwordType).toBe('password');
    });

    it('form should be invalid', (): void => {
        component.loginForm.controls.userEmail.setValue('');
        component.loginForm.controls.userPassword.setValue('');
        expect(component.loginForm.invalid).toBeTruthy();
    });

    it('form email should be invalid', (): void => {
        component.loginForm.controls.userEmail.setValue('john');
        component.loginForm.controls.userPassword.setValue('12345');
        expect(component.loginForm.invalid).toBeTruthy();
    });

    it('form should be valid', (): void => {
        component.loginForm.controls.userEmail.setValue('john@gmail.com');
        component.loginForm.controls.userPassword.setValue('12345');
        expect(component.loginForm.invalid).toBeFalsy();
    });

    it('should click change value', (): void => {
        const input = de.query(By.css('#rememberMe')).nativeElement;
        expect(input.checked).toBeFalsy();
        input.click();
        fixture.detectChanges();
        expect(input.checked).toBeTruthy();
    });
});
