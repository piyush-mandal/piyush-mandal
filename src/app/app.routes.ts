import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home.component').then((module) => module.HomeComponent) },
  {
    path: 'projects/:slug',
    loadComponent: () => import('./project-gallery.component').then((module) => module.ProjectGalleryComponent)
  },
  {
    path: 'projects/:slug/:videoFile',
    loadComponent: () => import('./project-gallery.component').then((module) => module.ProjectGalleryComponent)
  },
  { path: '**', redirectTo: '' }
];
