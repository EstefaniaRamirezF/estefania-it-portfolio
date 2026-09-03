import type { Skill, SkillCategory } from '@/types'

export const skills: Skill[] = [
  // Cloud & Infrastructure
  { id: 'cloud-fundamentals', name: 'Cloud Fundamentals', category: 'cloud' },
  { id: 'azure', name: 'Microsoft Azure', category: 'cloud' },
  { id: 'aws', name: 'Amazon Web Services (AWS)', category: 'cloud' },
  { id: 'gcp', name: 'Google Cloud Platform (GCP)', category: 'cloud' },

  // IT Support & Service Management
  { id: 'it-support', name: 'IT Support', category: 'itsm' },
  { id: 'troubleshooting', name: 'Troubleshooting', category: 'itsm' },
  { id: 'incident-management', name: 'Incident Management (ITSM)', category: 'itsm' },
  { id: 'service-request', name: 'Service Request Management', category: 'itsm' },
  { id: 'itsm', name: 'IT Service Management', category: 'itsm' },
  { id: 'it-ops', name: 'IT Operations Management', category: 'itsm' },
  { id: 'kb-management', name: 'Knowledge Base Management', category: 'itsm' },
  { id: 'servicenow', name: 'ServiceNow', category: 'itsm' },
  { id: 'jira', name: 'Jira', category: 'itsm' },
  { id: 'pagerduty', name: 'PagerDuty', category: 'itsm' },

  // Global Security Operations
  { id: 'gsoc', name: 'GSOC Monitoring', category: 'security' },
  { id: 'incident-response', name: 'Security Incident Response', category: 'security' },
  { id: 'soc-support', name: 'Security Operations Support', category: 'security' },
  { id: 'security-fundamentals', name: 'Security Fundamentals', category: 'security' },

  // Data, Productivity & Tools
  { id: 'sql', name: 'SQL Fundamentals', category: 'data-tools' },
  { id: 'sql-db', name: 'SQL Databases', category: 'data-tools' },
  { id: 'm365', name: 'Microsoft 365 / Office 365', category: 'data-tools' },
  { id: 'ms-office', name: 'Microsoft Office', category: 'data-tools' },
  { id: 'google-workspace', name: 'Google Workspace', category: 'data-tools' },
  { id: 'sharepoint', name: 'SharePoint', category: 'data-tools' },
  { id: 'vscode', name: 'VS Code', category: 'data-tools' },
  { id: 'git', name: 'Git / GitHub', category: 'data-tools' },

  // Professional Strengths
  { id: 'bilingual', name: 'Bilingual Communication', category: 'professional' },
  { id: 'cross-cultural', name: 'Cross-cultural Communication', category: 'professional' },
  { id: 'customer-service', name: 'Customer Service', category: 'professional' },
  { id: 'active-listening', name: 'Active Listening', category: 'professional' },
  { id: 'problem-solving', name: 'Problem-solving', category: 'professional' },
  { id: 'adaptability', name: 'Adaptability', category: 'professional' },
  { id: 'critical-thinking', name: 'Critical Thinking', category: 'professional' },
  { id: 'leadership', name: 'Leadership', category: 'professional' },
  { id: 'project-management', name: 'Project Management', category: 'professional' },
  { id: 'stress-management', name: 'Stress Management', category: 'professional' },
  { id: 'teamwork', name: 'Teamwork', category: 'professional' },
  { id: 'continuous-learning', name: 'Continuous Learning', category: 'professional' },
]

export const skillCategories: SkillCategory[] = [
  { key: 'cloud', label: 'Cloud & Infrastructure' },
  { key: 'itsm', label: 'IT Support & Service Management' },
  { key: 'security', label: 'Global Security Operations' },
  { key: 'data-tools', label: 'Data, Productivity & Tools' },
  { key: 'professional', label: 'Professional Strengths' },
]