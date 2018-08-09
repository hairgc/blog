import { TestBed, inject } from '@angular/core/testing';

import { CommentTableService } from './comment-table.service';

describe('CommentTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentTableService]
    });
  });

  it('should be created', inject([CommentTableService], (service: CommentTableService) => {
    expect(service).toBeTruthy();
  }));
});
