import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  QueryList,
  ViewChildren,
  computed,
  inject
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import type Player from 'video.js/dist/types/player';
import videojs from 'video.js';
import { Subscription } from 'rxjs';
import { PROJECTS, type Project, type VideoItem } from './projects.data';

@Component({
  selector: 'app-project-gallery',
  imports: [RouterLink],
  templateUrl: './project-gallery.component.html',
  styleUrl: './project-gallery.component.css'
})
export class ProjectGalleryComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('videoPlayer') private readonly videoElements!: QueryList<ElementRef<HTMLVideoElement>>;

  private readonly route = inject(ActivatedRoute);
  private readonly routeParams = toSignal(this.route.paramMap, { initialValue: this.route.snapshot.paramMap });
  private readonly players = new Map<HTMLVideoElement, Player>();
  private readonly ratios = new Map<string, number>();
  private videoElementsSubscription?: Subscription;

  readonly project = computed<Project | undefined>(() => {
    const slug = this.routeParams().get('slug');
    return PROJECTS.find((item) => item.slug === slug);
  });

  readonly selectedVideoFile = computed(() => this.routeParams().get('videoFile'));

  readonly visibleVideos = computed<VideoItem[]>(() => {
    const selectedProject = this.project();
    if (!selectedProject) {
      return [];
    }

    const selectedVideoFile = this.selectedVideoFile();
    if (!selectedVideoFile) {
      return selectedProject.videos;
    }

    const decodedFile = decodeURIComponent(selectedVideoFile);
    return selectedProject.videos.filter((video) => video.fileName === decodedFile);
  });

  ngAfterViewInit(): void {
    this.initializePlayers();
    this.videoElementsSubscription = this.videoElements.changes.subscribe(() => this.initializePlayers());
  }

  ngOnDestroy(): void {
    this.videoElementsSubscription?.unsubscribe();
    for (const player of this.players.values()) {
      player.dispose();
    }
    this.players.clear();
  }

  getVideoPath(project: Project, video: VideoItem): string {
    return `/${project.folder}/${encodeURIComponent(video.fileName)}`;
  }

  getVideoType(video: VideoItem): string {
    const extension = video.fileName.split('.').pop()?.toLowerCase();
    return extension === 'mov' ? 'video/quicktime' : 'video/mp4';
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

  getVideoRatio(video: VideoItem): string {
    const ratio = this.ratios.get(video.fileName);
    return ratio ? String(ratio) : '16 / 9';
  }

  private initializePlayers(): void {
    const currentElements = new Set(this.videoElements.map((item) => item.nativeElement));

    for (const [element, player] of this.players) {
      if (!currentElements.has(element)) {
        player.dispose();
        this.players.delete(element);
      }
    }

    this.videoElements.forEach(({ nativeElement }) => {
      if (this.players.has(nativeElement)) {
        return;
      }

      this.players.set(nativeElement, videojs(nativeElement, {
        controls: true,
        preload: 'metadata',
        responsive: true,
        playbackRates: [0.5, 1, 1.25, 1.5, 2]
      }));
    });
  }
}
