import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProjectGalleryComponent } from './project-gallery.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects/:slug', component: ProjectGalleryComponent },
  { path: '**', redirectTo: '' }
];
