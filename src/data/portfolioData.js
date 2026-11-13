export const profile = {
  name: 'A. Gowri Devi',
  headline: 'Python Full Stack Developer | AI & ML Enthusiast | Data Analytics',
  location: 'Sulurupeta, Andhra Pradesh, India',
  email: 'attakanithippa.gowridevi@gmail.com',
  phone: '9390563504',
  links: {
    portfolio: null,
    linkedin: 'https://www.linkedin.com/in/gowri-devi-attakanithippa-ba9247428/',
    github: 'https://github.com/Gowridevi64',
  },
  languages: ['English', 'Telugu', 'Tamil', 'Hindi'],
  summary:
    'Python Full Stack Developer with a background in Computer Applications and practical knowledge of Python, Object-Oriented Programming, SQL, HTML, CSS, Bootstrap and database connectivity. Familiar with AI/ML fundamentals, Generative AI, Prompt Engineering and Data Analytics using NumPy and Pandas. Experienced in developing web applications, Python projects and automation solutions. Passionate about learning new technologies and building practical software solutions.',
}

export const internships = [
  {
    role: 'Generative AI | Agentic AI | Data Science Internship',
    company: 'Current',
    date: 'Present',
    details: [
      'Learning Generative AI, Prompt Engineering, Agentic AI concepts and Data Science workflows.',
      'Exploring AI applications and practical project development.',
    ],
  },
  {
    role: 'Python Full Stack Intern',
    company: 'Coding Brains Technologies',
    date: 'Feb 2026 – Jun 2026',
    details: [
      'Completed Python Full Stack training covering Python, OOP, SQL, HTML, CSS, Bootstrap and database connectivity.',
      'Worked on practical assignments and five capstone projects.',
    ],
  },
  {
    role: 'Project Intern',
    company: 'Datheon',
    date: '4 Weeks',
    details: [
      'Completed five project tasks involving Python programming, automation, file handling and data management.',
    ],
  },
]

export const skillGroups = [
  { title: 'Programming', icon: 'code', skills: ['Python', 'OOP', 'SQL'] },
  {
    title: 'Web Technologies',
    icon: 'globe',
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'CRUD', 'Database Connectivity'],
  },
  {
    title: 'AI & Machine Learning',
    icon: 'sparkles',
    skills: ['AI/ML Fundamentals', 'Generative AI', 'Prompt Engineering', 'Agentic AI'],
  },
  {
    title: 'Data Analytics',
    icon: 'chart',
    skills: ['NumPy', 'Pandas', 'Data Cleaning', 'Data Manipulation and Analysis'],
  },
  {
    title: 'Developer & Office Tools',
    icon: 'terminal',
    skills: ['VS Code', 'Jupyter Notebook', 'Google Colab', 'Git', 'GitHub', 'MS Word', 'MS Excel', 'PowerPoint'],
  },
  {
    title: 'Professional Skills',
    icon: 'users',
    skills: ['Problem Solving', 'Communication', 'Teamwork', 'Quick Learning'],
  },
]

export const skillLayers = [
  { id: 'core', title: 'Languages & Core', icon: 'code', filter: 'Languages', skills: ['Python', 'OOP', 'SQL'] },
  { id: 'frontend', title: 'Frontend & UI', icon: 'globe', filter: 'Frontend', skills: ['HTML5', 'CSS3', 'Bootstrap'] },
  { id: 'backend', title: 'Backend & Databases', icon: 'database', filter: 'Languages', skills: ['CRUD', 'Database Connectivity'] },
  { id: 'ai', title: 'AI & Machine Learning', icon: 'sparkles', filter: 'AI & Data', skills: ['AI/ML Fundamentals', 'Generative AI', 'Prompt Engineering', 'Agentic AI'] },
  { id: 'analytics', title: 'Data Analytics', icon: 'chart', filter: 'AI & Data', skills: ['NumPy', 'Pandas', 'Data Cleaning', 'Data Manipulation and Analysis'] },
  { id: 'tools', title: 'Tools & Platforms', icon: 'terminal', filter: 'Tools', skills: ['VS Code', 'Jupyter Notebook', 'Google Colab', 'Git', 'GitHub', 'MS Word', 'MS Excel', 'PowerPoint'] },
  { id: 'professional', title: 'Professional Skills', icon: 'users', filter: 'Practice', skills: ['Problem Solving', 'Communication', 'Teamwork', 'Quick Learning'] },
]

export const projects = [
  {
    id: 'travel-yaari',
    title: 'Travel Yaari',
    subtitle: 'Travel Website',
    category: 'Web & Full Stack',
    description:
      'Developed a travel website to present travel destinations and provide a user-friendly browsing experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    architecture: 'A responsive front end organizes destination information into a clear browsing experience, built with HTML, CSS and JavaScript.',
    features: ['Presents travel destinations', 'User-friendly browsing experience', 'HTML, CSS and JavaScript'],
    github: null,
    demo: 'https://gowridevi64.github.io/travel-yaari/',
  },
  {
    id: 'foodie',
    title: 'Foodie',
    subtitle: 'Food Application',
    category: 'Web & Full Stack',
    description: 'Developed a food application with a user-friendly interface for exploring food items.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    architecture: 'A browser-based interface presents food items in a simple, easy-to-explore layout.',
    features: ['Explore food items', 'User-friendly application interface', 'HTML, CSS and JavaScript'],
    github: null,
    demo: 'https://gowridevi64.github.io/Foodiee/',
  },
  {
    id: 'otp-system',
    title: 'OTP Verification System',
    subtitle: 'Authentication Flow',
    category: 'Python & SQL',
    alsoCategories: ['Web & Full Stack'],
    description: 'Created an OTP verification application to support user authentication.',
    tech: ['Python', 'Web Technologies'],
    architecture: 'A generated one-time code is delivered through an authentication flow, then checked against the user-submitted value before expiry.',
    features: ['Supports user authentication', 'OTP verification flow', 'Python and web technologies'],
    github: null,
    demo: 'https://gowridevi65.pythonanywhere.com/',
  },
  {
    id: 'employee-database',
    title: 'Employee Database System',
    subtitle: 'Records Management',
    category: 'Python & SQL',
    description: 'Developed an application for managing and maintaining employee records.',
    tech: ['Python', 'SQL', 'Database Connectivity'],
    architecture: 'Python connects to a SQL database to support maintaining employee records.',
    features: ['Manage employee records', 'Python and SQL', 'Database connectivity'],
    github: null,
    demo: 'https://gowridevi1.pythonanywhere.com/',
  },
  {
    id: 'cv-generator',
    title: 'CV Generator',
    subtitle: 'CV Builder',
    category: 'Web & Full Stack',
    description: 'Built a form-based CV generator that collects personal, contact, education, work and skills details.',
    tech: ['HTML', 'Bootstrap'],
    architecture: 'A web form gathers profile and experience details for CV creation.',
    features: ['Collects personal and contact details', 'Captures education and previous work', 'Records skills for a CV'],
    github: null,
    demo: 'https://gowridevi66.pythonanywhere.com/',
  },
  {
    id: 'crud-application',
    title: 'CRUD Application',
    subtitle: 'Database Operations',
    category: 'Python & SQL',
    description: 'Implemented Create, Read, Update and Delete operations with database connectivity.',
    tech: ['Python', 'SQL'],
    architecture: 'A Python application connects to a SQL database and implements the four core record operations.',
    features: ['Create and read records', 'Update and delete records', 'SQL database connectivity'],
    github: null,
    demo: null,
  },
  {
    id: 'python-automation',
    title: 'Python Automation Projects',
    subtitle: 'A collection of five practical tools',
    category: 'Automation & Tools',
    description: 'Developed five tools for games, file organization, conversation, portfolio tracking and inventory management.',
    tech: ['Python', 'CSV', 'File Handling', 'Automation'],
    architecture: 'A collection of focused Python tools using command-line interaction, file handling and CSV-based data management.',
    features: ['Hangman Game', 'File Organizer and Rule-Based Chatbot', 'Stock Portfolio Tracker and Smart Inventory System'],
    github: null,
    tools: [
      { title: 'Hangman Game', output: '$ python hangman.py\nGuess a letter: a\n_ a _ _ _\nYou have 5 attempts left.' },
      { title: 'File Organizer', output: '$ python file_organizer.py\nScanning Downloads...\nMoved 12 files into 4 folders.' },
      { title: 'Rule-Based Chatbot', output: '$ python chatbot.py\nBot: Hello! How can I help?\nYou: tell me a joke\nBot: Why did the coder...\n' },
      { title: 'Stock Portfolio Tracker', output: '$ python portfolio.py\nPortfolio summary\nHoldings: 3\nData loaded from portfolio.csv' },
      { title: 'Smart Inventory System', output: '$ python inventory.py\nInventory dashboard\nItems: 18 | Low stock: 2\nData saved to inventory.csv' },
    ],
  },
]

export const education = [
  { degree: 'B.Com - Computer Applications', year: '2026', school: 'VSU University, Nellore', location: 'Nellore', score: '85%' },
  { degree: 'Intermediate', year: '2023', school: 'Vikram Junior College, Sullurupeta', location: 'Sullurupeta', score: '83%' },
  { degree: 'SSC', year: '2021', school: 'ZPHS, Sriharikota', location: 'Sriharikota', score: '96%' },
]

export const achievements = [
  'Generative AI Certification',
  'Java Workshop Certification',
  'Python Full Stack Training — Coding Brains Technologies',
  'HackerRank — Solved 100+ Programming Problems',
]

export const credentials = [
  { title: 'Python Full Stack Internship', issuer: 'Coding Brains Technologies', date: 'Date not provided', category: 'Internship', details: 'Completed an internship at Coding Brains Technologies, including four capstone projects and practical Python programming experience.', tags: ['Python', 'Internship', 'Capstone Projects'], image: '/certificates/cert-1.png' },
  { title: 'Generative AI for Everyone', issuer: 'Simplilearn SkillUp', date: '7 September 2026', category: 'Certification', details: 'Successfully completed the online course Generative AI for Everyone.', tags: ['Generative AI', 'Online Course'], image: '/certificates/cert-2.png' },
  { title: 'Fundamentals of Data Science Programming Workshop', issuer: 'Coding Brains E-Academy', date: '4 October 2026', category: 'Workshop', details: 'Participated in the Fundamentals of Data Science Programming Zoom online workshop.', tags: ['Data Science', 'Python Programming'], image: '/certificates/cert-3.png' },
  { title: 'Official Performance Scorecard & Code Audit', issuer: 'Datheon — AI Systems & Automation Studio', date: '28 October 2026', category: 'Technical Evaluation', details: 'Predictive Maintenance System for Industrial Rotating Equipment: approved and certification cleared, with a composite score of 9.1/10 and Grade A+ (Distinction).', tags: ['Python Automation', 'Code Audit', 'Grade A+'], image: '/certificates/cert-4.png' },
]

export const themes = [
  { id: 'emerald', name: 'Emerald', color: '#047857', glow: 'rgba(4, 120, 87, .15)', soft: 'rgba(4, 120, 87, .09)' },
  { id: 'cyan', name: 'Slate Blue', color: '#0369A1', glow: 'rgba(3, 105, 161, .15)', soft: 'rgba(3, 105, 161, .09)' },
  { id: 'amber', name: 'Terracotta', color: '#B45309', glow: 'rgba(180, 83, 9, .15)', soft: 'rgba(180, 83, 9, .09)' },
]
