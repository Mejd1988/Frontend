import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GebruikerloginComponent } from './gebruikerlogin.component';

describe('GebruikerloginComponent', () => {
  let component: GebruikerloginComponent;
  let fixture: ComponentFixture<GebruikerloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GebruikerloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GebruikerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
