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

        {/* Company tabs */}
        <div className="flex flex-col gap-4 mb-8 overflow-x-auto">
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => onSelect(index)}
              className={`whitespace-nowrap px-4 py-3 text-left font-mono text-sm border-l-2 border-b-2 transition-all duration-200 ${
                selectedIndex === index
                  ? 'border-pink-300 bg-pink-300 bg-opacity-10 text-pink-300'
                  : 'border-gray-600 text-gray-400 hover:bg-gray-800'
              }`}
              style={
                selectedIndex === index
                  ? { borderColor: 'var(--highlight)', backgroundColor: 'rgba(211, 184, 175, 0.15)', color: 'var(--primary)' }
                  : { borderColor: 'var(--border)', color: 'var(--muted)', backgroundColor: 'transparent' }
              }
            >
              {exp.title} - {exp.company}
            </button>
          ))}
        </div>

        {/* Experience details */}
        {experiences[selectedIndex] && (
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">{experiences[selectedIndex].title}</h3>
            <p className="text-gray-400">
              {experiences[selectedIndex].company} | {experiences[selectedIndex].location} | {experiences[selectedIndex].period}
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {experiences[selectedIndex].description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            <div className="mt-2 flex flex-wrap gap-2">
              {experiences[selectedIndex].technologies.map((tech, i) => (
                <span key={i} className="text-sm bg-gray-700 px-2 py-1 rounded">{tech}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
);

Experience.displayName = 'Experience';

export default Experience;
