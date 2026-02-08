import { forwardRef } from 'react';

const Resume = forwardRef<HTMLElement>((_, ref) => (
  <section
    ref={ref}
    id="resume"
    className="section py-20 px-6">
    <div className="container max-w-6xl mx-auto relative z-10">
      <div className="flex items-center mb-10">
        <h2 className="section-heading font-bold font-mono mr-4" style={{ color: 'var(--primary)' }}>
          05. Resume
        </h2>
        <div className="flex-1 h-px bg-gray-600"></div>
      </div>

      <h3 className="text-4xl font-bold mb-6 text-center" style={{ color: 'var(--primary)' }}>
        View/Download My Resume
      </h3>

      <p className="text-lg mb-12 max-w-lg mx-auto leading-relaxed text-center" style={{ color: 'var(--text)' }}>
        You can download a PDF version of my resume or view it directly in another tab.
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        {/* Download Resume */}
        <a
          href="/images/Arely Rosendes Resume.pdf"
          download
          className="inline-block px-8 py-4 border border-pink-300 rounded font-mono transition-all duration-300 hover:bg-pink-300 hover:bg-opacity-10 hover:-translate-y-1"
          style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>
          Download Resume
        </a>

        {/* View Resume */}
        <a
          href="/images/Arely Rosendes Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 border border-pink-300 rounded font-mono transition-all duration-300 hover:bg-pink-300 hover:bg-opacity-10 hover:-translate-y-1"
          style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>
          View Resume
        </a>
      </div>
    </div>
  </section>
));

Resume.displayName = 'Resume';

export default Resume;
