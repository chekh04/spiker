import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideNzI18n } from 'ng-zorro-antd/i18n';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AngularSvgIconModule, SvgLoader } from 'angular-svg-icon';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { en_US } from 'ng-zorro-antd/i18n';
import { SvgBrowserLoader } from './svg-loaders/svg-browser-loader';
import { TransferState } from '@angular/core';
import { HttpClient } from '@angular/common/http';

registerLocaleData(en);

export function svgBrowserLoaderFactory(transferState: TransferState, http: HttpClient) {
  return new SvgBrowserLoader(transferState, http);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), 
    provideClientHydration(withEventReplay()), 
    provideNzI18n(en_US), 
    importProvidersFrom(FormsModule, AngularSvgIconModule.forRoot({
      loader: {
        provide: SvgLoader,
        useFactory: svgBrowserLoaderFactory,
        deps: [TransferState, HttpClient],
      }
    })), 
    provideAnimationsAsync(), 
    provideHttpClient(withFetch())
  ]
};
