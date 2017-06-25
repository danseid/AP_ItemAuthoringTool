import {Headers, RequestOptions, Response} from "@angular/http";

import {Logger} from "../logger/logger.service";
import {Observable} from "rxjs/Observable";
import {AlertService} from "../alert/alert.service";
import {BusyService} from "../busy/busy.service";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import "rxjs/add/operator/multicast";

@Injectable()
export class HttpUtility {
  constructor(private alertService: AlertService,
              private busyService: BusyService,
              private logger: Logger) {
  }

  /**
   * Options to be passed to a request containing JSON
   * @type {RequestOptions} to be passed
   */
  static jsonRequestOptions = new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})});

  /**
   * Wrap HTTP call with logging, error alert, and busy indicator.
   * @param requestDescription description of the HTTP request
   * @param source containing the HTTP request execution
   * @param showBusyIndicator whether to show the busy indicator while the call is in progress
   * @param showErrorAlert whether to show an alert when an error occurs
   * @returns observable containing the HTTP request execution
   */
  applyAsyncHandling<T>(requestDescription: string,
                        source: Observable<T>,
                        showBusyIndicator: boolean = true,
                        showErrorAlert: boolean = true): Observable<T> {
    // Make source a multicast observable to allow more than one subscriber for a single execution
    const refCounted = source.multicast(new Subject).refCount();

    // Subscribe adding logging, error alert, and busy indicator
    this.logger.debug(requestDescription);
    if (showBusyIndicator) {
      this.busyService.show(requestDescription);
    }
    refCounted.subscribe({
      next: (result: T) => {
        this.logger.debug(`Success ${requestDescription.toLowerCase()}, result: ${JSON.stringify(result)}`);
        if (showBusyIndicator) {
          this.busyService.hide();
        }
      },
      error: (error: Error) => {
        this.logger.debug(`Error ${requestDescription.toLowerCase()}, error: ${HttpUtility.stringifyError(error)}`);
        if (showBusyIndicator) {
          this.busyService.hide();
        }
        if (showErrorAlert) {
          this.alertService.error(
            `Error ${requestDescription.toLowerCase()}`,
            `An error occurred ${requestDescription.toLowerCase()}, error: ${HttpUtility.stringifyError(error)}`);
        }
      }
    });

    return refCounted;
  }

  /**
   * Convert the error into a message
   * @param error to be stringified
   * @returns the stringified error message
   */
  private static stringifyError(error: Response | any): string {
    let message: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      message = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      message = error.message ? error.message : error.toString();
    }
    return message
  }
}
