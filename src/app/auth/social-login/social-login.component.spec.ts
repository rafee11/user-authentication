import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {
    ModalModule,
    CollapseModule,
    // BsDatepickerModule,
    BsDropdownModule,
} from 'ngx-bootstrap';
import { environment } from '../../../environments/environment';
import { SocialLoginComponent } from './social-login.component';

describe('SocialLoginComponent', () => {
    let component: SocialLoginComponent;
    let fixture: ComponentFixture<SocialLoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SocialLoginComponent],
            imports: [
                AngularFireModule.initializeApp(environment.firebase),
                AngularFirestoreModule, // imports firebase/firestore, only needed for database features
                AngularFireAuthModule,
                ModalModule.forRoot(),
                CollapseModule.forRoot(),
                BsDropdownModule.forRoot(),
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SocialLoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
