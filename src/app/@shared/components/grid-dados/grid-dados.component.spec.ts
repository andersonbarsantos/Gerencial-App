import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDadosComponent } from './grid-dados.component';

describe('GridDadosComponent', () => {
  let component: GridDadosComponent;
  let fixture: ComponentFixture<GridDadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridDadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
