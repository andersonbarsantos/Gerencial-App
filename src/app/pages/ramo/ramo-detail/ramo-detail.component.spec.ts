import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RamoDetailComponent } from './ramo-detail.component';

describe('RamoDetailComponent', () => {
  let component: RamoDetailComponent;
  let fixture: ComponentFixture<RamoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RamoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
