import { TestBed } from '@angular/core/testing';

import { Api1Service } from './api1.service';

describe('Api1Service', () => {
  let service: Api1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Api1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
