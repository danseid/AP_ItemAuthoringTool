import { Injectable } from '@angular/core';
import {ItemWorkflowStatus} from "./item-workflow-status";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {HttpUtility} from "../../../core/http-utility.service/http-utility";
import {JsonConvert} from "json2typescript";

@Injectable()
export class ItemWorkflowService {
  private static serviceUrl = '/api/ims/v1/items';

  constructor(private http: Http,
              private httpUtility: HttpUtility) {

  }

  findItemWorkflowStatuses(showAlertOnError = true,
                           showBusyIndicator = true): Observable<ItemWorkflowStatus[]> {
    const url = ItemWorkflowService.serviceUrl + '/' + 'workflow-statuses';
    return this.httpUtility.applyAsyncHandling(
      "Loading workflow statuses",
      this.http
        .get(url, HttpUtility.jsonRequestOptions)
        .map(response => JsonConvert.deserializeArray(response.json(), ItemWorkflowStatus)),
      showAlertOnError,
      showBusyIndicator
    );
  }
}
