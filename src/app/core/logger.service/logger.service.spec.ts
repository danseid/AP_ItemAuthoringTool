import {inject, TestBed} from "@angular/core/testing";

import {Logger} from "./logger.service";

describe('Logger', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        Logger
      ]
    });
  });

  it('should be created', inject([Logger], (service: Logger) => {
    expect(service).toBeTruthy();
  }));
});
