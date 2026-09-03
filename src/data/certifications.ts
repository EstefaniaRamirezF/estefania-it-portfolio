import type { Certification } from '@/types'

export const certifications: Certification[] = [
  {
    id: 'az-900',
    name: 'Microsoft Azure Fundamentals (AZ-900)',
    provider: 'Microsoft',
    category: 'cloud',
    status: 'in-progress',
    plannedDate: 'Q4 2026',
    description:
      'Currently studying core Azure concepts including cloud services, pricing, SLAs, and governance. Certification exam planned for Q4 2026.',
    credentialUrl: 'https://learn.microsoft.com/en-us/certifications/azure-fundamentals/',
  },
  {
    id: 'aws-ccp',
    name: 'AWS Cloud Practitioner',
    provider: 'Amazon Web Services',
    category: 'cloud',
    status: 'in-progress',
    plannedDate: 'Q4 2026',
    description:
      'Currently studying AWS core services, cloud concepts, security, and pricing models. Certification exam planned for Q4 2026.',
    credentialUrl: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
  },
]