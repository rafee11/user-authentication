import { AbstractControl } from '@angular/forms';

export class ConfirmPasswordValidator {
    public static MatchPassword(control: AbstractControl): void {
        const password = control.get('newPassword').value;
        const confirmPassword = control.get('confirmPassword').value;
        if (password !== confirmPassword) {
            control.get('confirmPassword').setErrors({ ConfirmPassword: true });
        }
    }
}
