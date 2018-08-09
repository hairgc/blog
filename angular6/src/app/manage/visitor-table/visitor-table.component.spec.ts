import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorTableComponent } from './visitor-table.component';

describe('VisitorTableComponent', () => {
  let component: VisitorTableComponent;
  let fixture: ComponentFixture<VisitorTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
