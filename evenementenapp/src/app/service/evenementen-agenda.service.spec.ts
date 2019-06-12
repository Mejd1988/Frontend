import { TestBed } from '@angular/core/testing';

import { EvenementenAgendaService } from './evenementen-agenda.service';

describe('EvenementenAgendaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvenementenAgendaService = TestBed.get(EvenementenAgendaService);
    expect(service).toBeTruthy();
  });
});
