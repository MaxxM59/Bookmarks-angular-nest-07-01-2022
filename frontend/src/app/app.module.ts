import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Apollo
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { HttpClientModule } from '@angular/common/http';
// Components
import { HeaderModule } from './header/header.module';
import { LoginModule } from './auth/login/login.module';
import { SignUpModule } from './auth/sign-up/sign-up.module';
import { HomeModule } from './home/home.module';
import { BookmarkModule } from './bookmarks/bookmark/bookmark.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HeaderModule,
        HttpClientModule,
        // Auth Modules
        LoginModule,
        SignUpModule,
        ApolloModule,
        // Home & Bookmarks modules
        HomeModule,
        BookmarkModule,
    ],
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: (httpLink: HttpLink) => {
                return {
                    cache: new InMemoryCache(),
                    link: httpLink.create({
                        uri: 'api/graphql',
                    }),
                };
            },
            deps: [HttpLink],
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
