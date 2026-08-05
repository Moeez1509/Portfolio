import { projects } from "../constants/data";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./common/SectionTitle";

function Projects() {
  return (
    <section id="projects" className="py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle title="Featured Projects" subtitle="Portfolio" />

        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12">
          Real-world applications crafted with a focus on clean architecture, strong performance, and intuitive design.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;