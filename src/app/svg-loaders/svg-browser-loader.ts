import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SvgLoader, SvgHttpLoader } from 'angular-svg-icon';
import { TransferState, StateKey, makeStateKey } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SvgBrowserLoader implements SvgLoader {
  constructor(
    private transferState: TransferState,
    private http: HttpClient
  ) {}

  getSvg(url: string): Observable<string> {
    const key: StateKey<string> = makeStateKey<string>('transfer-svg:' + url);
    const data = this.transferState.get(key, null);
    
    // First we are looking for the SVG in transfer-state, if none found, http load as fallback
    if (data) {
      return new Observable(observer => {
        observer.next(data);
        observer.complete();
      });
    } else {
      return new SvgHttpLoader(this.http).getSvg(url);
    }
  }
}
