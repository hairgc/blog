import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitestatComponent } from './sitestat.component';

describe('SitestatComponent', () => {
  let component: SitestatComponent;
  let fixture: ComponentFixture<SitestatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitestatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitestatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
