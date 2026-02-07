import React, { forwardRef } from 'react';

type ExperienceEntry = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
};

type ExperienceProps = {
  experiences: ExperienceEntry[];
  selectedIndex: number;
  onSelect: (index: number) => void;
};

const Experience = forwardRef<HTMLElement, ExperienceProps>(
  ({ experiences, selectedIndex, onSelect }, ref) => (
    <section
      ref={ref}
      id="experience"
      className="section py-20 px-6"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="flex items-center mb-16">
          <h2 className="text-3xl font-bold font-mono mr-4" style={{ color: 'var(--primary)' }}>
            03. Experience
          </h2>
          <div className="flex-1 h-px bg-gray-600"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Company list (left) */}
          <div className="flex flex-col gap-3">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => onSelect(index)}
                className="text-left rounded-lg px-4 py-3 font-mono text-sm transition-all duration-200 border hover:-translate-y-0.5"
                style={
                  selectedIndex === index
                    ? {
                        borderColor: 'var(--highlight)',
                        backgroundColor: 'rgba(211, 184, 175, 0.18)',
                        color: 'var(--primary)',
                        boxShadow: '0 10px 24px rgba(80,84,94,0.12)'
                      }
                    : {
                        borderColor: 'var(--border)',
                        backgroundColor: 'var(--surface)',
                        color: 'var(--muted)',
                        boxShadow: '0 6px 14px rgba(80,84,94,0.08)'
                      }
                }
              >
                <div className="font-semibold">{exp.title}</div>
                <div className="text-xs" style={{ color: 'var(--muted)' }}>
                  {exp.company}
                </div>
              </button>
            ))}
          </div>

          {/* Experience details (right) */}
          {experiences[selectedIndex] && (
            <div className="md:col-span-2">
              <div
                className="p-6 rounded-xl border"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--border)',
                  boxShadow: '0 14px 36px rgba(80,84,94,0.12)'
                }}
              >
                <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--primary)' }}>
                  {experiences[selectedIndex].title}
                </h3>
                <p className="mb-4" style={{ color: 'var(--muted)' }}>
                  {experiences[selectedIndex].company} · {experiences[selectedIndex].location} · {experiences[selectedIndex].period}
                </p>
                <ul className="list-disc list-inside space-y-1 mb-4 text-sm" style={{ color: 'var(--text)' }}>
                  {experiences[selectedIndex].description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {experiences[selectedIndex].technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: 'rgba(133,155,120,0.18)',
                        color: 'var(--safe)',
                        border: '1px solid var(--border)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
);

Experience.displayName = 'Experience';

export default Experience;
