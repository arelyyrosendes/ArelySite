import { forwardRef } from 'react';

const projectInquiryLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSfmvM-wNyIlgRc5ezSuVZkDBDrGCHdJ8JvNu5fY9ax_VsTDZw/viewform?usp=publish-editor";

const Resume = forwardRef<HTMLElement>((_, ref) => (
  <section
    ref={ref}
    id="resume"
    className="section py-20 px-6"
  >
    <div className="container max-w-5xl mx-auto relative z-10">
      <div className="flex items-center mb-10">
        <h2
          className="section-heading font-bold font-mono mr-4"
          style={{ color: 'var(--primary)' }}
        >
          05. Work With Me
        </h2>
        <div className="flex-1 h-px bg-gray-600"></div>
      </div>

      <h3
        className="text-4xl font-bold mb-6 text-center"
        style={{ color: 'var(--primary)' }}
      >
        Let’s build a website that works for you.
      </h3>

      <p
        className="text-lg mb-12 max-w-lg mx-auto leading-relaxed text-center"
        style={{ color: 'var(--text)' }}
      >
        I develop custom websites that present your work,
        improve user experience, and make it easy for people to reach you!
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        {/* Primary CTA */}
        <a
          href={projectInquiryLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 border rounded font-mono transition-all duration-300 hover:-translate-y-1"
          style={{
            color: 'var(--primary)',
            borderColor: 'var(--primary)'
          }}
        >
          Let's Make A Website!
        </a>

        <a
          href="/Arely Rosendes Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 border rounded font-mono transition-all duration-300 hover:-translate-y-1"
          style={{
            color: 'var(--primary)',
            borderColor: 'var(--primary)'
          }}
        >
          View Resume
        </a>
      </div>
    </div>
  </section>
));

Resume.displayName = 'Resume';

export default Resume;
