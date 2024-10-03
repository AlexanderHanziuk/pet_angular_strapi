import { TestBed } from '@angular/core/testing';

import { HardSkillsService } from './hard-skills.service';

describe('HardSkillsService', () => {
  let service: HardSkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardSkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
