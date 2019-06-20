import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GebruikeraanmeldenComponent } from './gebruikeraanmelden.component';

describe('GebruikeraanmeldenComponent', () => {
  let component: GebruikeraanmeldenComponent;
  let fixture: ComponentFixture<GebruikeraanmeldenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GebruikeraanmeldenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GebruikeraanmeldenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
