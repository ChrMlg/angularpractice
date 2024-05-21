import { TestBed } from '@angular/core/testing';

import { MockHeroServiceService } from './mock-hero-service.service';

describe('MockHeroServiceService', () => {
  let service: MockHeroServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockHeroServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
