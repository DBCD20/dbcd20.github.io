export interface ProjectSection {
  type: 'overview' | 'warning' | 'code' | 'list' | 'text';
  title?: string;
  content: string;
  items?: string[];
  language?: string;
  className?: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  githubUrl?: string;
  tags?: string[];
  date?: string;
  sections: ProjectSection[];
  meta?: {
    author?: string;
    lastUpdated?: string;
    status?: 'draft' | 'published' | 'archived';
    version?: string;
  };
}

export type ProjectTag = 'Terraform' | 'AWS' | 'IaC' | 'EKS' | 'ECS' | 'VPC' | 'CloudTrail' | 'Network Firewall';

export interface ProjectMetadata {
  total: number;
  tags: ProjectTag[];
  dates: {
    oldest: string;
    newest: string;
  };
}