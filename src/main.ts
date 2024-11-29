import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { JobListComponent } from './app/components/job-list/job-list.component';
import { RouterModule } from '@angular/router';  // Import RouterModule
import { routes } from './app/app.routes';


// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

bootstrapApplication(JobListComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes))  // Provide RouterModule with routes
  ]
}).catch((err) => console.error(err));