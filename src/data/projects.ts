import { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: "UCSC Baskin Booking Website",
    description:
      "Tour booking website for UCSC's Baskin Engineering Student Ambassador program. Built with React and Firebase, featuring real-time scheduling, admin dashboard, and secure authentication.",
    tech: ["Typescript", "React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/natanielj/BESABooking",
    demo: "https://besa-booking.vercel.app/",
    featured: true,
    image: "/images/BESA_Booking.gif"
  },
  {
    title: "ChariWork",
    description:
      "A website that rounds up your changes from everyday purchases and donates it to charity. Built with React, Node.js, and Neon Database, featuring secure payment integration and real-time donation tracking.",
    tech: ["Typescript", "React", "Node.js", "Neon", "Plaid API", "Charities API"],
    github: "https://github.com/PouriaRez/ChariWork",
    demo: "https://chari-work-115.vercel.app/",
    featured: true,
    image: "/images/ChariWork.gif"
  },
  {
    title: "Portfolio for UCLA EE Engineer",
    description:
      "Personal portfolio website for a UCLA electrical engineering student, showcasing projects and skills with a sleek, modern design. Built with HTML and CSS",
    tech: ["HTML", "CSS", "Python"],
    github: "https://github.com/agonzalez85/andys-Website",
    demo: "https://andygonzalez.me/",
    featured: true,
    image: "/images/andy_website.gif"
  },
  {
    title: "Portfolio for Artist",
    description:
      "A personal portfolio website for an artist to showcase their work and skills with a modern, responsive design. Built with React and CSS.",
    tech: ["React", "CSS", "Typescript"],
    github: "https://github.com/arelyyrosendes/Hilary-Site",
    demo: "https://hilary-portfolio-iota.vercel.app/",
    featured: false,
    image: "/images/Hilary-Site.gif"
  },
  {
    title: "GymBites",
    description:
      "Mobile/Web app for tracking workouts and meals all in one place.",
    tech: ["React", "TypeScript", "Firestore"],
    github: "https://github.com/arelyyrosendes/GymBites",
    demo: "https://gymbites.vercel.app/",
    featured: false,
    image: "/images/GymBites.gif"
  }
];
