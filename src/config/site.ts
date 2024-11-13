import { ProjectInfo } from '@/types';

export const siteConfig = {
  name: 'Frontend Showcase',
  description:
    'A collection of my front-end projects and components showcasing my skills.',
} as const;

export const projects: ProjectInfo[] = [
  {
    title: 'Testimonial Card',
    description:
      'A beautifully crafted, fully responsive testimonial card component, showcasing user feedback in a sleek design.',
    href: '/testimonial-card',
  },
  {
    title: 'Blog Card',
    description:
      'A minimalist and modern blog card design, complete with an image and post preview to display blog content attractively.',
    href: '/blog-card',
  },
];
