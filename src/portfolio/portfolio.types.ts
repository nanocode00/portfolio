export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  keyMessage: string;
  techFlow?: string[];
  techStack: string[];
  placeholderText: string;
  placeholderType: string;
  isHummingBlocks?: boolean;
  isMedicalAI?: boolean;
  isSmartPot?: boolean;
  isHummingBlocksPlaceholder?: boolean;
  isMedicalPlaceholder?: boolean;
  isSmartPotPlaceholder?: boolean;
}

export interface SkillGroup {
  id: string;
  category: string;
  items: string[];
  usage: string;
  relatedProjects: string[];
  projectIds: string[]; // 연결된 프로젝트의 id 목록
}

export interface Experience {
  id: string;
  period: string;
  title: string;
  role: string;
  tasks: string[];
  techStack: string[];
  learning: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  resume: string;
}

export interface QnA {
  id: string;
  question: string;
  answer: string;
}

export interface PortfolioData {
  name: string;
  jobTitle: string;
  tagline: string;
  keywords: string[];
  recommendation: {
    label: string;
    title: string;
    description: string;
  };
  projects: Project[];
  skills: SkillGroup[];
  experiences: Experience[];
  contact: ContactInfo;
  qnaList: QnA[];
}
