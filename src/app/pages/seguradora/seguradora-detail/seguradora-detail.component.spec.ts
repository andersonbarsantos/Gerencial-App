import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguradoraDetailComponent } from './seguradora-detail.component';

describe('SeguradoraDetailComponent', () => {
  let component: SeguradoraDetailComponent;
  let fixture: ComponentFixture<SeguradoraDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguradoraDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguradoraDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
