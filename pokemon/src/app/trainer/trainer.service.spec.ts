/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { TrainerService } from './trainer.service';

describe('Service: TrainerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainerService]
    });
  });

  it('should ...', inject([TrainerService], (service: TrainerService) => {
    expect(service).toBeTruthy();
  }));
});
