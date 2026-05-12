import { Component } from '@angular/core';

interface Project {
  title: string;
  category: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly projects: Project[] = [
    { title: 'Motion Design Showcase', category: 'Motion Graphics' },
    { title: '3D Environment Visual', category: '3D Artwork' }
  ];
}
