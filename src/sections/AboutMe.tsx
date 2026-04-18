import { forwardRef } from 'react';

const AboutMe = forwardRef<HTMLElement>((_, ref) => (
  <section
    ref={ref}
    id="about"
    className="section px-6"
  >
    <div className="container max-w-6xl mx-auto">
      <div className="flex items-center mb-10">
        <h2 className="section-heading font-bold font-mono mr-4" style={{ color: 'var(--primary)' }}>
          01. About Me
        </h2>
        <div className="flex-1 h-px bg-gray-600"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-10 items-start max-h-90%">
        <div className="md:col-span-2">
          <div className="space-y-4 text-lg" style={{ color: 'var(--text)' }}>
            <p
              className="max-w-2xl text-lg leading-relaxed mb-6"
              style={{ color: 'var(--text)' }}
            >
              Hello! I’m a Computer Science graduate who builds full-stack websites and web applications. I focus on making interfaces that are simple, responsive, and easy to use, with clean code behind them.
              <br />
              <br />
              I graduated from{' '}
              <span style={{ color: 'var(--accent)' }}>UC Santa Cruz</span>, where I worked on projects involving React, Firebase, and backend systems. My work includes building booking platforms, dashboards, and tools that people can actually use.
              <br />
              <br />
              Outside of coding, I enjoy going to the beach, working on side projects, and cooking. I like building things, improving them over time, and sharing them with others.
            </p>
          </div>
        </div>

        <div className="relative group">
          <div
            className="relative z-10 w-72 h-72 rounded border-2 transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 overflow-hidden"
            style={{ borderColor: 'var(--highlight)', backgroundColor: 'var(--surface)' }}
          >
            <div
              className="w-full h-full flex items-center justify-center text-6xl"
              style={{ backgroundColor: 'var(--surface)' }}
            >
              👩‍💻
            </div>
            <div
              className="absolute inset-0 bg-pink-300 bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-0"
              style={{ backgroundColor: 'var(--highlight)', opacity: 0.3 }}
            ></div>
          </div>
          <div
            className="absolute top-4 left-4 w-72 h-72 border-2 -z-10"
            style={{ borderColor: 'var(--highlight)' }}
          ></div>
        </div>
      </div>
    </div>
  </section>
));

AboutMe.displayName = 'AboutMe';

export default AboutMe;
