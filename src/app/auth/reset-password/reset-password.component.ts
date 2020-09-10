import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChangePasswordService } from '../../services/auth/change_password/change-password.service';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
    public togglePasswordOne = true;

    public PasswordOneType = 'password';

    public togglePasswordTwo = true;

    public PasswordTwoType = 'password';

    public resetpasswordForm: FormGroup;

    public submitted = false;

    public constructor(public router: Router,
        private formBuilder: FormBuilder,
        private api: ChangePasswordService) {
    // constructor
    }

    public ngOnInit(): void {
        this.resetpasswordForm = this.formBuilder.group(
            {
                password: [
                    '',
                    [
                        Validators.required,
                        Validators.minLength(6),
                        /* eslint-disable-next-line */
                Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]],
                confirmPassword: ['', Validators.required],
            },
            {
                validator: this.MustMatch('password', 'confirmPassword'),
            },
        );
    }

    public onSubmit(): void {
        this.submitted = true;
        if (this.resetpasswordForm.invalid) {
            return;
        }

        const payload: any = this.resetpasswordForm.value;
        this.api.changePassword(payload).subscribe((): void => {
            this.router.navigate(['/login']);
        });
    }

    public togglePass(id): void {
        if (id === 1) {
            this.togglePasswordOne = !this.togglePasswordOne;

            if (this.togglePasswordOne === true) {
                this.PasswordOneType = 'password';
            } else {
                this.PasswordOneType = 'text';
            }
        } else {
            this.togglePasswordTwo = !this.togglePasswordTwo;

            if (this.togglePasswordTwo === true) {
                this.PasswordTwoType = 'password';
            } else {
                this.PasswordTwoType = 'text';
            }
        }
    }

    private MustMatch(controlName: string, matchingControlName: string): any {
        return (formGroup: FormGroup): any => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                return;
            }
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            } else {
                matchingControl.setErrors(null);
            }
        };
    }
}
