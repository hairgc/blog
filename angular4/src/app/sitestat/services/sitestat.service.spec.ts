import { TestBed, inject } from '@angular/core/testing';

import { SitestatService } from './sitestat.service';

describe('SitestatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SitestatService]
    });
  });

  it('should be created', inject([SitestatService], (service: SitestatService) => {
    expect(service).toBeTruthy();
  }));
});
