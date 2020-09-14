import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;

    public submitted = false;

    public passwordType: string = 'password';

    public togglePassword = false;

    public rememberMeData = false;

    public constructor(private fb: FormBuilder) {
    // constructor
    }

    public ngOnInit(): void {
        this.createLoginForm();
        this.getStoredData();
    }

    public passwordToggle(): void {
        if (this.togglePassword) {
            this.passwordType = 'password';
        } else {
            this.passwordType = 'text';
        }
        this.togglePassword = !this.togglePassword;
    }

    public rememberMe(value: boolean): void {
        this.rememberMeData = value;
    }

    public login(): void {
        this.submitted = true;
        this.storeData();
    }

    private getStoredData(): void {
        if (localStorage.getItem('remembermestored')) {
            this.rememberMeData = true;
            const decemail = window.atob(localStorage.getItem('usermail'));
            const decpassword = window.atob(localStorage.getItem('userpassword'));
            this.loginForm.get('userEmail').setValue(decemail);
            this.loginForm.get('userPassword').setValue(decpassword);
        }
    }

    private storeData(): void {
        if (this.rememberMeData) {
            const encmail = window.btoa(this.loginForm.get('userEmail').value);
            const encpassword = window.btoa(this.loginForm.get('userPassword').value);

            localStorage.setItem('usermail', encmail);
            localStorage.setItem('userpassword', encpassword);
            localStorage.setItem(
                'remembermestored',
                JSON.stringify(this.rememberMeData),
            );
        } else {
            localStorage.clear();
        }
    }

    private createLoginForm(): void {
        this.loginForm = this.fb.group({
            userEmail: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),
                ]),
            ],
            userPassword: ['', Validators.required],
        });
    }
}
