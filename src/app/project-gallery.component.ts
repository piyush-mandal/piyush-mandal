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

  getVideoPath(project: Project, video: VideoItem): string {
    return `/${project.folder}/${encodeURIComponent(video.fileName)}`;
  }
}
