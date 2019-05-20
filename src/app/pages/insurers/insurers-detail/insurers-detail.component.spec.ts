import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurersDetailComponent } from './insurers-detail.component';

describe('InsurersDetailComponent', () => {
  let component: InsurersDetailComponent;
  let fixture: ComponentFixture<InsurersDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsurersDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
