import {inject, TestBed} from "@angular/core/testing";
import {HttpModule} from "@angular/http";

import {AppInfoService} from "./app-info.service";
import {Logger} from "../logger/logger.service";
import {HttpUtility} from "../http-utility/http-utility";
import {BusyService} from "../busy/busy.service";
import {ToastyConfig, ToastyService} from "ng2-toasty";
import {AlertService} from "../alert/alert.service";

describe('AppInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppInfoService,
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

  it('should be created', inject([AppInfoService], (service: AppInfoService) => {
    expect(service).toBeTruthy();
  }));
});
