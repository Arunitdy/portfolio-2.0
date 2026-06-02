import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

import FDMS from "./All/logos/projectGui/FDMS.jpg";
import Portfolio from "./All/logos/projectGui/portfolio.png";
import Activity from "./All/logos/projectGui/activity.png";
import Smart from "./All/logos/projectGui/smart.png";
import Soul from "./All/logos/projectGui/soul.png";
import GDG from "./All/logos/projectGui/GDG.png";
import task from "./All/logos/projectGui/task.png";
import Fmri from "./All/logos/projectGui/Fmri.jpg";

export const projectsData = [
  {
    title: "Graph Neural Network-Based fMRI Analysis for Schizophrenia Detection",
    gui: Fmri,
    description:
      "Proposed a machine learning framework for early schizophrenia detection using functional MRI (fMRI) data. Developed a Graph Neural Network (GNN) model by constructing Functional Connectivity (FC) matrices to capture brain region interactions. Applied preprocessing techniques, feature extraction, and graph-based learning to improve classification accuracy. The study demonstrates how deep learning and neuroimaging can be combined to assist in clinical diagnosis and understanding of neurological disorders.",
    techStack: ["Python", "PyTorch", "PyTorch Geometric", "NumPy", "Pandas", "Scikit-learn", "Google Colab"],
    keyHighlights: [
      "Built Functional Connectivity matrices from fMRI data",
      "Implemented Graph Convolutional Network (GCN)",
      "Applied data preprocessing and normalization techniques",
      "Improved classification performance using graph-based features",
      "Focused on real-world healthcare application",
    ],
    githubLink: "https://github.com/Arunitdy/fMRI-based-Schizophrenia-Detection-using-AI",
    paperLink: "Add if published",
  },
  {
    title: "Activity Points System",
    gui: Activity,
    description:
      "A system designed to track and manage student activity points using Firestore as the backend database. It enables students to upload proof of participation in extracurricular and co-curricular activities, while faculty members can verify submissions and assign points. The system ensures secure storage, streamlined evaluation, and easy retrieval of student achievements over time.",
    techStack: ["React", "Firebase", "Postman", "Cypress", "Vite"],
    liveLink: "https://activity-points.vercel.app/",
    githubLink: "https://github.com/1518manu/ActivityPoints.git",
  },
  {
    title: "Food Care",
    gui: FDMS,
    description:
      "A web-based food donation and distribution management system designed to connect donors, distribution centers, and recipients. The platform streamlines the process of donating surplus food, tracking donations, managing distribution logistics, and ensuring timely delivery to those in need. It promotes efficient resource utilization and reduces food waste through real-time coordination and transparency.",
    techStack: ["React", "Spring Boot", "MySQL", "GeminiAI Api", "EmailJs Api"],
    liveLink: "",
    githubLink: "https://github.com/Arunitdy/Food-Donation-and-Distribution-Management-System",
  },
  /*
  {
    title: "Portfolio 2.0",
    gui: Portfolio,
    description: "A modern developer portfolio built with React and Vite.",
    techStack: ["React", "Vite", "Docker"],
    liveLink: "https://portfolio-2-0-wyqk.vercel.app/",
    githubLink: "https://github.com/Arunitdy/portfolio-2.0",
  },
  */
  {
    title: "Smart-Energy-Meter",
    gui: Smart,
    description:
      "A smart energy meter that monitors real-time power consumption and transmits data to the Blynk cloud platform. It allows users to remotely track energy usage through a mobile application, set alerts for abnormal consumption, and analyze usage patterns to promote energy efficiency and cost savings.",
    techStack: ["React", "Blynk Cloud"],
    liveLink: "https://smart-energy-meter-three.vercel.app/",
    githubLink: "https://github.com/Arunitdy/Smart-Energy-Meter",
  },
  {
    title: "Devcation'25- GDG On Campus IGDTUW",
    gui: GDG,
    description:
      "Devcation'25 is the technical festival organized by Google Developer Groups OnCampus - Indira Gandhi Delhi Technical University for Women that celebrates diversity in the TechForGood Domain. During the week, we have the Devcation'25 hackathon: Hack 'N' Solve.",
    techStack: ["React", "Vite", "CSS"],
    liveLink: "https://gemini-revamp.vercel.app/",
    githubLink: "https://github.com/Arunitdy/gemini-revamp",
  },
  /*
  {
    title: "To Do List",
    gui: task,
    description:
      "A full-stack productivity application with secure user authentication and real-time task management. Implements JWT authentication for secure access, allowing users to create, organize, and track tasks with instant UI updates. Features optimistic rendering for seamless interactions and automatic sync with cloud database.",
    techStack: [
      "React (Vite)",
      "Express.js",
      "MongoDB Atlas",
      "JWT Auth",
      "Postman",
      "Axios",
    ],
    liveLink: "https://to-do-list-five-delta-65.vercel.app/",
    githubLink: "https://github.com/Arunitdy/ToDoList",
  },
  */
  {
    title: "Soul",
    gui: Soul,
    description:
      "Soul an interactive love proposal web application featuring a real-time chat option using Firebase Firestore. Integrated a poetic UI, custom animations, and personalized response handling to create an emotionally engaging and memorable user experience.",
    techStack: ["HTML", "CSS", "JavaScript", "Firebase", "emailJs.Api"],
    liveLink: "https://soul-xi.vercel.app/",
    githubLink: "https://github.com/Arunitdy/Soul-",
  },
];

export const timelineData = [
  {
    year: "2022",
    skills: ["C Programming"],
    description: "Started learning foundational programming concepts.",
  },
  {
    year: "2023",
    skills: ["DSA", "Java", "OOPS"],
    description: "Dived into problem-solving with Java & Object-Oriented Programming.",
  },
  {
    year: "2024",
    skills: ["MySQL", "DBMS", "JavaScript", "React", "Node.js"],
    description: "Explored databases & front-end development.",
  },
  {
    year: "2025",
    skills: ["Firebase", "Express.js", "MongoDB", "AI/ML"],
    description: "Learning backend development with cloud services and ML model",
  },
];

export const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "C", percentage: 80, website: "https://www.open-std.org/jtc1/sc22/wg14/" },
      { name: "Java", percentage: 85, website: "https://www.java.com/" },
      { name: "Python", percentage: 50, website: "https://www.python.org/" },
      {
        name: "JavaScript",
        percentage: 90,
        website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", percentage: 85, website: "https://react.dev/" },
      { name: "Express.js", percentage: 25, website: "https://expressjs.com/" },
      { name: "MySQL", percentage: 60, website: "https://www.mysql.com/" },
      { name: "Node.js", percentage: 70, website: "https://nodejs.org/en/" },
      { name: "MongoDB Atlas", percentage: 30, website: "https://www.mongodb.com/" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Postman", percentage: 65, website: "https://www.postman.com/" },
      { name: "Firebase", percentage: 80, website: "https://firebase.google.com/" },
      { name: "Vite", percentage: 65, website: "https://vitejs.dev/" },
      { name: "Docker", percentage: 60, website: "https://www.docker.com/" },
      { name: "Github", percentage: 75, website: "https://github.com/" },
      { name: "Git", percentage: 80, website: "https://git-scm.com/" },
    ],
  },
  {
    category: "Other",
    skills: [
      {
        name: "HTML",
        percentage: 95,
        website: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS",
        percentage: 90,
        website: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
    ],
  },
];

export const profileData = {
  name: "ARUN M",
  displayName: "Arun M",
  role: "Software Developer",
  greeting: "Hello, my name is",
  aboutIntro:
    "I am a Software Engineer experienced in building full-stack applications, data-driven solutions, and cloud systems.",
  aboutDetails:
    "I also have hands-on exposure to Machine Learning and artificial intelligence.",
  aboutSummary:
    "With strong adaptability and a passion for learning, I bring versatility across Software, Data, Cloud, and ML roles.",
  menuItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skill", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  heroButtons: {
    resume: {
      href: "/Arun_M-Resume.pdf",
      label: "Get Resume",
    },
    connect: {
      href: "https://www.linkedin.com/in/arun-m-8989212aa/",
      label: "Connect Me",
    },
  },
  socialLinks: [
    {
      href: "https://www.linkedin.com/in/arun-m-8989212aa/",
      icon: FaLinkedin,
    },
    {
      href: "https://github.com/Arunitdy",
      icon: FaGithub,
    },
    {
      href: "https://www.facebook.com/arun.mundakkal.94",
      icon: FaFacebook,
    },
    {
      href: "https://www.instagram.com/arrun__m/",
      icon: FaInstagram,
    },
  ],
  about: {
    heading: "About",
    headingHighlight: "Me",
    intro:
      "My journey in programming has been exciting! Here’s a quick look at my progress over the years:",
    summary:
      "I am a passionate web developer specializing in React, JavaScript, and backend technologies.",
    details:
      "With experience in building full-stack applications, I enjoy solving problems, optimizing performance, and creating user-friendly interfaces.",
  },
  contact: {
    heading: "Contact Information",
    description:
      "Feel free to reach out through any of the following channels. I'm always open to discussing new projects, team collaborations, or opportunities to be a part of your vision.",
    details: [
      { label: "Email:", value: "arunmundakkal003@gmail.com" },
      { label: "Phone:", value: "+91 9995024963" },
    ],
    form: {
      heading: "Send Me a Message",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Hello, I’d like to talk about...",
      submitLabel: "Send Message",
      processingLabel: "processing",
    },
  },
  emailJs: {
    userId: "v1NuNxKifUW2QtRAC",
    serviceId: "service_r5z14fm",
    templateId: "template_ew8u8u5",
  },
};
