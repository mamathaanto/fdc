import { TestBed } from '@angular/core/testing';

import { AddcartapiService } from './addcartapi.service';

describe('AddcartapiService', () => {
  let service: AddcartapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddcartapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
