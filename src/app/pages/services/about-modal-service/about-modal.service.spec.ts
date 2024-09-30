import { TestBed } from '@angular/core/testing';

import { AboutModalService } from './about-modal.service';

describe('AboutModalService', () => {
  let service: AboutModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
