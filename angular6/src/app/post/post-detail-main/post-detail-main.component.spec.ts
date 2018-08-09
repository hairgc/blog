import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailMainComponent } from './post-detail-main.component';

describe('PostDetailMainComponent', () => {
  let component: PostDetailMainComponent;
  let fixture: ComponentFixture<PostDetailMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
