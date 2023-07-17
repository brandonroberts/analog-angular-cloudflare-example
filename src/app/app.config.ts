import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideFileRouter } from '@analogjs/router';
import { withNavigationErrorHandler } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFileRouter(withNavigationErrorHandler(console.log)),
    provideHttpClient(),
    provideClientHydration(),
    { provide: APP_BASE_HREF, useValue: import.meta.env['VITE_APP_BASE_URL'] || '/' }
  ],
};
