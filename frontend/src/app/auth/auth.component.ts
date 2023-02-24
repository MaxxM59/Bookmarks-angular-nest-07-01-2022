import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
    @Output() onSubmitEvent = new EventEmitter<any>();
    @Input() submitLabel!: string;
    @Input() formSwitch!: string;
    @Input() formLink!: string;
    // User login/signup form

    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
    ]);

    constructor() {}

    ngOnInit(): void {}

    getEmailErrorMessage() {
        if (this.email.hasError('required')) {
            return 'You must enter a value !';
        }
        return this.email.hasError('email')
            ? 'This is not a valid email, my friend ..'
            : '';
    }

    getPasswordErrorMessage() {
        if (this.password.hasError('required')) {
            return 'You must enter a value !';
        }
        if (this.password.hasError('minlength')) {
            return 'Password is too short !';
        }
        if (this.password.hasError('maxlength')) {
            return 'Will you really remember a password this long ? !';
        }
        return '';
    }
    onSubmit() {
        this.onSubmitEvent.emit({
            email: this.email.value,
            password: this.password.value,
        });
    }
}
