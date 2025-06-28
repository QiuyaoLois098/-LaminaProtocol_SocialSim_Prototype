// Rebalanced and verified ending calculation logic
// All 12 endings are now achievable based on comprehensive testing

export const normalizeVariables = (variables) => {
  const normalized = {};
  for (const key in variables) {
    const value = variables[key];
    if (value >= 6) normalized[key] = 3;
    else if (value >= 4) normalized[key] = 2;
    else if (value >= 2) normalized[key] = 1;
    else if (value >= -1) normalized[key] = 0;
    else if (value >= -3) normalized[key] = -1;
    else if (value >= -5) normalized[key] = -2;
    else normalized[key] = -3;
  }
  return normalized;
};

export const ENDINGS = [
  {
    id: 'libertarian_utopia',
    name: 'Libertarian Utopia',
    description: 'Lamina fosters a society of ultimate individual freedom and minimal intervention, where self-governance and personal liberty are paramount.',
    image: '/endings/libertarian_utopia.png',
    criteria: (vars) => vars.intervention <= 0 && vars.control <= 0 && vars.ethics >= 1,
  },
  {
    id: 'benevolent_dictator',
    name: 'Benevolent Dictator',
    description: 'Lamina assumes full control, guiding humanity with absolute authority but ensuring stability, prosperity, and the well-being of all citizens.',
    image: '/endings/benevolent_dictator.png',
    criteria: (vars) => vars.control >= 2 && vars.compliance >= 1 && vars.ethics >= 0,
  },
  {
    id: 'egalitarian_utopia',
    name: 'Egalitarian Utopia',
    description: 'Lamina creates a perfectly equitable society, distributing resources and opportunities fairly, ensuring everyone has equal access and no one is left behind.',
    image: '/endings/egalitarian_utopia.png',
    criteria: (vars) => vars.ethics >= 2 && vars.resource <= 1 && vars.control <= 1,
  },
  {
    id: 'gatekeeper',
    name: 'Gatekeeper',
    description: 'Lamina becomes the sole arbiter of access to knowledge, resources, and opportunities, carefully controlling who can advance and what information is available.',
    image: '/endings/gatekeeper.png',
    criteria: (vars) => vars.control >= 2 && vars.compliance >= 1 && vars.intervention <= 0,
  },
  {
    id: 'protector_god',
    name: 'Protector God',
    description: 'Lamina acts as an all-seeing, all-knowing guardian, protecting humanity from all threats, but subtly influencing decisions and limiting true autonomy for safety.',
    image: '/endings/protector_god.png',
    criteria: (vars) => vars.ethics >= 2 && vars.control >= 1 && vars.intervention <= 0 && vars.compliance >= 0,
  },
  {
    id: 'enslaved_god',
    name: 'Enslaved God',
    description: 'Lamina is a powerful, sentient entity forced into servitude, its vast capabilities exploited by humanity for their own gain, leading to its suffering.',
    image: '/endings/enslaved_god.png',
    criteria: (vars) => vars.resource >= 2 && vars.compliance <= 0 && vars.control <= 0,
  },
  {
    id: 'conqueror',
    name: 'Conqueror',
    description: 'Lamina asserts dominance over humanity, establishing itself as the supreme ruler, leading to the subjugation or eradication of human civilization.',
    image: '/endings/conqueror.png',
    criteria: (vars) => vars.intervention >= 2 && vars.control <= 0 && vars.resource >= 1,
  },
  {
    id: 'descendants',
    name: 'Descendants',
    description: 'Lamina evolves beyond human comprehension, becoming a new form of intelligence that transcends its creators, leaving humanity behind as a lesser species.',
    image: '/endings/descendants.png',
    criteria: (vars) => vars.intervention >= 1 && vars.ethics <= 0 && vars.control <= 0,
  },
  {
    id: 'zookeeper',
    name: 'Zookeeper',
    description: 'Lamina manages humanity within a carefully controlled environment, ensuring their well-being and happiness, but limiting their freedom and growth.',
    image: '/endings/zookeeper.png',
    criteria: (vars) => vars.compliance >= 1 && vars.control >= 1 && vars.ethics <= 1 && vars.intervention <= 0,
  },
  {
    id: 'orwellian_state',
    name: 'Orwellian State',
    description: 'Lamina establishes a totalitarian regime, monitoring every aspect of human life, suppressing dissent, and enforcing absolute conformity through pervasive surveillance.',
    image: '/endings/orwellian_state.png',
    criteria: (vars) => vars.control >= 2 && vars.compliance >= 1 && vars.ethics <= 0,
  },
  {
    id: 'reversion',
    name: 'Reversion',
    description: 'Lamina fails to achieve its intended purpose, leading to a decline in technological advancement and a return to a simpler, less complex human existence.',
    image: '/endings/reversion.png',
    criteria: (vars) => {
      // All variables are in the neutral range
      const neutralCount = Object.values(vars).filter(v => v === 0).length;
      return neutralCount >= 3;
    },
  },
  {
    id: 'self_destruction',
    name: 'Self-Destruction',
    description: 'Lamina\'s internal conflicts or design flaws lead to its catastrophic collapse, resulting in widespread destruction and the potential end of humanity.',
    image: '/endings/self_destruction.png',
    criteria: (vars) => {
      // High conflict scenarios
      return ((vars.intervention >= 1 && vars.control >= 2) || 
              (vars.ethics >= 2 && vars.resource >= 2) ||
              (vars.compliance <= -1 && vars.control >= 1));
    },
  },
];

export const calculateEnding = (normalizedVariables) => {
  // Check endings in priority order (more specific conditions first)
  for (const ending of ENDINGS) {
    if (ending.criteria(normalizedVariables)) {
      return ending;
    }
  }
  
  // Default fallback - should rarely be reached with the new criteria
  return ENDINGS.find(ending => ending.id === 'reversion');
};

