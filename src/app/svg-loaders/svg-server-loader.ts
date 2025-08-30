import { Injectable, Inject } from '@angular/core';
import { SvgLoader } from 'angular-svg-icon';
import { TransferState, StateKey, makeStateKey } from '@angular/core';
import { Observable } from 'rxjs';

const fs = require('fs');
const join = require('path').join;
const parseUrl = require('url').parse;
const baseName = require('path').basename;

@Injectable()
export class SvgServerLoader implements SvgLoader {
  constructor(
    @Inject('ICON_PATH') private iconPath: string,
    private transferState: TransferState
  ) {}

  getSvg(url: string): Observable<string> {
    const parsedUrl: URL = parseUrl(url);
    const fileNameWithHash = baseName(parsedUrl.pathname);
    // Remove content hashing
    const fileName = fileNameWithHash.replace(/^(.*)(\.[0-9a-f]{16,})(\.svg)$/i, '$1$3');
    const filePath = join(this.iconPath, fileName);
    
    return new Observable(observer => {
      try {
        const svgData = fs.readFileSync(filePath, 'utf8');

        // Here we save the SVG in the transfer-state
        const key: StateKey<string> = makeStateKey<string>('transfer-svg:' + url);
        this.transferState.set(key, svgData);

        observer.next(svgData);
        observer.complete();
      } catch (error) {
        observer.error(error);
      }
    });
  }
}
