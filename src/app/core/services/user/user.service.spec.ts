import {inject, TestBed} from "@angular/core/testing";
import {HttpModule} from "@angular/http";

import {UserService} from "./user.service";
import {Logger} from "../logger/logger.service";
import {HttpUtility} from "../http-utility/http-utility";
import {ToastyConfig, ToastyService} from "ng2-toasty";
import {AlertService} from "../alert/alert.service";
import {BusyService} from "../busy/busy.service";

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        Logger,
        HttpUtility,
        AlertService,
        ToastyService,
        ToastyConfig,
        BusyService
      ],
      imports: [
        HttpModule
      ]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
