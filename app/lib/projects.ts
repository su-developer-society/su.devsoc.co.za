export interface Project {
  id: number;
  titleKey: string;
  descriptionKey: string;
  href: string;
  tech: string[];
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    titleKey: "projects.project-one-title",
    descriptionKey: "projects.project-one-description",
    href: "https://tms.devsoc.co.za",
    tech: ["Next.js", "TypeScript", "Cloudflare"],
    image: "/projects/devsoc-tms-project-image.png",
  },
];
