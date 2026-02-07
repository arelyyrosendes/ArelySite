import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Menu, X, ArrowRight, MapPin } from 'lucide-react';
import AboutMe from './sections/AboutMe';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import TechnicalSkills from './sections/TechnicalSkills';

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const resumeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsLoaded(true);

    const updateTypingWidth = () => {
      const el = nameRef.current;
      if (!el) return;
      const textLength = el.textContent?.length ?? 0;
      const naturalWidth = el.scrollWidth;
      const parentWidth = el.parentElement?.clientWidth ?? naturalWidth;
      const maxWidth = Math.max(0, parentWidth - 4);
      const targetWidth = Math.min(naturalWidth, maxWidth);
      const buffer = 4;
      const finalWidth = Math.min(targetWidth + buffer, parentWidth);
      el.style.setProperty('--typing-target', `${targetWidth}px`);
      el.style.setProperty('--typing-target-final', `${finalWidth}px`);
      el.style.setProperty('--typing-steps', `${Math.max(textLength, 1)}`);
    };

    const measureSoon = () => requestAnimationFrame(updateTypingWidth);
    measureSoon();
    if ((document as any).fonts?.ready) {
      (document as any).fonts.ready.then(measureSoon);
    }

    const handleResize = () => measureSoon();
    window.addEventListener('resize', handleResize);

    const ro = new ResizeObserver(() => measureSoon());
    if (nameRef.current) ro.observe(nameRef.current);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);

      const sections = [
        { id: 'hero', ref: heroRef },
        { id: 'about', ref: aboutRef },
        { id: 'skills', ref: skillsRef },
        { id: 'experience', ref: experienceRef },
        { id: 'projects', ref: projectsRef },
        { id: 'resume', ref: resumeRef }
      ];

      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = section.ref.current;
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      ro.disconnect();
    };
  }, []);

  const scrollToSection = (elementRef: React.RefObject<HTMLElement | null>, offset: number = 92) => {
    const element = elementRef.current;
    if (!element) return;
    const top = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top - offset, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // projects - use public/ paths by referencing root ("/ChariWork.png")
  const projects = [
    {
      title: "ChariWork",
      description:
        "A website that rounds up your changes from everyday purchases and donates it to charity. Built with React, Node.js, and Neon Database, featuring secure payment integration and real-time donation tracking.",
      tech: ["React", "Node.js", "Neon", "Plaid API", "Charities API"],
      github: "https://github.com",
      demo: null,
      featured: true,
      image: "/ChariWork.png"
    },
    {
      title: "UCSC Baskin Booking Website",
      description:
        "Tour booking website for UCSC's Baskin Engineering Student Ambassador program. Built with React and Firebase, featuring real-time scheduling, admin dashboard, and secure authentication.",
      tech: ["Typescript", "React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/natanielj/BESABooking",
      demo: "https://besabooking.vercel.app",
      featured: true,
      image: "/BESA_Booking.png"
    },
    {
      title: "Portfolio for UCLA EE Engineer",
      description:
        "Personal portfolio website for a UCLA electrical engineering student, showcasing projects and skills with a sleek, modern design. Built with HTML and CSS",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/agonzalez85/andys-Website",
      demo: "https://andygonzalez.me/",
      featured: true,
      image: "/andy_website.png"
    },
    {
      title: "Meal Planner App",
      description:
        "A meal planning application that generates weekly meal plans and shopping lists based on user dietary preferences and restrictions. Built with React and Javascript.",
      tech: ["React", "JavaScript", "Firebase"],
      github: "https://github.com/arelyyrosendes/meal-planner-app",
      demo: null,
      featured: false,
      image: "🌱"
    }
  ];

  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Baskin Engineering, UC Santa Cruz",
      location: "Santa Cruz, CA",
      period: "Summer 2025",
      description: [
        "Developed a React-based tour booking website for UCSC's BESA program, enabling prospective students to schedule engineering building tours",
        "Built a user-friendly admin dashboard for managing tours, BESAs, and office hours",
        "Integrated Firebase Authentication for secure admin access and Firestore for real-time database updates",
        "Collaborated with teammates to design front-end components and ensure responsive, mobile-friendly layouts"
      ],
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS", "React Router"]
    },
    {
      title: "DevOps Intern",
      company: "Lawrence Livermore National Laboratory",
      location: "Livermore, CA",
      period: "Summer 2024",
      description: [
        "Hosted and deployed an AI interface locally using Docker and Kubernetes, eliminating third-party dependencies",
        "Managed containerized applications and orchestrated services in a Linux environment",
        "Implemented CI/CD pipelines and automated deployments for internal applications",
        "Documented processes and collaborated with senior engineers on AI integration and system reliability"
      ],
      technologies: ["Docker", "Kubernetes", "Linux", "OpenShift", "CI/CD"]
    },
    {
      title: "Front-End Supervisor",
      company: "Burlington Stores",
      location: "Santa Cruz, CA",
      period: "2022 - 2023",
      description: [
        "Supervised and trained a team of cashiers and floor associates to improve workflow and customer service",
        "Managed front-end operations, ensuring accuracy in transactions and store presentation",
        "Implemented process improvements to optimize checkout efficiency",
        "Assisted in onboarding and mentoring new employees"
      ],
      technologies: ["POS Systems", "Team Leadership", "Customer Service"]
    },
    {
      title: "Guest Advocate",
      company: "Target",
      location: "Santa Cruz, CA",
      period: "2021 - 2022",
      description: [
        "Provided exceptional customer service, resolving inquiries and complaints promptly",
        "Guided guests through store policies and promotions to enhance their shopping experience",
        "Collaborated with team members to maintain a clean and organized store environment",
        "Supported onboarding and training of new team members"
      ],
      technologies: ["Customer Service", "Problem Solving", "Team Collaboration"]
    },
    {
      title: "Cashier",
      company: "Ross Dress for Less",
      location: "Santa Cruz, CA",
      period: "2020 - 2021",
      description: [
        "Processed transactions efficiently while maintaining accuracy and speed",
        "Assisted customers with product inquiries and returns, ensuring a positive shopping experience",
        "Maintained store appearance and organized merchandise",
        "Worked collaboratively with team members to achieve daily operational goals"
      ],
      technologies: ["POS Systems", "Customer Service", "Teamwork"]
    }
  ];

  const navItems = [
    { label: 'About', ref: aboutRef, id: 'about', subpages: [] },
    { label: 'Skills', ref: skillsRef, id: 'skills', subpages: [] },
    {
      label: 'Experience',
      ref: experienceRef,
      id: 'experience',
      subpages: experiences.map(exp => ({
        label: exp.company,
        action: () => {
          scrollToSection(experienceRef);
          setTimeout(() => {
            const index = experiences.findIndex(e => e.company === exp.company);
            setSelectedIndex(index);
          }, 450);
        }
      }))
    },
    { label: 'Projects', ref: projectsRef, id: 'projects', subpages: [] },
    { label: 'Resume', ref: resumeRef, id: 'resume', subpages: [] }
  ];

  const renderProjectImage = (image: string | undefined, title: string): JSX.Element | null => {
    if (!image) return null;
    if (typeof image === 'string' && image.startsWith('/')) {
      return (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center' }}
        />
      );
    }
    if (
      typeof image === 'string' &&
      (image.endsWith('.png') || image.endsWith('.jpg') || image.endsWith('.jpeg') || image.endsWith('.webp'))
    ) {
      const path = image.startsWith('/') ? image : `/${image}`;
      return (
        <img
          src={path}
          alt={title}
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center' }}
        />
      );
    }
    return <div className="text-8xl">{image}</div>;
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: 'var(--bg)',
        color: 'var(--text)'
      }}
    >
      {/* Subtle background wash */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10"
        style={{
          background:
            'radial-gradient(900px 500px at 15% 10%, rgba(198,165,154,0.22), transparent 60%), radial-gradient(900px 500px at 85% 20%, rgba(133,155,120,0.20), transparent 60%)'
        }}
      />

      {/* Navigation */}
      <nav
        className="fixed top-0 w-full z-40 transition-all duration-300"
        style={{
          backgroundColor: 'rgba(246,240,233,0.92)',
          borderBottom: '1px solid var(--border)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 6px 16px rgba(80, 84, 94, 0.12)'
        }}
      >
        <div className="container max-w-6xl mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <button
              className="flex items-center gap-3 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => scrollToSection(heroRef, 0)}
              aria-label="Go to top"
            >
              <img src="/images/Logo.png" alt="Logo" className="h-12 w-auto" />
              <span className="hidden sm:block font-semibold tracking-tight" style={{ color: 'var(--safe)' }}>
                Arely Rosendes
              </span>
            </button>

            {/* Desktop Menu */}
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.ref)}
                  className="text-sm font-mono transition-colors duration-200 hover:opacity-90"
                  style={{
                    color: activeSection === item.id ? 'var(--safe)' : 'var(--muted)'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
              style={{ color: 'var(--safe)', border: '1px solid var(--border)', backgroundColor: 'rgba(253,248,243,0.6)' }}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div
              className="md:hidden mt-3 p-4 rounded-xl"
              style={{
                backgroundColor: 'rgba(253,248,243,0.92)',
                border: '1px solid var(--border)'
              }}
            >
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.ref)}
                    className="text-left py-3 font-mono text-sm"
                    style={{ color: 'var(--safe)' }}
                  >
                    {item.label}
                  </button>
                ))}

                <button
                  onClick={() => window.open('/resume.pdf', '_blank')}
                  className="mt-2 px-4 py-2 rounded-md font-mono text-sm border"
                  style={{ borderColor: 'var(--border)', color: 'var(--safe)' }}
                >
                  Open Resume PDF
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Fixed Social Links (desktop) */}
      <div className="fixed left-6 bottom-0 z-30 hidden lg:block">
        <div className="flex flex-col items-center space-y-5">
          {[
            { icon: <Github size={20} />, href: "https://github.com/arelyyrosendes" },
            { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/arelyrosendes/" },
            { icon: <Mail size={20} />, href: "mailto:arelyrosendes@gmail.com" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="transition-all duration-300 hover:-translate-y-1"
              style={{ color: 'var(--muted)' }}
              aria-label="social link"
            >
              {social.icon}
            </a>
          ))}
          <div className="w-px h-20" style={{ backgroundColor: 'var(--border)' }} />
        </div>
      </div>

      {/* Fixed Email (desktop) */}
      <div className="fixed right-6 bottom-0 z-30 hidden lg:block">
        <div className="flex flex-col items-center space-y-5">
          <a
            href="mailto:arelyrosendes@gmail.com"
            className="text-xs font-mono transition-all duration-300 hover:-translate-y-1 tracking-wide"
            style={{ color: 'var(--muted)', writingMode: 'vertical-lr' }}
          >
            arelyrosendes@gmail.com
          </a>
          <div className="w-px h-20" style={{ backgroundColor: 'var(--border)' }} />
        </div>
      </div>

      {/* Main content wrapper: offset for fixed nav */}
      <main className="pt-24">
        {/* Hero Section */}
        <section
          ref={heroRef}
          id="hero"
          className="section hero min-h-[calc(100vh-96px)] flex items-center px-6"
        >
          <div className="container max-w-6xl mx-auto w-full">
            <div className={`hero-card-modern ${isLoaded ? 'hero-card-ready' : ''}`}>
              <div className="hero-copy">
                <p className="hero-kicker">Computer Science • Frontend & Full-Stack</p>
                <h1 ref={nameRef} className="hero-title typing">Arely Rosendes</h1>
                <h2 className="hero-subtitle">I build websites!</h2>
                <p className="hero-body">
                  I’m a computer science student focused on building clean, accessible interfaces with strong engineering foundations.
                  Currently earning my degree at UC Santa Cruz.
                </p>
                <div className="hero-actions">
                  <div className="hero-socials">
                    <a className="icon-btn" href="https://github.com/arelyyrosendes" aria-label="GitHub">
                      <Github size={26} />
                    </a>
                    <a className="icon-btn linkedin" href="https://www.linkedin.com/in/arelyrosendes/" aria-label="LinkedIn">
                      <Linkedin size={26} />
                    </a>
                  </div>
                  <button
                    className="btn resume-btn"
                    onClick={() => scrollToSection(resumeRef)}
                  >
                    Resume <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              <div className="hero-visual">
                <div className="hero-visual-backdrop" />
                <div className="hero-visual-card">
                  <img
                    src="/images/arelyrosendes.jpg"
                    alt="Arely Rosendes portrait"
                    className="hero-visual-img"
                  />
                </div>
                <div className="hero-location hero-location-below">
                  <MapPin size={20} />
                  <span>UC Santa Cruz</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AboutMe ref={aboutRef} />
        <TechnicalSkills ref={skillsRef} />

        <Experience
          ref={experienceRef}
          experiences={experiences}
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex}
        />

        <Projects
          ref={projectsRef}
          projects={projects}
          renderProjectImage={renderProjectImage}
        />

        <Resume ref={resumeRef} />
      </main>

      {/* Footer */}
      <footer className="py-10 px-6 text-center">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-4 md:hidden">
            <div className="flex space-x-6">
              {[
                { icon: <Github size={20} />, href: "https://github.com/arelyyrosendes" },
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/arelyrosendes/" },
                { icon: <Mail size={20} />, href: "mailto:arelyrosendes@gmail.com" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="transition-all duration-300 hover:-translate-y-1"
                  style={{ color: 'var(--muted)' }}
                  aria-label="social link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <p className="font-mono text-sm mt-6" style={{ color: 'var(--muted)' }}>
            Built with React & TypeScript by Arely Rosendes
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
