
export type Language = 'fr' | 'en';

export interface Project {
  id: number;
  title: Record<Language, string>;
  description: Record<Language, string>;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tool';
  icon: string;
  color: string;
  level: number; // 0 to 100
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}
