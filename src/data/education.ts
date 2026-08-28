import type { Education, Certification } from '../types'

export const education: Education = {
  degree: 'B.S. Computer Science',
  minor: 'Minor in Finance',
  institution: 'Towson University',
  location: 'Towson, MD',
  startDate: 'Sep 2023',
  endDate: 'May 2027',
  coursework: [
    'Data Structures',
    'Algorithms',
    'Object-Oriented Design',
    'Databases',
    'Computer Networks',
    'Operating Systems',
  ],
}

export const certifications: Certification[] = [
  {
    id: 'aws-ccp',
    name: 'AWS Certified Cloud Practitioner',
    code: 'CLF-C02',
    issuer: 'Amazon Web Services',
    credlyUrl: 'https://www.credly.com/badges/3a90f47c-8951-40dc-9226-6ce0c06c8990',
    featured: true,
  },
  {
    id: 'comptia-security-plus',
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    credlyUrl: '{{REPLACE: https://www.credly.com/badges/...}}',
    featured: false,
    inProgress: true,
  },
]
