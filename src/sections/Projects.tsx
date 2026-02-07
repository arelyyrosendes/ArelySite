import React, { forwardRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string | null;
  featured: boolean;
  image?: string;
};

type ProjectsProps = {
  projects: Project[];
  renderProjectImage: (image: string | undefined, title: string) => JSX.Element | null;
};

const Projects = forwardRef<HTMLElement, ProjectsProps>(
  ({ projects, renderProjectImage }, ref) => (
    <section
      ref={ref}
      id="projects"
      className="section py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="flex items-center mb-16">
          <h2 className="text-3xl font-bold font-mono mr-4" style={{ color: 'var(--primary)' }}>
            04. Projects
          </h2>
          <div className="flex-1 h-px bg-gray-600"></div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {projects.filter(p => p.featured).map((project, index) => (
            <div
              key={project.title}
              className="grid md:grid-cols-12 gap-8 items-center"
            >
              {/* Project Image */}
              <div className={`md:col-span-6 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                <div
                  className="relative group cursor-pointer rounded-lg overflow-hidden h-96 bg-gray-800"
                  style={{ backgroundColor: 'var(--surface)' }}
                >
                  <div className="absolute inset-0 transition-opacity duration-300 group-hover:bg-opacity-0" style={{ backgroundColor: 'var(--highlight)', opacity: 0.28 }}></div>
                  <div className="flex items-center justify-center h-full w-full">
                    {renderProjectImage(project.image as string, project.title)}
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className={`md:col-span-6 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1 md:text-right' : 'md:order-2 md:text-left'}`}>
                <p className="text-sm font-mono mb-2" style={{ color: 'var(--primary)' }}>
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
                  {project.title}
                </h3>
                <div
                  className="p-6 rounded-lg mb-4 backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(247, 240, 230, 0.8)', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}
                >
                  <p style={{ color: 'var(--text)' }}>
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 mb-4 font-mono text-sm">
                  {project.tech.map((tech) => (
                    <span key={tech} style={{ color: 'var(--muted)' }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="transition-colors duration-200 hover:text-pink-300"
                    style={{ color: 'var(--primary)' }}
                  >
                    <Github size={20} />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo.startsWith('http') ? project.demo : `https://${project.demo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-200 hover:text-pink-300"
                      style={{ color: 'var(--primary)' }}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
);

Projects.displayName = 'Projects';

export default Projects;
