import { forwardRef, useMemo, useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../types/project';

type ProjectsProps = {
  projects: Project[];
  renderProjectImage: (image: string | undefined, title: string) => JSX.Element | null;
  showAll?: boolean;
  sectionTitle?: string;
};

const projectCopy: Record<string, { title: string; description: string }> = {
  'UCSC Baskin Booking Website': {
    title: 'BESA Tour Booking Website',
    description:
      'A custom booking website that made tour scheduling easier for students and staff with a clearer, more organized system.'
  },
  'Portfolio for UCLA EE Engineer': {
    title: 'Engineering Portfolio Website',
    description:
      'A professional portfolio website built to showcase projects, experience, and technical work in a clear and polished way.'
  },
  'Art Student Portfolio Website': {
    title: 'Art Portfolio Website',
    description:
      'A portfolio site designed to display different types of artwork in a clean layout that is easy to update and navigate.'
  },
  'Meal Planner App': {
    title: 'GymBites',
    description:
      'A meal planning app built to help users organize meals, track ideas, and keep the experience simple and easy to use.'
  },
  ChariWork: {
    title: 'ChariWork',
    description:
      'A web app that rounds up purchases and donates to charity through a simple flow with clear tracking.'
  }
};

const mainPageOrder = ['UCSC Baskin Booking Website', 'ChariWork'];

const moreProjectsOrder = [
  'Portfolio for UCLA EE Engineer',
  'Art Student Portfolio Website',
  'Meal Planner App'
];

const Projects = forwardRef<HTMLElement, ProjectsProps>(
  ({ projects, renderProjectImage, showAll = false, sectionTitle = "01. Websites I've Built" }, ref) => {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    const visibleProjects = useMemo(() => {
      if (!showAll) {
        return mainPageOrder
          .map((title) => projects.find((p) => p.title === title))
          .filter((p): p is Project => Boolean(p));
      }

      const ordered = moreProjectsOrder
        .map((title) => projects.find((p) => p.title === title))
        .filter((p): p is Project => Boolean(p));

      const remaining = projects.filter(
        (p) => !mainPageOrder.includes(p.title) && !moreProjectsOrder.includes(p.title)
      );

      return [...ordered, ...remaining];
    }, [projects, showAll]);

    return (
      <section ref={ref} id="projects" className="section py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" />
        </div>

        <div className="container max-w-5xl mx-auto relative z-10">
          {sectionTitle && (
            <div className="flex items-center mb-10">
              <h2 className="text-3xl font-bold font-mono mr-4" style={{ color: 'var(--primary)' }}>
                {sectionTitle}
              </h2>
              <div className="flex-1 h-px bg-gray-600"></div>
            </div>
          )}

          <div className="space-y-12">
            {visibleProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              const isHovered = hoveredProject === project.title;
              const displayProject = projectCopy[project.title] ?? {
                title: project.title,
                description: project.description
              };

              return (
                <div
                  key={project.title}
                  className="relative"
                  onMouseEnter={() => setHoveredProject(project.title)}
                  onMouseLeave={() => setHoveredProject(null)}
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${index * 0.2}s backwards`
                  }}
                >
                  <div
                    className="absolute inset-0 transition-all duration-700 blur-3xl opacity-0"
                    style={{
                      background: `radial-gradient(circle at ${isEven ? '30%' : '70%'} 50%, #c6a59a55, transparent 60%)`,
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? 'scale(1.1)' : 'scale(0.9)'
                    }}
                  />

                  <div className="grid md:grid-cols-12 gap-8 items-center relative">
                    <div
                      className={`md:col-span-7 ${!isEven ? 'md:order-2' : 'md:order-1'}`}
                      style={{
                        animation: `slideIn${isEven ? 'Left' : 'Right'} 0.8s ease-out ${index * 0.2 + 0.2}s backwards`
                      }}
                    >
                      <div className="relative group">
                        <div
                          className="relative rounded-xl overflow-hidden transition-all duration-500"
                          style={{
                            height: '400px',
                            transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                            boxShadow: isHovered
                              ? `0 24px 48px -18px rgba(198,165,154,0.45)`
                              : '0 12px 28px -14px rgba(0, 0, 0, 0.25)'
                          }}
                        >
                          <div
                            className="absolute inset-0 z-10 transition-opacity duration-500"
                            style={{
                              background: `linear-gradient(135deg, rgba(198,165,154,0.22), transparent 60%)`,
                              opacity: isHovered ? 0 : 0.6
                            }}
                          />

                          <div
                            className="flex items-center justify-center h-full w-full bg-gray-900 transition-all duration-500"
                            style={{
                              transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                              filter: isHovered ? 'brightness(1.06) contrast(1.03)' : 'brightness(0.94)'
                            }}
                          >
                            {renderProjectImage(project.image as string, displayProject.title)}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`md:col-span-5 flex flex-col justify-center z-20 ${
                        !isEven ? 'md:order-1 md:text-left md:items-start' : 'md:order-2 md:text-right md:items-end'
                      }`}
                      style={{
                        animation: `slideIn${isEven ? 'Right' : 'Left'} 0.8s ease-out ${index * 0.2 + 0.3}s backwards`
                      }}
                    >
                      <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3 font-mono text-xs font-semibold transition-all duration-300"
                        style={{
                          backgroundColor: isHovered ? 'var(--primary)20' : 'var(--primary)10',
                          border: '1px solid var(--primary)',
                          color: 'var(--primary)',
                          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                        }}
                      >
                        <span
                          className="w-2 h-2 rounded-full animate-pulse"
                          style={{ backgroundColor: 'var(--natural)' }}
                        />
                        Website Build
                      </div>

                      <h3
                        className="text-3xl md:text-4xl font-bold mb-5 transition-all duration-300"
                        style={{
                          color: 'var(--primary)',
                          textShadow: isHovered ? '0 0 20px #c6a59a' : 'none',
                          transform: isHovered ? 'translateX(0)' : `translateX(${isEven ? '4px' : '-4px'})`
                        }}
                      >
                        {displayProject.title}
                      </h3>

                      <div
                        className="relative p-6 rounded-xl mb-5 transition-all duration-500 backdrop-blur-md w-full md:w-auto"
                        style={{
                          border: '1px solid #c6a59a',
                          boxShadow: isHovered
                            ? '0 20px 40px -10px #c6a59a'
                            : '0 10px 20px -5px rgba(0, 0, 0, 0.3)',
                          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)'
                        }}
                      >
                        <p
                          className="text-sm md:text-base leading-relaxed relative z-10"
                          style={{ color: 'var(--text)' }}
                        >
                          {displayProject.description}
                        </p>
                      </div>

                      <div
                        className={`flex flex-wrap gap-3 mb-6 font-mono text-xs ${
                          !isEven ? 'md:justify-start' : 'md:justify-end'
                        }`}
                      >
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-md"
                            style={{
                              color: 'var(--muted)',
                              border: '1px solid var(--border)',
                              backgroundColor: 'rgba(255, 255, 255, 0.42)',
                              animationDelay: `${techIndex * 0.05}s`
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-5">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link relative p-3 rounded-lg transition-all duration-300"
                          style={{
                            color: 'var(--primary)',
                            backgroundColor: isHovered ? 'var(--primary)10' : 'transparent',
                            border: '1px solid transparent',
                            borderColor: isHovered ? 'var(--primary)30' : 'transparent'
                          }}
                        >
                          <Github
                            size={22}
                            className="transition-transform duration-300 group-hover/link:scale-110 group-hover/link:rotate-12"
                          />
                          <span
                            className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded opacity-0 group-hover/link:opacity-100 transition-opacity whitespace-nowrap"
                            style={{
                              backgroundColor: 'rgba(255, 250, 244, 0.96)',
                              color: 'var(--primary)',
                              border: '1px solid var(--border)',
                              boxShadow: '0 10px 20px rgba(36, 55, 70, 0.12)'
                            }}
                          >
                            View Code
                          </span>
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo.startsWith('http') ? project.demo : `https://${project.demo}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link relative p-3 rounded-lg transition-all duration-300"
                            style={{
                              color: 'var(--primary)',
                              backgroundColor: isHovered ? 'var(--primary)10' : 'transparent',
                              border: '1px solid transparent',
                              borderColor: isHovered ? 'var(--primary)30' : 'transparent'
                            }}
                          >
                            <ExternalLink
                              size={22}
                              className="transition-transform duration-300 group-hover/link:scale-110 group-hover/link:-rotate-12"
                            />
                            <span
                              className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded opacity-0 group-hover/link:opacity-100 transition-opacity whitespace-nowrap"
                              style={{
                                backgroundColor: 'rgba(255, 250, 244, 0.96)',
                                color: 'var(--primary)',
                                border: '1px solid var(--border)',
                                boxShadow: '0 10px 20px rgba(36, 55, 70, 0.12)'
                              }}
                            >
                              Live Demo
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {!showAll && (
            <div className="flex justify-center mt-16">
              <Link
                to="/more-projects"
                className="inline-flex items-center gap-3 px-8 py-4 border border-pink-300 rounded font-mono text-sm transition-all duration-300 hover:bg-pink-300 hover:bg-opacity-10 hover:-translate-y-1"
                style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}
              >
                More Projects
                <ArrowRight size={18} />
              </Link>
            </div>
          )}

          <div className="absolute top-1/4 left-0 w-96 h-96 opacity-5 pointer-events-none">
            <div
              className="w-full h-full rounded-full"
              style={{
                background: 'radial-gradient(circle, var(--primary), transparent 70%)',
                animation: 'pulse 6s ease-in-out infinite'
              }}
            />
          </div>
        </div>

        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-60px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(60px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes patternShift {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 60px 60px;
            }
          }

          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.05;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.1;
            }
          }
        `}</style>
      </section>
    );
  }
);

Projects.displayName = 'Projects';

export default Projects;
