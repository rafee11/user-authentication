import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// Plugins
import {
    ModalModule,
    CollapseModule,
    // BsDatepickerModule,
    BsDropdownModule,
} from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Services
import {
    ApiService,
    LoginService,
    ChangePasswordService,
    UserService,
    SocialAuthService,
} from './services/index';

// Page Components
import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { SocialLoginComponent } from './auth/social-login/social-login.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
        SocialLoginComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        BrowserAnimationsModule,
        CollapseModule.forRoot(),
        // BsDatepickerModule.forRoot(),
        BsDropdownModule.forRoot(),
        ToastrModule.forRoot(),
        NgxPaginationModule,
        HttpClientModule,
        // Firebase
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireAuthModule,
    ],
    providers: [
        ApiService,
        LoginService,
        ChangePasswordService,
        UserService,
        SocialAuthService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
