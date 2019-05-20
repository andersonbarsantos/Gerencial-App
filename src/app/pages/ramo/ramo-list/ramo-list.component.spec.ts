import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RamoListComponent } from './ramo-list.component';

describe('RamoListComponent', () => {
  let component: RamoListComponent;
  let fixture: ComponentFixture<RamoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RamoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
