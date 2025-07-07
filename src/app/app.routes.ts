import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {TrackListComponent} from './track-list/track-list.component';
import {ComingSoonComponent} from './coming-soon/coming-soon.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  // These routes are placeholders - you'll need to create these components
  { path: 'tracks', component: TrackListComponent },
  { path: 'coming-soon', component: ComingSoonComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
