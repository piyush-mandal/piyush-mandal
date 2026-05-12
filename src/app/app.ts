import { Component } from '@angular/core';

interface Project {
  title: string;
  category: string;
  folder: string;
  videos: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  activeProjectTitle: string | null = null;

  readonly projects: Project[] = [
    {
      title: 'Motion Design Showcase',
      category: 'Motion Graphics',
      folder: 'motion_design',
      videos: [
        'WhatsApp Video 2026-05-12 at 4.21.47 PM.mp4',
        'MM.mp4',
        'motion001.mp4',
        'apple motion1.mp4',
        'IMG_4400.MP4',
        'motion.mp4'
      ]
    },
    {
      title: '3D Environment Visual',
      category: '3D Artwork',
      folder: '3d_environments',
      videos: [
        'IMG_2306.MP4',
        'IMG_0888.MOV',
        'IMG_0757.MOV',
        'IMG_1112.MOV'
      ]
    }
  ];

  toggleProject(projectTitle: string): void {
    this.activeProjectTitle = this.activeProjectTitle === projectTitle ? null : projectTitle;
  }

  getVideoPath(project: Project, video: string): string {
    return `/${project.folder}/${encodeURIComponent(video)}`;
  }
}
