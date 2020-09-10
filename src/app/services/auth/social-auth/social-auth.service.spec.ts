import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../../../../environments/environment';

import { SocialAuthService } from './social-auth.service';

describe('SocialAuthService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            AngularFireModule.initializeApp(environment.firebase),
            AngularFirestoreModule, // imports firebase/firestore, only needed for database features
            AngularFireAuthModule,
        ],
    }));

    it('should be created', () => {
        const service: SocialAuthService = TestBed.get(SocialAuthService);
        expect(service).toBeTruthy();
    });
});
