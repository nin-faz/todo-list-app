import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
// import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
// import { authInterceptor } from './shared/interceptors/auth.interceptor';
// import { loadingInterceptor } from './shared/interceptors/loading.interceptor';
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // provideHttpClient(withInterceptors([authInterceptor, loadingInterceptor])),
    provideServiceWorker('ngsw-worker.js', {
      enabled: true, // Activé en dev pour tests PWA
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
};
