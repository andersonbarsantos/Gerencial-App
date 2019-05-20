import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDadosComponent } from './card-dados.component';

describe('CardDadosComponent', () => {
  let component: CardDadosComponent;
  let fixture: ComponentFixture<CardDadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
