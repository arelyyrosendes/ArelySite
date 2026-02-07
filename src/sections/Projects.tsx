import { forwardRef, useState } from 'react';
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
  ({ projects, renderProjectImage }, ref) => {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    const featuredProjects = projects.filter(p => p.featured);

    return (
      <section ref={ref} id="projects" className="section py-20 px-6 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0"
            // style={{
            //   backgroundImage: `
            //     repeating-linear-gradient(
            //       45deg,
            //       var(--primary) 0px,
            //       var(--primary) 1px,
            //       transparent 1px,
            //       transparent 60px
            //     ),
            //     repeating-linear-gradient(
            //       -45deg,
            //       var(--primary) 0px,
            //       var(--primary) 1px,
            //       transparent 1px,
            //       transparent 60px
            //     )
            //   `,
            //   animation: 'patternShift 30s linear infinite'
            // }}
          />
        </div>

        <div className="container max-w-6xl mx-auto relative z-10">
          {/* Enhanced Section Header */}
          <div className="flex items-center mb-10">
        <h2 className="text-3xl font-bold font-mono mr-4" style={{ color: 'var(--primary)' }}>
          04. Projects
        </h2>
        <div className="flex-1 h-px bg-gray-600"></div>
      </div>

          {/* Featured Projects */}
          <div className="space-y-32">
            {featuredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              const isHovered = hoveredProject === project.title;
              
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
                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 transition-all duration-700 blur-3xl opacity-0"
                    style={{
                      background: `radial-gradient(circle at ${isEven ? '30%' : '70%'} 50%, rgba(198,165,154,0.35), transparent 60%)`,
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? 'scale(1.1)' : 'scale(0.9)'
                    }}
                  />

                  <div className="grid md:grid-cols-12 gap-8 items-center relative">
                    {/* Project Image */}
                    <div 
                      className={`md:col-span-7 ${!isEven ? 'md:order-2' : 'md:order-1'}`}
                      style={{
                        animation: `slideIn${isEven ? 'Left' : 'Right'} 0.8s ease-out ${index * 0.2 + 0.2}s backwards`
                      }}
                    >
                      <div className="relative group">
                        {/* Image container with enhanced effects */}
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
                          {/* Soft overlay */}
                          <div
                            className="absolute inset-0 z-10 transition-opacity duration-500"
                            style={{
                              background: `linear-gradient(135deg, rgba(198,165,154,0.22), transparent 60%)`,
                              opacity: isHovered ? 0 : 0.6
                            }}
                          />

                          {/* Image content */}
                          <div 
                            className="flex items-center justify-center h-full w-full bg-gray-900 transition-all duration-500"
                            style={{
                              transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                              filter: isHovered ? 'brightness(1.06) contrast(1.03)' : 'brightness(0.94)'
                            }}
                          >
                            {renderProjectImage(project.image as string, project.title)}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div 
                      className={`md:col-span-5 flex flex-col justify-center z-20 ${
                        !isEven ? 'md:order-1 md:text-left md:items-start' : 'md:order-2 md:text-right md:items-end'
                      }`}
                      style={{
                        animation: `slideIn${isEven ? 'Right' : 'Left'} 0.8s ease-out ${index * 0.2 + 0.3}s backwards`
                      }}
                    >
                      {/* Featured label */}
                      <div 
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3 font-mono text-xs font-semibold transition-all duration-300"
                        style={{
                          backgroundColor: isHovered ? 'var(--primary)20' : 'var(--primary)10',
                          border: '1px solid var(--primary)',
                          color: 'var(--primary)',
                          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                        }}
                      >
                        <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                        Featured Project
                      </div>

                      {/* Project title */}
                      <h3
                        className="text-3xl md:text-4xl font-bold mb-5 transition-all duration-300"
                        style={{
                          color: 'var(--primary)',
                          textShadow: isHovered ? '0 0 20px rgba(100, 255, 218, 0.3)' : 'none',
                          transform: isHovered ? 'translateX(0)' : `translateX(${isEven ? '4px' : '-4px'})`
                        }}
                      >
                        {project.title}
                      </h3>

                      {/* Description card */}
                      <div
                        className="relative p-6 rounded-xl mb-5 transition-all duration-500 backdrop-blur-md w-full md:w-auto"
                        style={{
                          border: '1px solid rgba(100, 255, 218, 0.2)',
                          boxShadow: isHovered 
                            ? '0 20px 40px -10px rgba(100, 255, 218, 0.2)'
                            : '0 10px 20px -5px rgba(0, 0, 0, 0.3)',
                          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)'
                        }}
                      >
                        {/* Corner decoration */}                        
                        <p 
                          className="text-sm md:text-base leading-relaxed relative z-10"
                          style={{ color: 'var(--text)' }}
                        >
                          {project.description}
                        </p>
                      </div>

                      {/* Tech stack */}
                      <div 
                        className={`flex flex-wrap gap-3 mb-6 font-mono text-xs ${
                          !isEven ? 'md:justify-start' : 'md:justify-end'
                        }`}
                      >
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-md transition-all duration-300"
                            style={{
                              color: isHovered ? 'var(--primary)' : 'var(--muted)',
                              // backgroundColor: isHovered ? 'var(--primary)10' : 'transparent',
                              border: `1px solid ${isHovered ? 'var(--primary)50' : 'transparent'}`,
                              transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                              animationDelay: `${techIndex * 0.05}s`
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
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
                          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs rounded opacity-0 group-hover/link:opacity-100 transition-opacity whitespace-nowrap">
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
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs rounded opacity-0 group-hover/link:opacity-100 transition-opacity whitespace-nowrap">
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

          {/* Decorative elements */}
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
