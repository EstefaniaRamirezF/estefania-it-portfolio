import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 'epam-dbms',
    company: 'EPAM Systems',
    position: '1st Line Support Specialist (DBMS)',
    startDate: 'March 2026',
    endDate: 'July 2026',
    description:
      'Provided first-line support for multi-platform database environments across AWS and GCP, helping maintain database availability and business continuity.',
    highlights: [
      'Served as the first point of contact for database-related incidents and service requests.',
      'Monitored database health, performance, and alert activity using PagerDuty and related tools.',
      'Managed incidents and service requests in Jira, following SLA expectations and documentation standards.',
      'Escalated complex issues to Level 2 teams with clear technical notes and incident context.',
      'Contributed to process improvement by developing an Alert Handling Matrix to standardize classification and response procedures.',
      'Followed SOPs and ITIL-aligned practices for consistent service support.',
    ],
    technologies: ['PagerDuty', 'Jira', 'AWS', 'GCP', 'ITIL', 'SQL'],
    focus:
      'Incident handling, alert monitoring, documentation, database operations support, cloud environment exposure.',
  },
  {
    id: 'oportun-gsoc',
    company: 'Oportun',
    position: 'Global Security Operations Center (GSOC) Operator',
    startDate: 'September 2024',
    endDate: 'February 2026',
    description:
      'Supported enterprise-level security operations through real-time monitoring, incident escalation, and coordination with technical and compliance teams.',
    highlights: [
      'Monitored global security systems to identify and escalate threats in real time.',
      'Coordinated with IT, compliance, and risk teams during incident handling.',
      'Maintained detailed incident reports and operational documentation.',
      'Supported security procedures aligned with compliance and internal standards.',
    ],
    technologies: ['GSOC Tools', 'Incident Management', 'Compliance Frameworks'],
    focus: 'Security monitoring, incident response, escalation, compliance support, reporting.',
  },
  {
    id: 'oportun-cx',
    company: 'Oportun',
    position: 'Bilingual Customer Service Representative',
    startDate: 'October 2018',
    endDate: 'September 2024',
    description:
      'Delivered bilingual support in a compliance-driven environment while handling technical concerns and privacy-sensitive customer interactions.',
    highlights: [
      'Provided customer and technical support in English and Spanish.',
      'Identified unusual account behavior and escalated suspicious cases for review.',
      'Maintained documentation accuracy while following internal compliance standards.',
    ],
    technologies: ['CRM Systems', 'Compliance Tools', 'Documentation'],
    focus: 'Technical support, customer communication, risk awareness, compliance, escalation.',
  },
  {
    id: 'onshore-cx',
    company: 'Onshore Marketing Solutions',
    position: 'Bilingual Customer Service Representative',
    startDate: 'October 2021',
    endDate: 'August 2023',
    description:
      'Supported customer operations through bilingual communication, issue resolution, and service-focused relationship management.',
    highlights: [
      'Resolved customer inquiries and service issues efficiently.',
      'Communicated clearly with multicultural clients in English and Spanish.',
      'Adapted messaging and support style based on customer needs.',
    ],
    technologies: ['CRM', 'Communication Tools'],
    focus: 'Client communication, issue resolution, customer support, adaptability.',
  },
]