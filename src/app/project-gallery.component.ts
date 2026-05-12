import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PROJECTS, type Project, type VideoItem } from './projects.data';

@Component({
  selector: 'app-project-gallery',
  imports: [RouterLink],
  templateUrl: './project-gallery.component.html',
  styleUrl: './project-gallery.component.css'
})
export class ProjectGalleryComponent {
  private readonly route = inject(ActivatedRoute);

  readonly project = computed<Project | undefined>(() => {
    const slug = this.route.snapshot.paramMap.get('slug');
    return PROJECTS.find((item) => item.slug === slug);
  });

  private readonly ratios = new Map<string, number>();

  getVideoPath(project: Project, video: VideoItem): string {
    return `/${project.folder}/${encodeURIComponent(video.fileName)}`;
  }

  updateVideoRatio(video: VideoItem, event: Event): void {
    const element = event.target as HTMLVideoElement;
    if (!element.videoWidth || !element.videoHeight) {
      return;
    }

    this.ratios.set(video.fileName, element.videoWidth / element.videoHeight);
  }

  getTileClass(video: VideoItem): string {
    const ratio = this.ratios.get(video.fileName);
    if (!ratio) {
      return 'tile-standard';
    }

    if (ratio < 0.9) {
      return 'tile-portrait';
    }

    if (ratio > 1.6) {
      return 'tile-landscape';
    }

    return 'tile-standard';
  }
}
