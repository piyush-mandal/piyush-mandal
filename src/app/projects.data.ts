export interface VideoItem {
  fileName: string;
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  folder: string;
  videos: VideoItem[];
}

export const PROJECTS: Project[] = [
  {
    slug: 'motion-design-showcase',
    title: 'Motion Design Showcase',
    category: 'Motion Graphics',
    folder: 'motion_design',
    videos: [
      {
        fileName: 'WhatsApp Video 2026-05-12 at 4.21.47 PM.mp4',
        title: 'Cinematic Motion Cut',
        description: 'A moody storytelling edit with smooth transitions and dramatic pacing.'
      },
      {
        fileName: 'MM.mp4',
        title: 'Grid Illusion Visual',
        description: 'Experimental motion graphics sequence focused on texture and rhythm.'
      },
      {
        fileName: 'motion001.mp4',
        title: 'Pulse Motion Reel',
        description: 'Fast-cut montage showcasing beats, timing, and clean typography.'
      },
      {
        fileName: 'apple motion1.mp4',
        title: 'Product Motion Study',
        description: 'Minimal product-inspired animation with cinematic highlights.'
      },
      {
        fileName: 'IMG_4400.MP4',
        title: 'Cinematic Frame Test',
        description: 'Color and mood test clip exploring cinematic framing choices.'
      },
      {
        fileName: 'motion.mp4',
        title: 'Atmospheric Motion Loop',
        description: 'Ambient visual loop designed for immersive background storytelling.'
      }
    ]
  },
  {
    slug: '3d-environment-visual',
    title: '3D Environment Visual',
    category: '3D Artwork',
    folder: '3d_environments',
    videos: [
      {
        fileName: 'IMG_2306.MP4',
        title: 'Environment Flythrough I',
        description: 'A cinematic camera pass through a custom 3D scene.'
      },
      {
        fileName: 'IMG_0888.MOV',
        title: 'Environment Flythrough II',
        description: 'Atmospheric depth and lighting exploration in a 3D world.'
      },
      {
        fileName: 'IMG_0757.MOV',
        title: 'Texture & Light Study',
        description: 'A short visual study focused on material response and shadows.'
      },
      {
        fileName: 'IMG_1112.MOV',
        title: 'Worldbuilding Sequence',
        description: 'Scene-building clip showing cinematic composition and scale.'
      }
    ]
  }
];
