import { mergeApplicationConfig, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { AngularSvgIconModule, SvgLoader } from 'angular-svg-icon';
import { SvgServerLoader } from './svg-loaders/svg-server-loader';
import { HttpClient } from '@angular/common/http';
import { TransferState } from '@angular/core';

export function svgServerLoaderFactory(transferState: TransferState) {
  return new SvgServerLoader('src/assets/icons', transferState);
}

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    { provide: 'ICON_PATH', useValue: 'src/assets/icons' },
    importProvidersFrom(AngularSvgIconModule.forRoot({
      loader: {
        provide: SvgLoader,
        useFactory: svgServerLoaderFactory,
        deps: [TransferState],
      }
    }))
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
