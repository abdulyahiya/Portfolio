// =====================================================
// portfolio.js — Real data from Abdul Yahiya's CV
// =====================================================

export const PERSONAL_INFO = {
  name: 'Abdul Yahiya',
  title: 'Full Stack Developer',
  subtitle: 'React.js | Node.js | Spring Boot',
  phone: '+91-9973914185',
  email: 'abdulyahya9973@gmail.com',
  location: 'Bettiah, Bihar, India',
  resume: '/Abdul_Yahiya_Resume_SDE.pdf',
  summary: `B.Tech Computer Science graduate (2026) and Full Stack Developer with hands-on experience building production-ready web applications using React.js, Node.js, Spring Boot, and MongoDB/PostgreSQL. Skilled in REST API design, JWT authentication, microservices, and responsive UI development. Strong foundation in Data Structures & Algorithms with a track record of delivering end-to-end features across the stack.`,
};

export const SOCIAL_LINKS = {
  github: 'https://github.com/abdulyahiya',
  linkedin: 'https://www.linkedin.com/in/abdulyahiya25/',
  email: 'mailto:abdulyahya9973@gmail.com',
  whatsapp: 'https://wa.me/919973914185',
  resume: '/Abdul_Yahiya_Resume_SDE.pdf',
};

export const NAV_LINKS = [
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Education', href: 'education' },
  { label: 'Certifications', href: 'certifications' },
  { label: 'Contact', href: 'contact' },
];

export const TYPING_TEXTS = [
  'full-stack web applications',
  'REST APIs with Spring Boot',
  'React.js frontends',
  'microservices architectures',
  'real-time apps with Socket.IO',
  'scalable Node.js backends',
];

export const SKILLS_CATEGORIES = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: '⟨/⟩',
    color: 'var(--neon-cyan)',
    borderColor: 'rgba(0, 245, 255, 0.3)',
    glow: 'rgba(0, 245, 255, 0.12)',
    skills: ['Java', 'C++', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    id: 'backend',
    title: 'Backend & Frameworks',
    icon: '⚙️',
    color: 'var(--neon-green)',
    borderColor: 'rgba(0, 255, 136, 0.3)',
    glow: 'rgba(0, 255, 136, 0.12)',
    skills: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Node.js', 'Express.js', 'RESTful APIs', 'Hibernate (JPA)', 'JWT Authentication'],
  },
  {
    id: 'frontend',
    title: 'Frontend & UI Engineering',
    icon: '⚛️',
    color: 'var(--neon-blue)',
    borderColor: 'rgba(0, 128, 255, 0.3)',
    glow: 'rgba(0, 128, 255, 0.12)',
    skills: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Zustand State', 'Responsive UI', 'Figma (UI/UX)'],
  },
  {
    id: 'architecture',
    title: 'Architecture & Databases',
    icon: '🏗️',
    color: 'var(--neon-purple)',
    borderColor: 'rgba(191, 0, 255, 0.3)',
    glow: 'rgba(191, 0, 255, 0.12)',
    skills: ['Microservices Architecture', 'PostgreSQL', 'MongoDB', 'MySQL Database', 'Socket.IO (Real-time)', 'Razorpay API Integration'],
  },
  {
    id: 'testing',
    title: 'Testing & Quality',
    icon: '🛡️',
    color: 'var(--neon-pink)',
    borderColor: 'rgba(255, 0, 110, 0.3)',
    glow: 'rgba(255, 0, 110, 0.12)',
    skills: ['JUnit', 'Mockito', 'Swagger OpenAPI', 'Postman API Testing', 'Selenium UI Automation', 'API Benchmarking'],
  },
  {
    id: 'devops',
    title: 'Tools & DevOps',
    icon: '📦',
    color: 'var(--neon-yellow)',
    borderColor: 'rgba(255, 224, 0, 0.3)',
    glow: 'rgba(255, 224, 0, 0.12)',
    skills: ['Git & GitHub', 'VS Code', 'Maven', 'Vite & Oxlint', 'Vercel Deployment', 'Agile / Scrum', 'Data Structures (C++)'],
  },
];

export const SKILLS_DATA = [
  // Frontend
  { name: 'React.js', icon: '⚛️', category: 'frontend', level: 88 },
  { name: 'JavaScript', icon: '🟨', category: 'frontend', level: 90 },
  { name: 'TypeScript', icon: '🔷', category: 'frontend', level: 75 },
  { name: 'HTML5', icon: '🟠', category: 'frontend', level: 92 },
  { name: 'CSS3', icon: '🎨', category: 'frontend', level: 85 },
  { name: 'Tailwind CSS', icon: '💨', category: 'frontend', level: 82 },
  { name: 'Figma (UI/UX)', icon: '🎭', category: 'frontend', level: 70 },
  // Backend
  { name: 'Java', icon: '☕', category: 'backend', level: 87 },
  { name: 'Node.js', icon: '🟢', category: 'backend', level: 85 },
  { name: 'Express.js', icon: '🚂', category: 'backend', level: 83 },
  { name: 'Spring Boot', icon: '🌱', category: 'backend', level: 82 },
  { name: 'Spring MVC', icon: '🍃', category: 'backend', level: 78 },
  { name: 'Hibernate (JPA)', icon: '🔗', category: 'backend', level: 75 },
  { name: 'REST APIs', icon: '🌐', category: 'backend', level: 90 },
  { name: 'Microservices', icon: '🧩', category: 'backend', level: 78 },
  { name: 'JWT Auth', icon: '🔐', category: 'backend', level: 83 },
  // Database
  { name: 'MySQL', icon: '🐬', category: 'database', level: 82 },
  { name: 'PostgreSQL', icon: '🐘', category: 'database', level: 80 },
  { name: 'MongoDB', icon: '🍃', category: 'database', level: 82 },
  { name: 'SQL', icon: '🗄️', category: 'database', level: 85 },
  // Tools / DevOps
  { name: 'Git / GitHub', icon: '🌿', category: 'devops', level: 88 },
  { name: 'Postman', icon: '📮', category: 'devops', level: 85 },
  { name: 'Selenium', icon: '🧪', category: 'devops', level: 72 },
  { name: 'VS Code', icon: '💻', category: 'devops', level: 92 },
  // Other
  { name: 'DSA (C++)', icon: '🧠', category: 'other', level: 82 },
  { name: 'Problem Solving', icon: '🎯', category: 'other', level: 85 },
  { name: 'Agile / Scrum', icon: '📋', category: 'other', level: 78 },
  { name: 'Razorpay API', icon: '💳', category: 'other', level: 72 },
];

export const PROJECTS_DATA = [
  {
    id: 'p1',
    title: 'FounderLink',
    period: 'Feb – Apr 2026',
    description: 'A multi-role startup platform for founders, investors, co-founders, and admins with role-based dashboards. Features JWT-based REST APIs, Razorpay payment & investment flow, and modular microservice clients.',
    icon: '🚀',
    category: 'fullstack',
    tags: ['React.js', 'TypeScript', 'Spring Boot', 'Microservices', 'PostgreSQL', 'Razorpay', 'JWT'],
    highlights: [
      'Designed multi-role dashboards with role-based access control for founders, investors, co-founders, and admins.',
      'Built modular service clients for startup, team, auth, messaging, notification, and profile REST APIs.',
      'Implemented Razorpay payment & investment flow: order creation, payment verification, founder approval.',
    ],
    github: 'https://github.com/abdulyahiya/FounderLink',
    live: 'https://founderlink-final.vercel.app/',
  },
  {
    id: 'p2',
    title: 'ChatApp',
    period: 'May – Jul 2025',
    description: 'Real-time chat application using the MERN stack and Socket.IO. Supports JWT authentication, Cloudinary for image sharing, Zustand for state management, and a fully responsive React + Tailwind UI.',
    icon: '💬',
    category: 'fullstack',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.IO', 'JWT', 'Cloudinary', 'Tailwind CSS', 'Zustand'],
    highlights: [
      'Developed real-time messaging with Socket.IO backed by MongoDB for persistence.',
      'Implemented secure JWT authentication and Cloudinary integration for image sharing.',
      'Built responsive UI with React + Tailwind CSS; used Zustand for client-side state management.',
    ],
    github: 'https://github.com/abdulyahiya/Chat-App',
    live: 'https://chat-app-1-oryb.onrender.com',
  },
  {
    id: 'p3',
    title: 'E-commerce Platform',
    period: 'Sep – Dec 2024',
    description: 'Feature-rich e-commerce app with secure authentication, shopping cart, order processing, and a dynamic admin dashboard. Validated with 100+ simulated users using Postman & Selenium.',
    icon: '🛒',
    category: 'fullstack',
    tags: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Postman', 'Selenium', 'JWT'],
    highlights: [
      'Built a full shopping experience: auth, cart, order processing, and admin dashboard for products/users.',
      'Engineered role-based admin panel for order/user tracking with live order-status updates.',
      'Validated performance with 100+ simulated users; used Postman for API testing & Selenium for UI automation.',
    ],
    github: 'https://github.com/abdulyahiya',
    live: null,
  },
];

export const EDUCATION_DATA = [
  {
    period: 'Sep 2022 – 2026',
    degree: 'B.Tech — Computer Science & Engineering',
    school: 'Lovely Professional University, Phagwara, Punjab',
    description: 'Studying core CS subjects including Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, Software Engineering, and Object-Oriented Programming. Actively building full-stack projects and applying classroom knowledge to real-world applications.',
    badge: 'CGPA: 7.9',
    icon: '🎓',
  },
  {
    period: 'Apr 2018 – Mar 2020',
    degree: 'Intermediate — PCM (Class XII)',
    school: 'CMJ Institute of Education, Motihari, Bihar',
    description: 'Specialized in Physics, Chemistry, and Mathematics. Built a strong analytical foundation that supports problem-solving in software engineering and algorithm design.',
    badge: 'Percentage: 74.6%',
    icon: '📚',
  },
  {
    period: 'Apr 2017 – Mar 2018',
    degree: 'Matriculation (Class X)',
    school: 'MS Memorial Public School, Motihari, Bihar',
    description: 'Completed foundational schooling with strong performance across core subjects. Developed early interest in logical thinking and mathematics.',
    badge: 'Percentage: 73%',
    icon: '🏫',
  },
];

export const CERTIFICATIONS_DATA = [
  {
    title: 'Internet of Things (IoT)',
    issuer: 'NPTEL',
    period: 'Feb – May 2025',
    icon: '📡',
    color: 'cyan',
  },
  {
    title: 'Data Structures & Algorithms using C++',
    issuer: 'GeeksforGeeks (EdTech)',
    period: 'May – Jul 2024',
    icon: '🧠',
    color: 'green',
  },
  {
    title: 'Mastering Data Structures & Algorithms using C and C++',
    issuer: 'Udemy',
    period: 'Jan – Apr 2024',
    icon: '🏆',
    color: 'purple',
  },
  {
    title: 'HTML, CSS and JavaScript for Web Developers',
    issuer: 'Coursera',
    period: 'Oct – Dec 2024',
    icon: '🌐',
    color: 'pink',
  },
];

export const TRAINING_DATA = [
  {
    title: 'Data Structures & Algorithms using C++',
    org: 'GeeksforGeeks (EdTech)',
    period: 'May – Jul 2024',
    points: [
      'Completed full DSA curriculum: arrays, linked lists, stacks, queues, trees, graphs, sorting, searching, and optimization.',
      'Strengthened understanding of dynamic programming, graph algorithms, and time-space complexity analysis.',
      'Solved competitive programming challenges to develop efficient problem-solving skills.',
    ],
  },
];

export const STATS_DATA = [
  { count: 3, label: 'Projects Shipped' },
  { count: 4, label: 'Certifications' },
  { count: 10, label: 'Technologies' },
  { count: 2026, label: 'Graduating', noPlus: true },
];

export const TESTIMONIALS_DATA = [];
