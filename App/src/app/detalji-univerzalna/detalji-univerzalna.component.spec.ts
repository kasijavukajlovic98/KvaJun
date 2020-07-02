import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaljiUniverzalnaComponent } from './detalji-univerzalna.component';

describe('DetaljiUniverzalnaComponent', () => {
  let component: DetaljiUniverzalnaComponent;
  let fixture: ComponentFixture<DetaljiUniverzalnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaljiUniverzalnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaljiUniverzalnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
