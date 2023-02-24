import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth-guard';
import { BookmarkComponent } from './bookmarks/bookmark/bookmark.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'signup',
        component: SignUpComponent,
    },
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'bookmarks/:id',
        component: BookmarkComponent,
        canActivate: [AuthGuard],
    },
    {
        path: '**',
        redirectTo: '',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
