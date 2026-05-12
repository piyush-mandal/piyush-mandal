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
  readonly projects: Project[] = [
    {
      title: 'Motion Design Showcase',
      category: 'Motion Graphics',
      folder: 'motion_design',
      videos: [
        'IMG_4400.MP4',
        'apple motion1.mp4',
        'motion001.mp4',
        'MM.mp4',
        'motion.mp4',
        'WhatsApp Video 2026-05-12 at 4.21.47 PM.mp4'
      ]
    },
    {
      title: '3D Environment Visual',
      category: '3D Artwork',
      folder: '3d_environments',
      videos: ['IMG_2306.MP4', 'IMG_0757.MOV', 'IMG_1112.MOV', 'IMG_0888.MOV']
    }
  ];

  selectedProject: Project | null = null;

  openProject(project: Project): void {
    this.selectedProject = project;
  }

  closeProject(): void {
    this.selectedProject = null;
  }

  trackVideo(_: number, videoPath: string): string {
    return videoPath;
  }

  getVideoPath(project: Project, fileName: string): string {
    return `${project.folder}/${fileName}`;
  }
}
