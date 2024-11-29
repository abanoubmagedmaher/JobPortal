import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { RouterModule } from '@angular/router';  // Import RouterModule
export const appConfig: ApplicationConfig = {
//   providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
// };
providers: [
  importProvidersFrom(RouterModule.forRoot(routes))  // Import routes for the app
]
};