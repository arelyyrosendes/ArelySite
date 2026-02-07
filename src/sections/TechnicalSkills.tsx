import React, { forwardRef } from 'react';

const TechnicalSkills = forwardRef<HTMLElement>((_, ref) => (
  <section ref={ref} id="skills" className="section py-20 px-6">
    <div className="container max-w-6xl mx-auto">

      {/* Section Header */}
      <div className="flex items-center mb-12">
        <h2 className="text-3xl font-bold font-mono mr-4" style={{ color: 'var(--primary)' }}>
          02. Technical Skills
        </h2>
        <div className="flex-1 h-px bg-gray-600"></div>
      </div>

      {/* Skills Lists */}
      <div className="grid md:grid-cols-2 gap-10 font-mono text-sm" style={{ color: 'var(--text)' }}>
        {/* Column 1 */}
        <div className="space-y-6">
          <div>
            <p className="text-base mb-2" style={{ color: 'var(--primary)' }}>Programming Languages</p>
            <p>Python • C/C++ • Java • MIPS Assembly • Bash/Shell</p>
          </div>

          <div>
            <p className="text-base mb-2" style={{ color: 'var(--primary)' }}>Web Tools</p>
            <p>JavaScript • HTML • CSS</p>
          </div>

          <div>
            <p className="text-base mb-2" style={{ color: 'var(--primary)' }}>Operating Systems</p>
            <p>Linux • MacOS</p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-6">
          <div>
            <p className="text-base mb-2" style={{ color: 'var(--primary)' }}>DevOps Tools</p>
            <p>Git • GitLab • OpenShift • Kubernetes • Docker • OpenAPI</p>
          </div>

          <div>
            <p className="text-base mb-2" style={{ color: 'var(--primary)' }}>Certifications</p>
            <p>AWS (Amazon Web Services)</p>
          </div>
        </div>
      </div>
    </div>
  </section>
));

TechnicalSkills.displayName = 'TechnicalSkills';

export default TechnicalSkills;
