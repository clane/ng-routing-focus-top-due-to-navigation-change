import { TestBed, inject } from '@angular/core/testing';

import { RoutingSignalService } from './routing-signal.service';

describe('RoutingSignalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutingSignalService]
    });
  });

  it('should be created', inject([RoutingSignalService], (service: RoutingSignalService) => {
    expect(service).toBeTruthy();
  }));
});
