import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurersListComponent } from './insurers-list.component';

describe('InsurersListComponent', () => {
  let component: InsurersListComponent;
  let fixture: ComponentFixture<InsurersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsurersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
