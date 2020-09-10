import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
    providedIn: 'root',
})
export class SocialAuthService {
    constructor(public afAuth: AngularFireAuth) {}

    async doFacebookLogin() {
        return await this.afAuth.signInWithPopup(new auth.FacebookAuthProvider());
    }

    async doGoogleLogin() {
        return await this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
    }

    async doTwitterLogin() {
        return await this.afAuth.signInWithPopup(new auth.TwitterAuthProvider());
    }
}
