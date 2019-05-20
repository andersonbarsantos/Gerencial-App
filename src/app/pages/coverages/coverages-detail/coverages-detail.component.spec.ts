import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoveragesDetailComponent } from './coverages-detail.component';

describe('CoveragesDetailComponent', () => {
  let component: CoveragesDetailComponent;
  let fixture: ComponentFixture<CoveragesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoveragesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoveragesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
