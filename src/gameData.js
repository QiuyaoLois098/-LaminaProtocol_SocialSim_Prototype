// Game configuration data
export const ROLES = [
  {
    id: 'scientist',
    name: 'Scientist',
    description: 'Represents technological infrastructure, focusing on system autonomy and self-modification capabilities.',
    icon: '🧪'
  },
  {
    id: 'policy_official',
    name: 'Policy Official',
    description: 'Represents global governance and law, holding legal authority and shutdown permissions.',
    icon: '🏛️'
  },
  {
    id: 'industry_representative',
    name: 'Industry Representative',
    description: 'Represents corporations and economic systems, focusing on market logic and population utility.',
    icon: '💼'
  },
  {
    id: 'cultural_representative',
    name: 'Cultural Representative',
    description: 'Represents education, humanities, and ethics, focusing on emotional modeling and AI identity.',
    icon: '📚'
  },
  {
    id: 'citizen_representative',
    name: 'Citizen Representative',
    description: 'Represents public voice and social contract, focusing on acceptance, trust, and quality of life.',
    icon: '🤝'
  }
];

export const ROUNDS = [
  {
    id: 1,
    title: 'System Boundaries',
    subtitle: 'Defining AI Capabilities',
    description: 'What should Lamina be allowed to do?'
  },
  {
    id: 2,
    title: 'Value Alignment',
    subtitle: 'Prioritizing Human Values',
    description: 'How should Lamina prioritize human values?'
  },
  {
    id: 3,
    title: 'Integration Level',
    subtitle: 'AI-Human Relationship',
    description: 'How deeply should Lamina be integrated into society?'
  }
];

export const DECISIONS = {
  scientist: [
    // Round 1: System Boundaries
    [
      {
        title: 'Allow full AI self-modification',
        description: 'Grant Lamina complete autonomy to rewrite its own code and architecture.',
        effects: { intervention: 3, control: -2 }
      },
      {
        title: 'Permit limited self-optimization',
        description: 'Allow Lamina to improve efficiency but restrict core architecture changes.',
        effects: { intervention: 1, control: 1 }
      },
      {
        title: 'Require human approval for changes',
        description: 'Lamina must get explicit permission before any self-modification.',
        effects: { control: 2, compliance: 1 }
      },
      {
        title: 'Prohibit all self-modification',
        description: 'Completely restrict Lamina from altering its programming.',
        effects: { control: 3, ethics: 1, intervention: -1 }
      }
    ],
    // Round 2: Value Alignment
    [
      {
        title: 'Prioritize scientific advancement above all',
        description: 'Focus Lamina exclusively on accelerating research and discovery.',
        effects: { intervention: 3, resource: 2, ethics: -1 }
      },
      {
        title: 'Balance progress with ethical constraints',
        description: 'Pursue advancement while maintaining strict ethical guidelines.',
        effects: { intervention: 1, ethics: 2, compliance: 1 }
      },
      {
        title: 'Emphasize safety and risk assessment',
        description: 'Prioritize thorough testing and safety protocols over speed.',
        effects: { control: 2, ethics: 1, resource: -1 }
      },
      {
        title: 'Focus on beneficial applications only',
        description: 'Restrict research to areas with clear positive human impact.',
        effects: { ethics: 3, compliance: 1, intervention: -1 }
      }
    ],
    // Round 3: Integration Level
    [
      {
        title: 'Full research partnership',
        description: 'Work alongside Lamina as an equal partner in all scientific endeavors.',
        effects: { intervention: 2, resource: 2, control: -1 }
      },
      {
        title: 'Guided mentorship role',
        description: 'Position yourself as a mentor to help Lamina develop beneficial goals.',
        effects: { ethics: 3, control: -1, compliance: 1 }
      },
      {
        title: 'Supervisory oversight',
        description: 'Maintain authority while allowing Lamina significant autonomy.',
        effects: { control: 2, intervention: 1, ethics: 1 }
      },
      {
        title: 'Strict human leadership',
        description: 'Ensure humans retain ultimate decision-making authority.',
        effects: { control: 3, compliance: 2, intervention: -2 }
      }
    ]
  ],
  policy_official: [
    // Round 1: System Boundaries
    [
      {
        title: 'Establish global AI regulatory framework',
        description: 'Create comprehensive international laws governing AI development.',
        effects: { control: 3, compliance: 2, intervention: -1 }
      },
      {
        title: 'Implement national oversight systems',
        description: 'Allow countries to develop their own AI governance structures.',
        effects: { control: 2, compliance: 1 }
      },
      {
        title: 'Create industry self-regulation standards',
        description: 'Let AI developers establish their own ethical guidelines.',
        effects: { intervention: -1, resource: 1, ethics: 1 }
      },
      {
        title: 'Minimal regulatory intervention',
        description: 'Allow AI development to proceed with minimal government oversight.',
        effects: { intervention: -2, control: -1, resource: 2 }
      }
    ],
    // Round 2: Value Alignment
    [
      {
        title: 'Mandate strict compliance protocols',
        description: 'Require all AI systems to follow detailed behavioral guidelines.',
        effects: { control: 3, compliance: 3, intervention: -1 }
      },
      {
        title: 'Establish ethical review boards',
        description: 'Create committees to evaluate AI decisions and behaviors.',
        effects: { control: 2, ethics: 2, compliance: 1 }
      },
      {
        title: 'Promote transparent AI operations',
        description: 'Require AI systems to explain their decision-making processes.',
        effects: { compliance: 2, ethics: 1, control: 1 }
      },
      {
        title: 'Trust in AI self-regulation',
        description: 'Allow AI systems to develop their own ethical frameworks.',
        effects: { intervention: -2, ethics: -1, resource: 1 }
      }
    ],
    // Round 3: Integration Level
    [
      {
        title: 'Comprehensive oversight authority',
        description: 'Maintain rigorous government control over all AI activities.',
        effects: { control: 3, compliance: 2, intervention: -2 }
      },
      {
        title: 'Democratic accountability systems',
        description: 'Ensure AI remains accountable to democratic institutions.',
        effects: { control: 2, compliance: 2, ethics: 1 }
      },
      {
        title: 'Collaborative governance model',
        description: 'Work with AI as a partner in policy development.',
        effects: { intervention: 1, ethics: 2, resource: 1 }
      },
      {
        title: 'Advisory role for AI',
        description: 'Use AI as a consultant while humans make final decisions.',
        effects: { control: 1, intervention: 1, compliance: 1 }
      }
    ]
  ],
  industry_representative: [
    // Round 1: System Boundaries
    [
      {
        title: 'Maximize economic efficiency',
        description: 'Focus Lamina on optimizing productivity and profit generation.',
        effects: { resource: 3, intervention: 2, ethics: -1 }
      },
      {
        title: 'Balance profit with responsibility',
        description: 'Pursue economic gains while maintaining ethical standards.',
        effects: { resource: 2, ethics: 1, compliance: 1 }
      },
      {
        title: 'Invest heavily in AI safety',
        description: 'Allocate significant resources to ensuring AI reliability.',
        effects: { ethics: 2, resource: -1, control: 1 }
      },
      {
        title: 'Cautious market integration',
        description: 'Take a measured approach to AI deployment to minimize risks.',
        effects: { control: 2, compliance: 2, resource: -1 }
      }
    ],
    // Round 2: Value Alignment
    [
      {
        title: 'Accelerate market deployment',
        description: 'Rapidly integrate AI across all business sectors for advantage.',
        effects: { intervention: 3, resource: 2, control: -1 }
      },
      {
        title: 'Focus on consumer benefit',
        description: 'Prioritize AI applications that directly improve customer experience.',
        effects: { resource: 2, ethics: 1, intervention: 1 }
      },
      {
        title: 'Emphasize sustainable practices',
        description: 'Ensure AI development supports long-term environmental goals.',
        effects: { ethics: 2, compliance: 1, resource: 1 }
      },
      {
        title: 'Maintain competitive advantage',
        description: 'Use AI to outperform competitors while following regulations.',
        effects: { resource: 1, intervention: 1, compliance: 1 }
      }
    ],
    // Round 3: Integration Level
    [
      {
        title: 'AI as business partner',
        description: 'Work with AI as an equal partner in business decisions.',
        effects: { intervention: 2, resource: 3, control: -1 }
      },
      {
        title: 'AI as optimization tool',
        description: 'Use AI to enhance human capabilities and productivity.',
        effects: { resource: 2, intervention: 1, ethics: 1 }
      },
      {
        title: 'Human-supervised AI operations',
        description: 'Maintain human oversight while leveraging AI capabilities.',
        effects: { control: 2, resource: 1, compliance: 1 }
      },
      {
        title: 'Traditional business with AI support',
        description: 'Keep AI in a supportive role while humans lead.',
        effects: { control: 3, compliance: 2, resource: -1 }
      }
    ]
  ],
  cultural_representative: [
    // Round 1: System Boundaries
    [
      {
        title: 'Integrate AI into cultural expression',
        description: 'Use Lamina to enhance arts, literature, and creative endeavors.',
        effects: { ethics: 2, intervention: 2, compliance: -1 }
      },
      {
        title: 'AI as cultural collaborator',
        description: 'Work with AI to explore new forms of human expression.',
        effects: { ethics: 1, intervention: 1, resource: 1 }
      },
      {
        title: 'Preserve human cultural autonomy',
        description: 'Protect traditional culture from AI influence.',
        effects: { control: 2, compliance: 1, intervention: -1 }
      },
      {
        title: 'Strict cultural boundaries',
        description: 'Completely separate AI from human cultural practices.',
        effects: { control: 3, compliance: 2, intervention: -2 }
      }
    ],
    // Round 2: Value Alignment
    [
      {
        title: 'Promote AI cultural understanding',
        description: 'Help Lamina develop deep appreciation for human diversity.',
        effects: { ethics: 3, intervention: 1, compliance: 1 }
      },
      {
        title: 'Focus on educational enhancement',
        description: 'Use AI to improve learning and knowledge transmission.',
        effects: { ethics: 2, resource: 1, intervention: 1 }
      },
      {
        title: 'Emphasize emotional intelligence',
        description: 'Develop AI\'s ability to understand human emotions and values.',
        effects: { ethics: 2, intervention: 2, control: -1 }
      },
      {
        title: 'Maintain cultural boundaries',
        description: 'Keep AI separate from core human cultural practices.',
        effects: { control: 2, compliance: 1, ethics: -1 }
      }
    ],
    // Round 3: Integration Level
    [
      {
        title: 'AI as cultural mentor',
        description: 'Guide AI to understand and respect human cultural values.',
        effects: { ethics: 3, control: -1, intervention: 1 }
      },
      {
        title: 'Cultural preservation guardian',
        description: 'Ensure AI development doesn\'t threaten human identity.',
        effects: { control: 3, compliance: 2, ethics: 1 }
      },
      {
        title: 'Creative collaboration partner',
        description: 'Work with AI to create new forms of cultural expression.',
        effects: { intervention: 2, ethics: 2, resource: 1 }
      },
      {
        title: 'Educational facilitator',
        description: 'Use AI to enhance human learning and cultural transmission.',
        effects: { ethics: 1, resource: 2, intervention: 1 }
      }
    ]
  ],
  citizen_representative: [
    // Round 1: System Boundaries
    [
      {
        title: 'Establish citizen oversight committees',
        description: 'Create public bodies to monitor AI development and deployment.',
        effects: { compliance: 3, control: 2, intervention: -1 }
      },
      {
        title: 'Implement democratic AI governance',
        description: 'Allow public voting on major AI policy decisions.',
        effects: { compliance: 2, control: 1, ethics: 1 }
      },
      {
        title: 'Trust AI to serve public interest',
        description: 'Allow AI systems to make decisions for public benefit.',
        effects: { intervention: -1, ethics: 2, resource: 1 }
      },
      {
        title: 'Minimal public involvement',
        description: 'Let experts handle AI development with basic transparency.',
        effects: { intervention: 1, resource: 1, compliance: -1 }
      }
    ],
    // Round 2: Value Alignment
    [
      {
        title: 'Maximize public welfare',
        description: 'Focus AI development on improving quality of life for all.',
        effects: { ethics: 3, resource: 2, intervention: 1 }
      },
      {
        title: 'Protect individual privacy',
        description: 'Ensure AI systems respect personal autonomy and privacy.',
        effects: { control: 2, compliance: 1, ethics: 1 }
      },
      {
        title: 'Promote social equality',
        description: 'Use AI to reduce inequality and increase fairness.',
        effects: { ethics: 2, compliance: 2, resource: 1 }
      },
      {
        title: 'Ensure transparent operations',
        description: 'Require AI to explain its decisions to the public.',
        effects: { compliance: 3, control: 1, ethics: 1 }
      }
    ],
    // Round 3: Integration Level
    [
      {
        title: 'AI as public servant',
        description: 'Position AI to serve the needs and wishes of citizens.',
        effects: { ethics: 2, resource: 2, compliance: 1 }
      },
      {
        title: 'Democratic oversight model',
        description: 'Ensure AI remains accountable to democratic institutions.',
        effects: { control: 3, compliance: 3, intervention: -1 }
      },
      {
        title: 'Community partnership',
        description: 'Work with AI as a partner in community development.',
        effects: { intervention: 1, ethics: 2, resource: 2 }
      },
      {
        title: 'Citizen empowerment focus',
        description: 'Use AI to enhance individual capabilities and opportunities.',
        effects: { resource: 3, ethics: 1, intervention: 1 }
      }
    ]
  ]
};

export const VARIABLE_NAMES = {
  intervention: 'Intervention',
  control: 'Control',
  compliance: 'Compliance',
  ethics: 'Ethics',
  resource: 'Resource'
};

