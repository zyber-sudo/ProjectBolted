import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  // These routes are placeholders - you'll need to create these components
  { path: 'about', component: HomeComponent },
  { path: 'services', component: HomeComponent },
  { path: 'contact', component: HomeComponent },
  { path: '**', redirectTo: '' }
];
