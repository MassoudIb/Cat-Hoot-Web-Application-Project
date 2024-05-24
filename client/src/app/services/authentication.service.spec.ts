import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
    let service: AuthenticationService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AuthenticationService],
        });
        service = TestBed.inject(AuthenticationService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('verifyPassword() should return true for correct password', () => {
        const mockPassword = 'correctPassword';
        const mockResponse = true;

        service.verifyPassword(mockPassword).subscribe((response) => {
            expect(response).toBe(true);
        });

        const req = httpMock.expectOne('http://ec2-35-183-205-174.ca-central-1.compute.amazonaws.com:3000/api/auth/verifyPassword');
        expect(req.request.method).toBe('POST');
        req.flush(mockResponse);
    });

    it('verifyPassword() should return false for incorrect password', () => {
        const mockPassword = 'wrongPassword';
        const mockResponse = false;

        service.verifyPassword(mockPassword).subscribe((response) => {
            expect(response).toBe(false);
        });

        const req = httpMock.expectOne('http://ec2-35-183-205-174.ca-central-1.compute.amazonaws.com:3000/api/auth/verifyPassword');
        expect(req.request.method).toBe('POST');
        req.flush(mockResponse);
    });
});
