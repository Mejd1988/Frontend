import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementGebruikerComponent } from './evenement-gebruiker.component';

describe('EvenementGebruikerComponent', () => {
  let component: EvenementGebruikerComponent;
  let fixture: ComponentFixture<EvenementGebruikerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenementGebruikerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenementGebruikerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
