import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GebruikerpaginaComponent } from './gebruikerpagina.component';

describe('GebruikerpaginaComponent', () => {
  let component: GebruikerpaginaComponent;
  let fixture: ComponentFixture<GebruikerpaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GebruikerpaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GebruikerpaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
