
export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ToolItem {
  name: string;
  slug: string; // for simple-icons
  iconPath?: string; // Optional custom local icon
}

export interface ContactInfo {
  email: string;
  phone: string;
}
