import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniverzalnaComponent } from './univerzalna.component';

describe('UniverzalnaComponent', () => {
  let component: UniverzalnaComponent;
  let fixture: ComponentFixture<UniverzalnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniverzalnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniverzalnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
