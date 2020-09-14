import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangePasswordService } from '../../services/auth/change_password/change-password.service';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
    public forgotpasswordForm: FormGroup;

    public submitted = false;

    public constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private api: ChangePasswordService,
    ) {
    // constructor
    }

    public ngOnInit(): void {
        this.forgotpasswordForm = this.formBuilder.group({
            email: [
                '',
                [
                    Validators.required,
                    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
        });
    }

    public onSubmit(): void {
        this.submitted = true;
        if (this.forgotpasswordForm.invalid) {
            return;
        }
        this.router.navigate(['/reset-password']);
        const email = this.forgotpasswordForm.controls.email.value;
        this.api.forgotPassword({ email }).subscribe((): void => {
            this.router.navigate(['/reset-password']);
        });
    }
}
