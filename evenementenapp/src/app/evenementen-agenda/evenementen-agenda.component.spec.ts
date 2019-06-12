import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementenAgendaComponent } from './evenementen-agenda.component';

describe('EvenementenAgendaComponent', () => {
  let component: EvenementenAgendaComponent;
  let fixture: ComponentFixture<EvenementenAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenementenAgendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenementenAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
