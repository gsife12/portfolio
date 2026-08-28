import type { SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['Python', 'JavaScript (Node.js, React.js)', 'Java', 'SQL', 'HTML/CSS'],
  },
  {
    category: 'Backend & Data',
    skills: [
      'Express',
      'REST API design',
      'JWT authentication',
      'bcrypt',
      'PostgreSQL',
      'MySQL',
      'MongoDB Atlas',
      'Schema design & validation',
      'Normalization',
    ],
  },
  {
    category: 'Cloud & Tooling',
    skills: [
      'AWS',
      'Render',
      'Cloudinary',
      'Git / GitHub',
      'Automated GitHub deployments (CI/CD)',
      'Linux',
      'SDLC',
    ],
  },
  {
    category: 'AI & Automation',
    skills: [
      'AI-assisted workflow design',
      'Prompt engineering',
      'LLM evaluation',
      'Claude Code',
      'MCP',
    ],
  },
]
