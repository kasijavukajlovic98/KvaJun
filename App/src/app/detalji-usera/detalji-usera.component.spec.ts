import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaljiUseraComponent } from './detalji-usera.component';

describe('DetaljiUseraComponent', () => {
  let component: DetaljiUseraComponent;
  let fixture: ComponentFixture<DetaljiUseraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaljiUseraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaljiUseraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
