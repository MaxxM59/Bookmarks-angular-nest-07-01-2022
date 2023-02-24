import { Component, OnInit } from '@angular/core';
import { CreateUserGQL, CreateUserInput } from 'src/generated-types';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { concatMap, tap } from 'rxjs';
@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
    constructor(
        private readonly createUserGql: CreateUserGQL,
        private readonly loginService: LoginService,
        private readonly router: Router
    ) {}

    ngOnInit(): void {}
    signUp(createUserData: CreateUserInput) {
        this.createUserGql
            .mutate({ createUserData })
            .pipe(
                concatMap(() => {
                    return this.loginService.login(createUserData);
                })
            )
            .subscribe(() => {
                this.router.navigate(['/']);
            });
    }
}
