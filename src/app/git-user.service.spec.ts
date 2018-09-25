import { TestBed, inject } from '@angular/core/testing';

import { GitUserService } from './git-user.service';

describe('GitUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitUserService]
    });
  });

  it('should be created', inject([GitUserService], (service: GitUserService) => {
    expect(service).toBeTruthy();
  }));
});
