/**
 * Central portfolio data — generated from Hansraj's resume (Hansraj_dasari.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Hansraj',
  displayName: 'Hansraj',
  firstName: 'HANSRAJ',
  seriesTag: 'THE DEVELOPER JOURNEY',
  originalLabel: 'A HANSRAJ ORIGINAL',
  role: 'Student • Full-Stack Developer in Progress',
  tagline: ['Web Development', 'Cybersecurity Beginner', 'Always Learning'],
  intro: 'I’m Hansraj, an 11th-standard student at Sindh Academy and an aspiring full-stack developer. I’m building my frontend and backend skills while exploring cybersecurity one step at a time.',
  location: 'Sindh, Pakistan',
  email: 'hans.edu1618@gmail.com',
  links: {
    linkedin: 'https://github.com/IamHans',
    github: 'https://github.com/IamHans',
  },
  resumePdf: '/assets/Hansraj_Resume.pdf',
portrait: {
  src: `${import.meta.env.BASE_URL}assets/hansraj-portrait.png`,
  srcSet: `${import.meta.env.BASE_URL}assets/hansraj-portrait.png`,
  alt: 'Portrait of Hansraj',
},
  interests: ['Full-Stack Development', 'Cybersecurity', 'Building Web Projects', 'Learning by Doing'],
};

export const education = [
  { school: 'Sindh Academy', place: 'Umerkot, Sindh, Pakistan', degree: 'Class 11 student', period: 'Currently studying', score: 'Class 11' },
  { school: 'GIHS', place: 'Pakistan', degree: 'Matriculation', period: 'Completed', score: 'Matric completed' },
];

export const experience = [
  {
    company: 'Personal Learning & Practice',
    role: 'Student Developer',
    place: 'Independent projects',
    period: 'Ongoing',
    points: [
      'Practising frontend development by building and styling web pages with HTML and CSS.',
      'Learning how frontend interfaces connect with backend concepts as part of a full-stack development journey.',
      'Exploring cybersecurity fundamentals and safe, responsible computing.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'personal-portfolio', title: 'Animated Personal Portfolio', year: 'In Progress',
    genre: 'Frontend • Personal Branding',
    logline: 'A cinematic portfolio being customized to present my learning journey, skills, and future projects.',
    stack: ['HTML', 'CSS', 'React (learning)', 'TypeScript (learning)'],
    build: ['Customizing a portfolio template with my identity, education, portrait, and contact links while preserving its existing motion design.', 'Learning how component-based websites are structured and how animation libraries create smooth interactive experiences.'],
    features: ['Personal introduction', 'Animated sections', 'Responsive layout', 'Project showcase'],
    metrics: [{ value: 'In progress', label: 'portfolio build' }, { value: 'Ongoing', label: 'frontend learning' }],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' }, motif: 'shield',
  },
  {
    id: 'html-css-practice', title: 'HTML & CSS Practice Pages', year: 'Learning',
    genre: 'Frontend • Fundamentals',
    logline: 'Practice pages to improve layout, typography, spacing, and responsive design.',
    stack: ['HTML', 'CSS'],
    build: ['Practising page structure, text styling, images, links, and common layout patterns.', 'Experimenting with backgrounds, cards, navigation, and visual hierarchy.'],
    features: ['Page structure', 'CSS styling', 'Image and link placement', 'Layout experiments'],
    metrics: [{ value: 'Building', label: 'core web foundations' }, { value: 'Next', label: 'responsive design practice' }],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' }, motif: 'flow',
  },
  {
    id: 'cybersecurity-learning', title: 'Cybersecurity Learning Lab', year: 'Learning',
    genre: 'Cybersecurity • Fundamentals',
    logline: 'A learning track for understanding security basics and practising responsible, defensive cybersecurity.',
    stack: ['Cybersecurity Fundamentals', 'Networking Basics', 'Safe Lab Practice'],
    build: ['Studying introductory cybersecurity concepts and learning to recognise common online risks.', 'Planning to document safe, legal practice exercises and notes as knowledge grows.'],
    features: ['Security fundamentals', 'Networking concepts', 'Learning notes', 'Responsible practice'],
    metrics: [{ value: 'Beginner', label: 'current level' }, { value: 'Ongoing', label: 'learning journey' }],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' }, motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  { id: 'learning-journey', title: 'Building My Foundations', org: 'Self-directed learning', detail: 'Developing web-development skills step by step while continuing school studies.', laurel: 'In Progress' },
  { id: 'portfolio-build', title: 'Personal Portfolio', org: 'Frontend practice', detail: 'Customizing an animated portfolio to document progress and present my work.', laurel: 'In Progress' },
  { id: 'cybersecurity-interest', title: 'Cybersecurity Beginner', org: 'Learning track', detail: 'Exploring cybersecurity fundamentals with a focus on responsible, defensive learning.', laurel: 'Learning' },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Harvard / CS50', name: 'CS50 Computer Science Course', link: '' },
  { issuer: 'Cisco', name: 'Introduction to Cybersecurity', link: '' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  { id: 'frontend', title: 'Frontend', subtitle: 'Current hands-on focus', skills: [
    { name: 'HTML', mono: 'Ht', note: 'Learning' }, { name: 'CSS', mono: 'Cs', note: 'Learning' }, { name: 'Responsive Design', mono: 'Rd', note: 'Practising' },
  ]},
  { id: 'backend', title: 'Backend', subtitle: 'Growing toward full-stack development', skills: [
    { name: 'Backend Fundamentals', mono: 'Be', note: 'Learning' }, { name: 'APIs', mono: 'Ap', note: 'Exploring' }, { name: 'Databases', mono: 'Db', note: 'Exploring' },
  ]},
  { id: 'security', title: 'Cybersecurity', subtitle: 'Beginner learning path', skills: [
    { name: 'Security Fundamentals', mono: 'Sf', note: 'Learning' }, { name: 'Networking Basics', mono: 'Nb', note: 'Learning' }, { name: 'Safe Computing', mono: 'Sc', note: 'Practising' },
  ]},
  { id: 'tools', title: 'Tools & Workflow', subtitle: 'Tools used while learning', skills: [
    { name: 'VS Code', mono: 'Vs' }, { name: 'Git / GitHub', mono: 'Gt', note: 'Learning' }, { name: 'Browser DevTools', mono: 'Dt', note: 'Exploring' },
  ]},
  { id: 'next', title: 'Next to Learn', subtitle: 'Planned learning goals', skills: [
    { name: 'JavaScript', mono: 'Js', note: 'Next' }, { name: 'React', mono: 'Re', note: 'Next' }, { name: 'Backend Development', mono: 'Bd', note: 'Next' },
  ]},
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  HTML: ['HTML & CSS Practice Pages'], CSS: ['HTML & CSS Practice Pages', 'Animated Personal Portfolio'],
  'Responsive Design': ['HTML & CSS Practice Pages'], 'Backend Fundamentals': ['Current learning goal'],
  APIs: ['Planned learning goal'], Databases: ['Planned learning goal'],
  'Security Fundamentals': ['Cisco Introduction to Cybersecurity'], 'Networking Basics': ['Cybersecurity learning track'],
  'Safe Computing': ['Cybersecurity learning track'], 'VS Code': ['Portfolio development workflow'],
  'Git / GitHub': ['GitHub profile'], 'Browser DevTools': ['Frontend practice'],
  JavaScript: ['Next learning goal'], React: ['Next learning goal'], 'Backend Development': ['Full-stack learning goal'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  { number: 1, title: 'The Foundation', period: 'School years', synopsis: 'Building an academic foundation while discovering technology and web development.', episodes: [
    { code: 'S01 E01', title: 'Matric Completed', description: 'Completed matriculation at GIHS and continued the learning journey.', tags: ['Education', 'Foundation'], runtime: 'Completed', palette: amber },
    { code: 'S01 E02', title: 'Class 11', description: 'Currently studying at Sindh Academy while developing technology skills.', tags: ['Sindh Academy', 'Class 11'], runtime: 'Current', palette: violet },
  ]},
  { number: 2, title: 'Learning to Build', period: 'In progress', synopsis: 'Practising HTML and CSS and learning how modern websites are put together.', episodes: [
    { code: 'S02 E01', title: 'The Web', description: 'Learning page structure, visual styling, and frontend development basics.', tags: ['HTML', 'CSS'], runtime: 'Ongoing', palette: ocean },
    { code: 'S02 E02', title: 'The Portfolio', description: 'Customizing an animated portfolio and learning from its React and TypeScript structure.', tags: ['Portfolio', 'React learning'], runtime: 'In progress', palette: crimson },
  ]},
  { number: 3, title: 'Exploring Security', period: 'In progress', synopsis: 'Beginning a responsible cybersecurity learning journey.', episodes: [
    { code: 'S03 E01', title: 'Security Basics', description: 'Learning introductory cybersecurity concepts with Cisco learning resources.', tags: ['Cybersecurity', 'Cisco'], runtime: 'Ongoing', palette: jade },
  ]},
  { number: 4, title: 'What Comes Next', period: 'Up next', synopsis: 'Expanding from web foundations toward full-stack development.', episodes: [
    { code: 'S04 E01', title: 'JavaScript', description: 'A planned next step for adding interaction to websites.', tags: ['JavaScript', 'Next step'], runtime: 'Planned', palette: amber },
    { code: 'S04 E02', title: 'Full-Stack', description: 'Working toward frontend, backend, and database skills through practice projects.', tags: ['Frontend', 'Backend', 'Databases'], runtime: 'Long-term goal', palette: ocean },
  ]},
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Current focus', title: 'HTML & CSS', detail: 'Practising web foundations', palette: amber },
  { label: 'Personal project', title: 'Animated Portfolio', detail: 'Customization in progress', palette: crimson },
  { label: 'Education', title: 'Class 11', detail: 'Sindh Academy', palette: ocean },
  { label: 'Completed', title: 'Matriculation', detail: 'GIHS', palette: violet },
  { label: 'Certificate', title: 'CS50', detail: 'Harvard computer science course', palette: jade },
  { label: 'Certificate', title: 'Introduction to Cybersecurity', detail: 'Cisco', palette: amber },
  { label: 'Exploring', title: 'Cybersecurity', detail: 'Learning the fundamentals', palette: crimson },
  { label: 'Next step', title: 'JavaScript', detail: 'Planned learning goal', palette: ocean },
  { label: 'Long-term goal', title: 'Full-Stack Development', detail: 'Frontend + backend', palette: jade },
  { label: 'Always', title: 'Keep Learning', detail: 'Build, practise, improve', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  { kicker: 'Introduction', title: 'Meet Hansraj.', lines: ['Class 11 student at Sindh Academy', 'Aspiring full-stack developer'], chips: ['Student', 'Developer in progress'] },
  { kicker: 'Education', title: 'My Foundation', lines: ['Currently studying at Sindh Academy', 'Matriculation completed at GIHS'], chips: ['Class 11', 'Learning'] },
  { kicker: 'Frontend', title: 'The Web', lines: ['Practising HTML and CSS', 'Building layouts and personal web pages'], chips: ['HTML', 'CSS'] },
  { kicker: 'Projects', title: 'Learning by Building', lines: ['Animated personal portfolio — in progress', 'HTML & CSS practice pages — ongoing', 'Cybersecurity learning notes — planned'] },
  { kicker: 'Certificates', title: 'Learning Milestones', lines: ['Harvard CS50 computer science course', 'Cisco Introduction to Cybersecurity'] },
  { kicker: 'Cybersecurity', title: 'Starting with the Basics', lines: ['Exploring security fundamentals', 'Focused on responsible, defensive learning'] },
  { kicker: 'Next chapter', title: 'Keep Building.', lines: ['JavaScript · React · Backend development', 'Learning goals, not claimed expertise'] },
];

export type ProfileId = 'hansraj' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'hansraj',
    name: 'Hansraj',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Highlights from my learning journey', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
