import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaJira, FaLinkedin, FaEnvelope, FaBootstrap
} from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiJenkins } from 'react-icons/si';

export const personalInfo = {
  name: "Chandra Sekhar",
  role: "Front End Developer",
  tagline: "Crafting scalable UI architectures with React.js & Redux Toolkit.",
  summary: "With 4 years of experience as a Front End Developer, I am currently working at Innocito, building Admin and Consumer-facing web platforms for an innovative car rental solution. I am passionate about creating responsive, high-performance web applications using modern technologies and seamless user interactions.",
  email: "naiduchandrasekhar10@gmail.com",
  github: "https://github.com/Naiduchandrasekhar",
  linkedin: "https://linkedin.com/",
  whatsapp: "+919160743466", // Replace with your actual WhatsApp number
};

export const skills = [
  { name: "HTML", icon: FaHtml5, color: "text-[#E34F26]" },
  { name: "CSS", icon: FaCss3Alt, color: "text-[#1572B6]" },
  { name: "JavaScript", icon: FaJs, color: "text-[#F7DF1E]" },
  { name: "React.js", icon: FaReact, color: "text-[#61DAFB]" },
  { name: "Redux Toolkit", icon: SiRedux, color: "text-[#764ABC]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-[#7952B3]" },
  { name: "Git/GitHub", icon: FaGithub, color: "text-zinc-800 dark:text-white" },
  { name: "Jira/Monday.com", icon: FaJira, color: "text-[#0052CC]" },
  { name: "Jenkins", icon: SiJenkins, color: "text-[#D24939]" },
];

export const experience = [
  {
    role: "Software Engineer / Front End Developer",
    company: "Innocito",
    duration: "April 2024 – Present",
    location: "Visakhapatnam, Andhra Pradesh, India · Hybrid",
    responsibilities: [
      "Developed reusable and scalable React components to enhance platform functionality.",
      "Managed global state efficiently with Redux Toolkit, ensuring predictable data flow.",
      "Integrated key features like booking workflows, advanced filters, and Google Maps support.",
      "Implemented secure user authentication and seamless REST API integrations.",
      "Ensured fully responsive design and optimized frontend performance.",
      "Collaborated via Git, GitHub, Jira, and Jenkins for continuous delivery."
    ],
    techStack: ["React.js", "Redux Toolkit", "JavaScript", "CSS", "Jenkins", "REST APIs"]
  }
];

export const projects = [
  {
    title: "YouTube Clone",
    description: "A fully functional YouTube replica with a responsive UI, mimicking core features including video playback, search functionality, and category filtering.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    link: "https://youwatchtube.netlify.app/",
    tags: ["React", "Redux Toolkit", "Tailwind CSS", "RapidAPI"]
  },
  {
    title: "Netflix GPT Clone",
    description: "An AI-powered streaming service UI, integrated with OpenAI (GPT) for smart, contextual search and personalized movie recommendations.",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=1000&auto=format&fit=crop",
    link: "https://netflixgpt-676eb.firebaseapp.com/",
    tags: ["React", "Firebase", "GPT-4", "Tailwind CSS"]
  }
];
