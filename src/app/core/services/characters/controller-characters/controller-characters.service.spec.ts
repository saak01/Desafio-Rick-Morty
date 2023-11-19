import { TestBed } from '@angular/core/testing';

import { ControllerCharactersService } from './controller-characters.service';

describe('ControllerCharactersService', () => {
  let service: ControllerCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControllerCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
