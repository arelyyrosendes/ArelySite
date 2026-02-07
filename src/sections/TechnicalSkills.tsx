import React, { forwardRef, useState } from 'react';

const TechnicalSkills = forwardRef<HTMLElement>((_, ref) => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const skillCategories = [
    {
      id: 'foundations',
      title: 'Programming Foundations',
      skills: ['Python', 'C/C++', 'Java', 'Bash / Shell', 'Linux', 'macOS'],
      color: '#50545e',
      icon: '💻'
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
      color: '#50545e',
      icon: '⚛️'
    },
        {
      id: 'backend',
      title: 'Backend & Platform Integration',
      skills: ['Firebase (Auth, Firestore)', 
                'Node.js', 
                'OpenAPI', 
                'Docker', 
                'Kubernetes', 
                'OpenShift',
                'Neon'],
      color: '#50545e',
      icon: '⚙️'
    },
    {
      id: 'ui-ux',
      title: 'UI / UX & Component Design',
      skills: [
        'Responsive Design',
        'Component-Based Architecture',
        'Reusable UI Systems',
        'Mobile-First Layouts'
      ],
      color: '#50545e',
      icon: '🎨'
    },
    {
      id: 'state',
      title: 'State, Routing & Data',
      skills: ['React Hooks', 'Context API', 'React Router', 'REST APIs', 'Async Data Fetching'],
      color: '#50545e',
      icon: '🔄'
    },
    {
      id: 'tooling',
      title: 'Tooling & Workflow',
      skills: ['Git', 'GitHub / GitLab', 'Vite', 'NPM', 'CI/CD Pipelines'],
      color: '#50545e',
      icon: '🛠️'
    }
  ];

  return (
    <section ref={ref} id="skills" className="section py-20 px-6 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--primary) 1px, transparent 1px),
              linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'gridPulse 20s ease-in-out infinite'
          }}
        />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section Header with enhanced styling */}
        <div className="flex items-center mb-16 group">
          <h2
            className="text-4xl md:text-5xl font-bold font-mono mr-6 transition-all duration-300"
            style={{ color: 'var(--primary)' }}
          >
            <span className="inline-block transition-transform duration-300 group-hover:scale-105">
              02.
            </span>{' '}
            <span className="inline-block">Technical Skills</span>
          </h2>
          <div
            className="flex-1 h-px transition-all duration-500"
            style={{
              background: `linear-gradient(to right, var(--primary), transparent)`,
              opacity: 0.6
            }}
          />
        </div>

        {/* Skills Grid with card-based layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className="group relative"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
              }}
            >
              {/* Card background with glow effect */}
              <div
                className="absolute inset-0 rounded-lg transition-all duration-500 opacity-0 group-hover:opacity-100 blur-xl"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${category.color}20, transparent 70%)`,
                  transform: hoveredCategory === category.id ? 'scale(1.1)' : 'scale(0.9)'
                }}
              />

              {/* Card content */}
              <div
                className="relative p-6 rounded-lg border transition-all duration-500 h-full"
                style={{
                  // backgroundColor: 'rgba(17, 34, 64, 0.4)',
                  borderColor:
                    hoveredCategory === category.id ? category.color : 'rgba(100, 255, 218, 0.1)',
                  backdropFilter: 'blur(10px)',
                  transform: hoveredCategory === category.id ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow:
                    hoveredCategory === category.id
                      ? `0 20px 40px -10px ${category.color}30`
                      : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Icon and Title */}
                <div className="flex items-start gap-3 mb-4">
                  <span
                    className="text-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      opacity: 0.8
                    }}
                  >
                    {category.icon}
                  </span>
                  <h3
                    className="font-mono text-sm font-semibold leading-tight flex-1"
                    style={{
                      color: hoveredCategory === category.id ? category.color : 'var(--primary)',
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block px-3 py-1 text-xs font-mono rounded-full transition-all duration-300"
                      style={{
                        backgroundColor:
                          hoveredCategory === category.id
                            ? `${category.color}15`
                            : 'rgba(100, 255, 218, 0.05)',
                        color: hoveredCategory === category.id ? category.color : 'var(--text)',
                        border: `1px solid ${
                          hoveredCategory === category.id ? category.color : 'rgba(100, 255, 218, 0.1)'
                        }`,
                        transform:
                          hoveredCategory === category.id ? 'translateY(-2px)' : 'translateY(0)',
                        animationDelay: `${skillIndex * 0.05}s`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Accent line at bottom */}
                <div
                  className="absolute bottom-0 left-0 h-1 rounded-b-lg transition-all duration-500"
                  style={{
                    backgroundColor: category.color,
                    width: hoveredCategory === category.id ? '100%' : '0%'
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Decorative floating elements */}
        <div className="absolute top-20 right-10 w-64 h-64 opacity-10 pointer-events-none">
          <div
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, var(--primary), transparent)',
              animation: 'float 8s ease-in-out infinite'
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(20px, -20px) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg);
          }
        }

        @keyframes gridPulse {
          0%, 100% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.1;
          }
        }
      `}</style>
    </section>
  );
});

TechnicalSkills.displayName = 'TechnicalSkills';
export default TechnicalSkills;