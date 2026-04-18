import { forwardRef } from 'react';

const AboutMe = forwardRef<HTMLElement>((_, ref) => (
  <section
    ref={ref}
    id="about"
    className="section px-6"
  >
    <div className="container max-w-5xl mx-auto">
      <div className="flex items-center mb-8">
        <h2
          className="section-heading font-bold font-mono mr-4"
          style={{ color: 'var(--primary)' }}
        >
          03. About Me
        </h2>
        <div className="flex-1 h-px bg-gray-600"></div>
      </div>

      <div className="space-y-8" style={{ color: 'var(--text)' }}>
        <div className="space-y-5 text-base sm:text-lg leading-7 sm:leading-8">
          <p>
            I’m Arely, a web developer who builds websites for small businesses,
            organizations, and individuals who want a stronger online presence.
          </p>

          <p>
            I started creating websites because web development felt like the right
            mix of design and problem-solving.
          </p>

          <p>
            Over time, that grew into building sites for people who wanted something
            more personal than a template. I enjoy working closely with clients to
            turn ideas into clear, functional websites.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="about-card">
            <h3>Why I Build Websites</h3>
            <p>
              I combine design and development to create websites that feel
              personal, polished, and easy to use.
            </p>
          </div>

          <div className="about-card">
            <h3>What I Focus On</h3>
            <p>
              Polished, responsive websites with clear structure and use.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
));

AboutMe.displayName = 'AboutMe';

export default AboutMe;