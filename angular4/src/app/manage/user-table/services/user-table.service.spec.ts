import { TestBed, inject } from '@angular/core/testing';

import { UserTableService } from './user-table.service';

describe('UserTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserTableService]
    });
  });

  it('should be created', inject([UserTableService], (service: UserTableService) => {
    expect(service).toBeTruthy();
  }));
});
