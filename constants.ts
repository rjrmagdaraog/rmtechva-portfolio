import { ExperienceItem, SkillCategory, ToolItem, ContactInfo } from './types';

export const PERSONAL_INFO = {
  name: "Rafael Magdaraog",
  title: "Ai Automation Specialist & Technical Virtual Assistant",
  subTitle: "Packaging • Automation • Technical Virtual Assistance",
  tagline: "Your behind-the-scenes Technical VA and automation partner. I build workflows that scale with your business.",
  about: "Technical Virtual Assistant and Automation Specialist with a strong focus on streamlining business operations through intelligent workflows and automation systems. Skilled in Zapier, Make.com, n8n, CRM management, workflow design, and process optimization, I help businesses eliminate repetitive tasks, improve efficiency, and scale with reliable solutions. I care deeply about your success, treating your business goals as if they were my own, and I ensure solutions are tailored, dependable, and aligned with long‑term growth. With proactive communication and a results‑driven mindset, I build systems that not only work — they make work better."
};

export const CONTACT_INFO: ContactInfo = {
  email: "r.jrmagdaraog@gmail.com",
  phone: "+63 927 485 6299"
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Automation & Tech Support",
    skills: ["Workflow Automation", "Zapier", "Make.com", "n8n", "API Integration", "Process Optimization"]
  },
  {
    title: "Technical Virtual Assistance",
    skills: ["CRM Management", "Email Automation", "Data Entry Automation", "Reporting", "Tech Stack Management"]
  },
  {
    title: "Web & Design",
    skills: ["WordPress", "Elementor", "Packaging Design", "Product Development", "Adobe Creative Suite"]
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "1",
    role: "Technical Virtual Assistant & Automation Specialist (Freelance)",
    company: "Upwork",
    location: "Remote",
    period: "2024 – Present",
    description: [
      "Build automated workflows to reduce manual processes",
      "Support CRM setup, reporting, and email automation",
      "Manage WordPress websites and e-commerce operations",
      "Provide reliable technical and operational support to global clients"
    ]
  },
  {
    id: "2",
    role: "Graphic Designer – Packaging & Product Design",
    company: "Superior Packaging Corporation",
    location: "Philippines",
    period: "2023 – Present",
    description: [
      "Create mechanical drawings, dielines, and packaging artwork",
      "Prepare tooling files and redesign existing packaging"
    ]
  },
  {
    id: "3",
    role: "Product Development Head / Graphic Designer",
    company: "Advance Int’l Company",
    location: "Saudi Arabia",
    period: "2021 – 2023",
    description: [
      "Led product development from concept to production",
      "Collaborated with clients, sales teams, and suppliers",
      "Delivered innovative packaging solutions and process improvements"
    ]
  },
  {
    id: "4",
    role: "Graphic Designer – Packaging",
    company: "Superior Packaging Corporation",
    location: "Philippines",
    period: "2015 – 2021",
    description: [
      "Designed production-ready packaging and tooling layouts"
    ]
  }
];

export const TOOLS: ToolItem[] = [
  { name: "Gmail", slug: "gmail" },
  { name: "Slack", slug: "slack" },
  { name: "Xero", slug: "xero" },
  { name: "Google Sheets", slug: "googlesheets" },
  { name: "OpenAI", slug: "openai", iconPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/100px-ChatGPT_logo.svg.png" },
  { name: "Apollo", slug: "apollo", iconPath: "https://logo.clearbit.com/apollo.io" },
  { name: "Google Drive", slug: "googledrive" },
  { name: "Zapier", slug: "zapier" },
  { name: "Make.com", slug: "make" },
  { name: "n8n", slug: "n8n" },
  { name: "WordPress", slug: "wordpress" },
  { name: "Gemini", slug: "googlegemini" },
  { name: "Asana", slug: "asana" },
];