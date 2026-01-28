import Link from "next/link";
import { Project } from "../lib/projects";
import { useLanguage } from "../context/LanguageContext";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
    const { t } = useLanguage();
    return (
    <article className="group overflow-hidden rounded-xl border border-gray-200 bg-black hover:shadow-md transition">
      
      {/* Cover image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={project.image}
          alt={`${t(project.titleKey)} cover`}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2">
          {t(project.titleKey)}
        </h3>

        <p className="text-sm text-gray-600 mb-4">
          {t(project.descriptionKey)}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map(t => (
            <span
              key={t}
              className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700"
            >
              {t}
            </span>
          ))}
        </div>

        <Link
          href={project.href}
          target="_blank"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          {t("projects.view-project")}
        </Link>
      </div>
    </article>
  );
}
