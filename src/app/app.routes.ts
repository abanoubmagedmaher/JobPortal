import { Routes } from '@angular/router';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { ApplyFormComponent } from './components/apply-form/apply-form.component';

export const routes: Routes = [
   { path: '', component: JobListComponent },
    { path: 'jobs/:id', component: JobDetailComponent },
    { path: 'apply/:id', component: ApplyFormComponent }
];
