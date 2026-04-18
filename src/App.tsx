import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ClipboardList, Github, Linkedin, Mail, Menu, X, MapPin } from 'lucide-react';
import AboutMe from './sections/AboutMe';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import TechnicalSkills from './sections/TechnicalSkills';

const Portfolio: React.FC = () => {
  const projectInquiryLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSfmvM-wNyIlgRc5ezSuVZkDBDrGCHdJ8JvNu5fY9ax_VsTDZw/viewform?usp=publish-editor";
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [, setIsScrolled] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const resumeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    const syncIsMobile = () => setIsMobile(window.innerWidth <= 900);
    syncIsMobile();
    window.addEventListener('resize', syncIsMobile);

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
        { id: 'projects', ref: projectsRef },
        { id: 'skills', ref: skillsRef },
        { id: 'about', ref: aboutRef },
        { id: 'experience', ref: experienceRef },
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
      window.removeEventListener('resize', syncIsMobile);
      ro.disconnect();
    };
  }, []);

  const scrollToSection = (elementRef: React.RefObject<HTMLElement | null>, offset: number = 60) => {
    const element = elementRef.current;
    if (!element) return;
    const top = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top - offset, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "UCSC Baskin Booking Website",
      description:
        "A scheduling platform for a university ambassador program that makes tour signups easier for prospective students and simpler for staff to manage. Built with React and Firebase with secure authentication, real-time scheduling, and an admin dashboard.",
      tech: ["Typescript", "React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/natanielj/BESABooking",
      demo: "https://besa-booking.vercel.app/",
      featured: true,
      image: "/images/BESA_Booking.gif"
    },
    {
      title: "ChariWork",
      description:
        "A polished product website for a donation platform that helps users round up purchases and give to charity. Built with React and Node.js, with payment integration, user flows, and live donation tracking.",
      tech: ["React", "Node.js", "Neon", "Plaid API", "Charities API"],
      github: "https://github.com/PouriaRez/ChariWork",
      demo: "https://chari-work-115.vercel.app/",
      featured: true,
      image: "/images/ChariWork.gif"
    },
    {
      title: "Portfolio for UCLA EE Engineer",
      description:
        "A personal branding website for an engineering student who needed a stronger online presence to showcase work, experience, and technical depth with a clean modern design.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/agonzalez85/andys-Website",
      demo: "https://andygonzalez.me/",
      featured: true,
      image: "/images/andy_website.gif"
    },
    {
      title: "Meal Planner App",
      description:
        "A user-focused web app that turns dietary preferences into weekly meal plans and shopping lists with a simple interface and clear interactions.",
      tech: ["React", "JavaScript", "Firebase"],
      github: "https://github.com/arelyyrosendes/meal-planner-app",
      demo: null,
      featured: false,
      image: "🌱"
    }
  ];

  const experiences = [
  {
    title: "Software Developer",
    company: "Baskin Engineering, UC Santa Cruz",
    location: "Santa Cruz, CA",
    period: "June 2025 – Present",
    description: [
      "Designed and shipped a production React website that supports real scheduling workflows for prospective students and internal staff",
      "Built an admin dashboard to manage tours, ambassadors, office hours, and availability from one place",
      "Implemented secure Firebase authentication and real-time Firestore data flows for a reliable day-to-day tool",
      "Delivered responsive interfaces that stay clear and usable across phones, tablets, and desktops"
    ],
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS", "React Router"]
  },
  {
    title: "DevOps Intern",
    company: "Lawrence Livermore National Laboratory",
    location: "Livermore, CA",
    period: "Summer 2024",
    description: [
      "Deployed and supported internal web tooling in a secure environment using Docker and Kubernetes",
      "Managed containerized services and Linux-based infrastructure with a focus on reliability and repeatability",
      "Implemented CI/CD workflows that reduced manual deployment work for internal tools",
      "Worked with senior engineers to strengthen documentation, maintenance practices, and delivery workflows"
    ],
    technologies: ["Docker", "Kubernetes", "Linux", "OpenShift", "CI/CD"]
  },
  {
    title: "Front-End Supervisor",
    company: "Burlington Stores",
    location: "Union City, CA",
    period: "2022 – 2023",
    description: [
      "Led a customer-facing team and learned how clear communication and smooth processes affect trust",
      "Managed fast-moving daily operations while maintaining accuracy and consistency under pressure",
      "Introduced workflow improvements that reduced delays and improved team coordination",
      "Trained and supported new team members through onboarding and daily operations"
    ],
    technologies: ["POS Systems", "Team Leadership", "Customer Service"]
  },
  {
    title: "Guest Advocate",
    company: "Target",
    location: "Hayward, CA",
    period: "2021 – 2022",
    description: [
      "Delivered high-quality customer service by resolving issues and guiding guests through store processes",
      "Collaborated with team members to maintain store organization and operational standards",
      "Supported training and onboarding of new employees in a fast-paced environment"
    ],
    technologies: ["Customer Service", "Problem Solving", "Team Collaboration"]
  },
  {
    title: "Cashier",
    company: "Ross Dress for Less",
    location: "Union City, CA",
    period: "2020 – 2021",
    description: [
      "Handled high-volume transactions with speed and accuracy",
      "Assisted customers with inquiries, returns, and in-store support",
      "Worked closely with team members to meet daily operational goals"
    ],
    technologies: ["POS Systems", "Customer Service", "Teamwork"]
  }
];

  const navItems = [
    { label: 'Projects', ref: projectsRef, id: 'projects' },
    { label: 'Services', ref: skillsRef, id: 'skills' },
    { label: 'About', ref: aboutRef, id: 'about' },
    { label: 'Experience', ref: experienceRef, id: 'experience' },
    { label: 'Contact', ref: resumeRef, id: 'resume' }
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
        <div className="container max-w-6xl mx-auto px-6 py-3" style={{ paddingInline: '14px' }}>
          <div className="flex justify-between items-center">
            <div
              className="flex items-center gap-1 px-1 py-1 rounded-lg"
            >
              <button
                className="flex items-center gap-3 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                onClick={() => scrollToSection(heroRef, 0)}
                aria-label="Go to top"
                style={{ color: 'var(--primary-contrast)' }}
              >
                <img src="/images/Logo.png" alt="Logo" className="h-12 w-12" />
              </button>
            </div>

            {/* Desktop Menu */}
            <div className={`${isMobile ? 'hidden' : 'flex'} items-center gap-8`}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.ref)}
                  className="nav-link text-sm font-mono transition-colors duration-200 hover:opacity-90"
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
              className={`${isMobile ? 'flex' : 'hidden'} p-2 rounded-md`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
              style={{ color: 'var(--safe)', border: '1px solid var(--border)', backgroundColor: 'rgba(253,248,243,0.6)' }}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && isMobile && (
            <div
              className="mt-3 p-4 rounded-xl"
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
                    className="nav-link text-left py-3 font-mono text-sm"
                    style={{ color: 'var(--safe)' }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main content wrapper*/}
      <main className="pt-24">
        {/* Hero Section */}
        <section
          ref={heroRef}
          id="hero"
          className="section hero min-h-[calc(95vh-96px)] flex items-center px-6"
        >
          <div className="container max-w-5xl mx-auto w-full">
            <div
              key={isMobile ? 'hero-mobile' : 'hero-desktop'}
              className={`hero-card-modern ${isLoaded ? 'hero-card-ready' : ''}`}
            >
              <div className="hero-copy">
                <p className="hero-kicker">Websites for growing businesses and organizations</p>
                <h1 ref={nameRef} className="hero-title typing">Arely Rosendes</h1>
                <h2 className="hero-subtitle">Custom websites designed to grow your business.</h2>
                <p className="hero-body">
                  I’m a web developer and Computer Science graduate from{' '}
                  <span style={{ color: 'var(--natural)', fontWeight: 600 }}>UC Santa Cruz.</span>{' '}
                  I build websites that are easy to use, look professional, and turn visitors into real clients.
                </p>
                <div className="hero-actions">
                  <div className="hero-primary-cta">
                    <div className="hero-cta-row">
                      <button
                        className="cta-btn cta-btn-primary"
                        onClick={() => scrollToSection(resumeRef)}
                      >
                        Start Your Project
                        <ArrowRight size={18} />
                      </button>
                      <button
                        className="cta-btn cta-btn-secondary"
                        onClick={() => scrollToSection(projectsRef)}
                      >
                        See My Work
                      </button>
                    </div>
                    <div className="hero-proof-point">✔ Built platforms used by 1,000+ users</div>
                  </div>
                  <div className="hero-socials">
                    <a
                      className="icon-btn hero-social-link"
                      href={projectInquiryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Project inquiry form"
                    >
                      <ClipboardList size={26} />
                      <span className="hero-social-tooltip">Inquiry Form</span>
                    </a>
                  <a className="icon-btn hero-social-link" href="https://github.com/arelyyrosendes" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                      <Github size={26} />
                      <span className="hero-social-tooltip">GitHub</span>
                    </a>
                    <a className="icon-btn linkedin hero-social-link" href="https://www.linkedin.com/in/arelyrosendes/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                      <Linkedin size={26} />
                      <span className="hero-social-tooltip">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="hero-visual">
                <div className="hero-visual-card">
                  <img
                    src="/images/arelyrosendes.png"
                    alt="Arely Rosendes portrait"
                    className="hero-visual-img"
                  />
                </div>
                <div className="hero-location hero-location-below">
                  <MapPin size={20} />
                  <span>Bay Area, California</span>
                </div>
                <div className="hero-availability-badge">
                  Available for new projects
                </div>
              </div>
            </div>
          </div>
        </section>

        <Projects
          ref={projectsRef}
          projects={projects}
          renderProjectImage={renderProjectImage}
        />

        <TechnicalSkills ref={skillsRef} />
        <AboutMe ref={aboutRef} />
        

        <Experience
          ref={experienceRef}
          experiences={experiences}
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex}
        />

        <Resume ref={resumeRef} />
      </main>

      {/* Footer */}
      <footer className="py-10 px-6 text-center">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-4 md:hidden">
            <div className="flex space-x-6">
              {[
                { icon: <Github size={20} />, href: "https://github.com/arelyyrosendes", external: true },
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/arelyrosendes/", external: true },
                { icon: <Mail size={20} />, href: projectInquiryLink }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.external ? "_blank" : social.href.startsWith('http') ? "_blank" : undefined}
                  rel={social.external || social.href.startsWith('http') ? "noopener noreferrer" : undefined}
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
