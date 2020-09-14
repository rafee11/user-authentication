import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './user.service';

describe('UserService', () => {
    let service: UserService;
    const randomId = {
        rnum: Math.random() * (1000000000 - 10000) + 10000,
    };
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
        });
        service = TestBed.inject(UserService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('User list should be exists', (done: DoneFn): void => {
        service
            .usersList({})
            .subscribe((res): void => {
                done();
                expect(res.length).toBeTruthy();
            });
    });

    it('User view details should be exist', (done: DoneFn): void => {
        service
            .userDetails({}, 1123555)
            .subscribe((res): void => {
                done();
                expect(res).toBeTruthy();
            });
    });

    it('User view details should not be exist', (done: DoneFn): void => {
        service
            .userDetails({}, 123445)
            .subscribe((): void => {},
                (error): void => {
                    done();
                    expect(error).toBeTruthy();
                });
    });

    it('User create should be success', (done: DoneFn): void => {
        service
            .addUser(
                {
                    id: randomId.rnum,
                    firstName: 'name',
                    lastName: 'name1',
                    email: 'email@gmail.com',
                    phoneNumber: '9786787759',
                    dob: '2309-02-01',
                    country: 'india',
                    pincode: '687876',
                    gender: 'male',
                    address1: 'address1',
                    address2: 'address2',
                    city: 'city',
                    state: 'state',
                    hobbies: 'hobbie',
                    bio: 'bio',
                },
            )
            .subscribe((res): void => {
                done();
                expect(res).toBeTruthy();
            });
    });
    it('User update should be success', (done: DoneFn): void => {
        service
            .updateUser(
                {
                    id: 2,
                    firstName: 'name',
                    lastName: 'name1',
                    email: 'email@gmail.com',
                    phoneNumber: '9786787759',
                    dob: '2309-02-01',
                    country: 'india',
                    pincode: '687876',
                    gender: 'male',
                    address1: 'address1',
                    address2: 'address2',
                    city: 'city',
                    state: 'state',
                    hobbies: 'hobbie',
                    bio: 'bio',
                }, 2,
            )
            .subscribe((res): void => {
                done();
                expect(res).toBeTruthy();
            });
    });
});
