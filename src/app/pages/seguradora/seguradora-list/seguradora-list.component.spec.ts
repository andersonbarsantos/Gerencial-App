import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguradoraListComponent } from './seguradora-list.component';

describe('SeguradoraListComponent', () => {
  let component: SeguradoraListComponent;
  let fixture: ComponentFixture<SeguradoraListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguradoraListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguradoraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
