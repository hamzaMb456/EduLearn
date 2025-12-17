import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: '**', redirectTo: '' }
];
