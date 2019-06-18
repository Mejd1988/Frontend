import { TestBed } from '@angular/core/testing';

import { ToevoegenService } from './toevoegen.service';

describe('ToevoegenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToevoegenService = TestBed.get(ToevoegenService);
    expect(service).toBeTruthy();
  });
});
