import React, { forwardRef } from 'react';

const Resume = forwardRef<HTMLElement>((_, ref) => (
  <section
    ref={ref}
    id="resume"
    className="section py-20 px-6">
    <div className="container max-w-2xl mx-auto text-center">
      <div className="flex items-center justify-center mb-8">
        <h2 className="text-3xl font-bold font-mono mr-4" style={{ color: 'var(--primary)' }}>
          05. View My Resume!
        </h2>
      </div>

      <h3 className="text-4xl font-bold mb-6" style={{ color: 'var(--primary)' }}>
        Download or View My Resume
      </h3>

      <p className="text-lg mb-12 max-w-lg mx-auto leading-relaxed" style={{ color: 'var(--text)' }}>
        You can download a PDF version of my resume or view it directly in your browser.
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        {/* Download Resume */}
        <a
          href="/resume.pdf"
          download
          className="inline-block px-8 py-4 border border-pink-300 rounded font-mono transition-all duration-300 hover:bg-pink-300 hover:bg-opacity-10 hover:-translate-y-1"
          style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>
          Download Resume
        </a>

        {/* View Resume */}
        <a
          href="/resume.pdf"
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
