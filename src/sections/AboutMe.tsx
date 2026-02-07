import { forwardRef } from 'react';

const AboutMe = forwardRef<HTMLElement>((_, ref) => (
  <section
    ref={ref}
    id="about"
    className="pt-10 pb-6 px-6"
  >
    <div className="container max-w-6xl mx-auto">
      <div className="flex items-center mb-10">
        <h2 className="text-3xl font-bold font-mono mr-4" style={{ color: 'var(--primary)' }}>
          01. About Me
        </h2>
        <div className="flex-1 h-px bg-gray-600"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-2">
          <div className="space-y-4 text-lg" style={{ color: 'var(--text)' }}>
            <p
              className="max-w-2xl text-lg leading-relaxed mb-6"
              style={{ color: 'var(--text)' }}
            >
              Hello! I’m a Computer Science student passionate about building intuitive,
              user-focused digital experiences. I enjoy combining clean functionality with
              thoughtful design to create interfaces that feel seamless and accessible.
              I’m currently completing my degree at{' '}
              <span style={{ color: 'var(--accent)' }}>UC Santa Cruz</span>, with a focus on
              front-end engineering, UI/UX, and full-stack development.
              <br />
              <br />
              Outside of coding, I love spending time at the beach, working on creative side
              projects, and experimenting in the kitchen—cooking is my favorite creative
              outlet beyond tech. I enjoy exploring new ideas, refining details, and sharing
              what I build with others.
              <br />
              <br />
              I’m driven by curiosity, collaboration, and turning ideas into polished,
              impactful products.
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
