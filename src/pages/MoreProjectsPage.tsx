import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Projects from '../sections/Projects';
import { projects } from '../data/projects';
import { renderProjectImage } from '../utils/renderProjectImage';

const MoreProjectsPage = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: 'var(--bg)',
        color: 'var(--text)'
      }}
    >
      <header
        className="sticky top-0 z-30 backdrop-blur-xl"
        style={{
          backgroundColor: 'rgba(246,240,233,0.9)',
          borderBottom: '1px solid var(--border)'
        }}
      >
        <div className="container max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-sm transition-transform duration-200 hover:-translate-y-0.5"
            style={{ color: 'var(--primary)' }}
          >
            <ArrowLeft size={18} />
            Back to main site
          </Link>
          <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
            Extra projects & explorations
          </span>
        </div>
      </header>

      <div className="container max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="text-center mb-10">
          <p className="font-mono text-sm uppercase tracking-[0.18em]" style={{ color: 'var(--muted)' }}>
            Extended Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--primary)' }}>
            More Projects
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: 'var(--text)' }}>
            A few extra projects I've also worked on!
          </p>
        </div>
      </div>

      <Projects
        projects={projects}
        renderProjectImage={renderProjectImage}
        showAll
        sectionTitle=""
      />
    </div>
  );
};

export default MoreProjectsPage;
