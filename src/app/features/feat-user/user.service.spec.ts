import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

import { UserCommand, UserService } from './user.service';
import { HttpClient } from '@angular/common/http';

export type Spied<T> = {
  [Method in keyof T]: jasmine.Spy;
};

fdescribe('UserService', () => {
  // let service: UserService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let serviceSpy: UserService;
  // let spyLoad: Spied<UserService>['load'];

  beforeEach(() => {

    serviceSpy = jasmine.createSpyObj('UserService', ['load']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

  });

  it('should make an http GET request on creation ', async () => {
    const httpClient = TestBed.inject(HttpClient);
    const httpTestingController = TestBed.inject(HttpTestingController);

    const serviceSpy = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
    // const spyLoadAfterCreation = spyOn(UserService.prototype, 'load');

    const req = httpTestingController.expectOne('http://localhost:5050/users');
    expect(req.request.method).toEqual('GET');

  });


  it('should make an http GET request on "process" method call', () => {
    const httpClient = TestBed.inject(HttpClient);
    const httpTestingController = TestBed.inject(HttpTestingController);

    const serviceSpy = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;


    const reqs = httpTestingController.match('http://localhost:5050/users');
    serviceSpy.process({ type: UserCommand.LOAD_REQUEST, payload: null });
    console.log(reqs)
    expect((reqs[reqs.length -1] as TestRequest).request.method).toBe('GET');
  });



});
