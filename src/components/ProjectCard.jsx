import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 hover:border-blue-500 transition duration-300">

      <div className="relative overflow-hidden">
        {project.featured && (
          <span className="absolute top-4 left-4 z-10 rounded-full bg-blue-500 px-4 py-1 text-sm font-semibold text-white">
            Featured
          </span>
        )}

        <img
          src={project.image}
          alt={project.title}
          className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold">{project.title}</h3>

        <p className="text-slate-400 mt-4 leading-7">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-8 items-center">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-blue-400"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-blue-400"
          >
            <FaExternalLinkAlt /> Live
          </a>
        </div>
      </div>

    </div>
  );
}

export default ProjectCard;