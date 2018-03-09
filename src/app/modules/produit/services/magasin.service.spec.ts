import { TestBed, inject } from '@angular/core/testing';

import { MagasinService } from './magasin.service';

describe('MagasinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagasinService]
    });
  });

  it('should be created', inject([MagasinService], (service: MagasinService) => {
    expect(service).toBeTruthy();
  }));
});
