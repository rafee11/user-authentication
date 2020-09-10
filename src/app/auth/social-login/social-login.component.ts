import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs-compat';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SocialAuthService } from '../../services/index';


@Component({
    selector: 'app-social-login',
    templateUrl: './social-login.component.html',
})
export class SocialLoginComponent implements OnInit {
    modalRef: BsModalRef;

    userDetails: any = {};

    constructor(private service: SocialAuthService, private modalService: BsModalService) { }

    ngOnInit() {}

    tryFacebookLogin(template) {
        this.service.doFacebookLogin()
            .then((res) => {
                console.log(res);
                this.viewUserDetails(res, template);
            }, (err) => {
                console.log(err);
            });
    }

    tryTwitterLogin(template) {
        this.service.doTwitterLogin()
            .then((res) => {
                console.log(res);
                this.viewUserDetails(res, template);
            }, (err) => {
                console.log(err);
            });
    }

    tryGoogleLogin(template) {
        this.service.doGoogleLogin()
            .then((res) => {
                console.log(res);
                this.viewUserDetails(res, template);
            }, (err) => {
                console.log(err);
            });
    }

    viewUserDetails(data, template) {
        this.userDetails = '';
        this.modalRef = this.modalService.show(
            template,
            { class: 'modal-xl' },
        );
        this.userDetails = data;
    }
}
