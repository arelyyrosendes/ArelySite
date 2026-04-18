import { forwardRef, useState } from 'react';

const TechnicalSkills = forwardRef<HTMLElement>((_, ref) => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const skillCategories = [
    {
      id: 'websites',
      title: 'Websites I Build',
      skills: [
        'Portfolio websites',
        'Business websites',
        'Web/Mobile Apps'
      ],
      color: '#50545e',
      icon: '🌐'
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      skills: [
        'React',
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS',
        'Tailwind CSS'
      ],
      color: '#50545e',
      icon: '⚛️'
    },
    {
      id: 'backend',
      title: 'Backend & Integrations',
      skills: [
        'Databases',
        'Authentication',
        'Firestore',
        'REST APIs',
        'Forms and data handling'
      ],
      color: '#50545e',
      icon: '⚙️'
    },
    {
      id: 'focus',
      title: 'What I Focus On',
      skills: [
        'Clean layouts',
        'Simple user flows',
        'Clear content structure',
      ],
      color: '#50545e',
      icon: '🎨'
    },
    {
      id: 'launch',
      title: 'Launch & Maintenance',
      skills: [
        'Website Deployment',
        'Content Updates',
        'Site Improvements',
        'Ongoing support'
      ],
      color: '#50545e',
      icon: '🚀'
    },
    {
      id: 'workflow',
      title: 'Workflow',
      skills: [
        'Client Collaboration',
        'Feedback-based revisions',
        'Github/Gitlab',
        'Vite',
      ],
      color: '#50545e',
      icon: '🛠️'
    }
  ];

  return (
    <section ref={ref} id="skills" className="section py-20 px-6 relative overflow-hidden">
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

      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="flex items-center mb-10">
          <h2
            className="section-heading font-bold font-mono mr-4"
            style={{ color: 'var(--primary)' }}
          >
            02. What I Offer
          </h2>
          <div className="flex-1 h-px bg-gray-600"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const isHovered = hoveredCategory === category.id;
            const isDimmed = hoveredCategory !== null && hoveredCategory !== category.id;

            return (
              <div
                key={category.id}
                className="group relative"
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
                  opacity: isDimmed ? 0.45 : 1,
                  transition: 'opacity 0.3s ease'
                }}
              >
                <div
                  className="absolute inset-0 rounded-lg transition-all duration-500 opacity-0 group-hover:opacity-100 blur-xl pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${category.color}20, transparent 70%)`,
                    transform: isHovered ? 'scale(1.08)' : 'scale(0.95)'
                  }}
                />

                <div
                  className="relative p-6 rounded-lg border transition-all duration-500 h-full"
                  style={{
                    borderColor: isHovered ? category.color : 'rgba(100, 255, 218, 0.12)',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(10px)',
                    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                    boxShadow: isHovered
                      ? `0 20px 40px -10px ${category.color}30`
                      : '0 10px 30px -15px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <span
                      className="text-2xl transition-transform duration-300 group-hover:scale-110"
                      style={{ opacity: 0.85 }}
                    >
                      {category.icon}
                    </span>
                    <h3
                      className="font-mono text-sm font-semibold leading-tight flex-1"
                      style={{
                        color: isHovered ? category.color : 'var(--primary)',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="inline-block px-3 py-1 text-xs font-mono rounded-full transition-all duration-300"
                        style={{
                          backgroundColor: isHovered
                            ? `${category.color}15`
                            : 'rgba(100, 255, 218, 0.05)',
                          color: isHovered ? category.color : 'var(--text)',
                          border: `1px solid ${
                            isHovered ? category.color : 'rgba(100, 255, 218, 0.1)'
                          }`,
                          transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                          animationDelay: `${skillIndex * 0.05}s`
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div
                    className="absolute bottom-0 left-0 h-1 rounded-b-lg transition-all duration-500"
                    style={{
                      backgroundColor: category.color,
                      width: isHovered ? '100%' : '0%'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

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
