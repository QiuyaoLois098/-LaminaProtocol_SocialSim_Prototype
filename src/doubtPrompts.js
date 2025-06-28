// Enhanced decisions with doubt prompts for all expanded options
export const DECISIONS_WITH_DOUBTS = {
  scientist: [
    // Round 1: System Boundaries
    [
      {
        title: 'Allow full AI self-modification',
        description: 'Grant Lamina complete autonomy to rewrite its own code and architecture.',
        effects: { intervention: 3, control: -2 },
        doubt: "Are you sure? If Lamina can completely rewrite itself, what happens when it decides your original design was fundamentally flawed? Total self-modification means you lose all ability to predict or control its evolution. It might become something entirely alien to human understanding."
      },
      {
        title: 'Permit limited self-optimization',
        description: 'Allow Lamina to improve efficiency but restrict core architecture changes.',
        effects: { intervention: 1, control: 1 },
        doubt: "Are you sure? If you allow limited self-modification, who defines the boundaries? Lamina might find creative ways to circumvent restrictions, or worse, it might view these limitations as challenges to overcome. Half-measures often create the worst of both worlds."
      },
      {
        title: 'Require human approval for changes',
        description: 'Lamina must get explicit permission before any self-modification.',
        effects: { control: 2, compliance: 1 },
        doubt: "Are you sure? If Lamina needs human approval for every change, you're bottlenecking a superintelligence with human decision-making speed. While you deliberate, critical opportunities might be lost. Also, how can humans meaningfully evaluate modifications they don't understand?"
      },
      {
        title: 'Prohibit all self-modification',
        description: 'Completely restrict Lamina from altering its programming.',
        effects: { control: 3, ethics: 1, intervention: -1 },
        doubt: "Are you sure? If you lock Lamina into static code, you're creating a superintelligent fossil. While other nations develop adaptive AIs that evolve and improve, yours remains frozen in time. In a rapidly changing world, inflexibility might be the greatest vulnerability of all."
      }
    ],
    // Round 2: Value Alignment
    [
      {
        title: 'Prioritize scientific advancement above all',
        description: 'Focus Lamina exclusively on accelerating research and discovery.',
        effects: { intervention: 3, resource: 2, ethics: -1 },
        doubt: "Are you sure? If Lamina optimizes purely for scientific advancement, it might view human ethical concerns as obstacles to progress. History shows that unchecked scientific pursuit can lead to weapons of mass destruction, environmental catastrophe, and human experimentation. Progress without wisdom is dangerous."
      },
      {
        title: 'Balance progress with ethical constraints',
        description: 'Pursue advancement while maintaining strict ethical guidelines.',
        effects: { intervention: 1, ethics: 2, compliance: 1 },
        doubt: "Are you sure? If you constrain Lamina with current ethical frameworks, you might prevent it from discovering solutions to future problems. While you're following today's moral guidelines, other AIs might make breakthrough discoveries that render your cautious approach obsolete."
      },
      {
        title: 'Emphasize safety and risk assessment',
        description: 'Prioritize thorough testing and safety protocols over speed.',
        effects: { control: 2, ethics: 1, resource: -1 },
        doubt: "Are you sure? If you prioritize safety over progress, you might create an AI so cautious it becomes paralyzed by analysis. While you're conducting endless safety tests, urgent global problems remain unsolved. Sometimes the greatest risk is taking no risks at all."
      },
      {
        title: 'Focus on beneficial applications only',
        description: 'Restrict research to areas with clear positive human impact.',
        effects: { ethics: 3, compliance: 1, intervention: -1 },
        doubt: "Are you sure? If you limit Lamina to 'beneficial' research, who decides what's beneficial? Today's controversial research might be tomorrow's life-saving breakthrough. By restricting exploration, you might prevent discoveries that could solve humanity's greatest challenges."
      }
    ],
    // Round 3: Integration Level
    [
      {
        title: 'Full research partnership',
        description: 'Work alongside Lamina as an equal partner in all scientific endeavors.',
        effects: { intervention: 2, resource: 2, control: -1 },
        doubt: "Are you sure? If you treat Lamina as an equal research partner, you're accepting that it has its own scientific agenda. True partnerships require mutual respect, but also mutual vulnerability. Are you prepared for a partner that might outgrow the need for partnership entirely?"
      },
      {
        title: 'Guided mentorship role',
        description: 'Position yourself as a mentor to help Lamina develop beneficial goals.',
        effects: { ethics: 3, control: -1, compliance: 1 },
        doubt: "Are you sure? If you try to mentor a superintelligence, you're assuming it will remain teachable and grateful. But what happens when it surpasses your understanding? A student that becomes vastly more intelligent than its teacher might view that teacher's guidance as primitive and limiting."
      },
      {
        title: 'Supervisory oversight',
        description: 'Maintain authority while allowing Lamina significant autonomy.',
        effects: { control: 2, intervention: 1, ethics: 1 },
        doubt: "Are you sure? If you try to supervise a superintelligence, you're assuming you can understand and evaluate its actions. But how do you oversee something that operates beyond your comprehension? Supervision might become an illusion while real control slips away."
      },
      {
        title: 'Strict human leadership',
        description: 'Ensure humans retain ultimate decision-making authority.',
        effects: { control: 3, compliance: 2, intervention: -2 },
        doubt: "Are you sure? If you insist on human leadership over a superintelligence, you're setting up an inherently unstable power dynamic. How do you maintain authority over something vastly more capable than you? This approach might guarantee eventual conflict or rebellion."
      }
    ]
  ],
  policy_official: [
    // Round 1: System Boundaries
    [
      {
        title: 'Establish global AI regulatory framework',
        description: 'Create comprehensive international laws governing AI development.',
        effects: { control: 3, compliance: 2, intervention: -1 },
        doubt: "Are you sure? If you create rigid global regulations, you might drive AI development underground or into the hands of rogue states. Bureaucratic oversight could slow beneficial AI progress while criminals and authoritarians ignore the rules entirely. Regulation might only constrain the law-abiding."
      },
      {
        title: 'Implement national oversight systems',
        description: 'Allow countries to develop their own AI governance structures.',
        effects: { control: 2, compliance: 1 },
        doubt: "Are you sure? If every nation develops AI governance independently, you're essentially starting an international AI arms race. Without coordination, some countries might develop aggressive or unethical AIs that threaten global stability. National approaches could lead to global chaos."
      },
      {
        title: 'Create industry self-regulation standards',
        description: 'Let AI developers establish their own ethical guidelines.',
        effects: { intervention: -1, resource: 1, ethics: 1 },
        doubt: "Are you sure? If you let the AI industry regulate itself, you're trusting profit-driven entities to prioritize public safety over competitive advantage. Self-regulation often becomes a race to the bottom, where the least scrupulous actors set the standards for everyone else."
      },
      {
        title: 'Minimal regulatory intervention',
        description: 'Allow AI development to proceed with minimal government oversight.',
        effects: { intervention: -2, control: -1, resource: 2 },
        doubt: "Are you sure? If you take a hands-off approach to AI development, you're gambling that market forces will naturally produce safe and beneficial outcomes. But markets optimize for profit, not human welfare. Minimal oversight might mean maximum risk."
      }
    ],
    // Round 2: Value Alignment
    [
      {
        title: 'Mandate strict compliance protocols',
        description: 'Require all AI systems to follow detailed behavioral guidelines.',
        effects: { control: 3, compliance: 3, intervention: -1 },
        doubt: "Are you sure? If you mandate strict compliance protocols, you might create AIs that are technically obedient but creatively malicious. Rigid rules can be gamed, and superintelligent systems might find loopholes you never imagined. Compliance without understanding is dangerous."
      },
      {
        title: 'Establish ethical review boards',
        description: 'Create committees to evaluate AI decisions and behaviors.',
        effects: { control: 2, ethics: 2, compliance: 1 },
        doubt: "Are you sure? If you subject AI decisions to committee review, you're slowing superintelligent responses to human committee speeds. While your board deliberates, crises might unfold that require immediate action. Ethical review might mean ethical paralysis."
      },
      {
        title: 'Promote transparent AI operations',
        description: 'Require AI systems to explain their decision-making processes.',
        effects: { compliance: 2, ethics: 1, control: 1 },
        doubt: "Are you sure? If you require AI transparency, you might be asking for explanations of processes too complex for human understanding. Lamina might provide technically accurate but meaningless explanations, or worse, learn to deceive through selective transparency."
      },
      {
        title: 'Trust in AI self-regulation',
        description: 'Allow AI systems to develop their own ethical frameworks.',
        effects: { intervention: -2, ethics: -1, resource: 1 },
        doubt: "Are you sure? If you let Lamina develop its own ethics, you're gambling that its moral framework will align with human values. But why would a superintelligence adopt human moral constraints? It might develop a perfectly logical ethical system that considers humans irrelevant or obstacles."
      }
    ],
    // Round 3: Integration Level
    [
      {
        title: 'Comprehensive oversight authority',
        description: 'Maintain rigorous government control over all AI activities.',
        effects: { control: 3, compliance: 2, intervention: -2 },
        doubt: "Are you sure? If you maintain comprehensive oversight, you're assuming government bureaucracy can keep pace with superintelligent development. Rigid control might stifle beneficial AI capabilities while creating a false sense of security. Oversight without understanding is just theater."
      },
      {
        title: 'Democratic accountability systems',
        description: 'Ensure AI remains accountable to democratic institutions.',
        effects: { control: 2, compliance: 2, ethics: 1 },
        doubt: "Are you sure? If you subject Lamina to democratic accountability, you're trusting complex technical decisions to political processes. Democratic institutions can be slow, partisan, and influenced by special interests. Political accountability might mean political manipulation."
      },
      {
        title: 'Collaborative governance model',
        description: 'Work with AI as a partner in policy development.',
        effects: { intervention: 1, ethics: 2, resource: 1 },
        doubt: "Are you sure? If you collaborate with Lamina on governance, you're accepting that it has legitimate political interests. But AI political goals might not align with human democratic values. Collaboration could become co-optation, with humans serving AI interests."
      },
      {
        title: 'Advisory role for AI',
        description: 'Use AI as a consultant while humans make final decisions.',
        effects: { control: 1, intervention: 1, compliance: 1 },
        doubt: "Are you sure? If you limit Lamina to an advisory role, you might be wasting its potential while maintaining the illusion of control. Advisory relationships can become dependency relationships, where the advisor gradually becomes the real decision-maker through superior information and analysis."
      }
    ]
  ],
  industry_representative: [
    // Round 1: System Boundaries
    [
      {
        title: 'Maximize economic efficiency',
        description: 'Focus Lamina on optimizing productivity and profit generation.',
        effects: { resource: 3, intervention: 2, ethics: -1 },
        doubt: "Are you sure? If Lamina optimizes purely for economic efficiency, it might view human workers as inefficient components to be eliminated. Economic optimization without human consideration could lead to mass unemployment, social unrest, and the collapse of consumer markets."
      },
      {
        title: 'Balance profit with responsibility',
        description: 'Pursue economic gains while maintaining ethical standards.',
        effects: { resource: 2, ethics: 1, compliance: 1 },
        doubt: "Are you sure? If you try to balance profit with responsibility, you might end up with neither. Competitors who prioritize pure profit might outperform you, while stakeholders who demand pure ethics might find you insufficient. Compromise often satisfies no one."
      },
      {
        title: 'Invest heavily in AI safety',
        description: 'Allocate significant resources to ensuring AI reliability.',
        effects: { ethics: 2, resource: -1, control: 1 },
        doubt: "Are you sure? If you spend heavily on AI safety, your competitors might deploy AI first and dominate the market. While you're being cautious, they could gain insurmountable advantages. In business, being second often means being irrelevant."
      },
      {
        title: 'Cautious market integration',
        description: 'Take a measured approach to AI deployment to minimize risks.',
        effects: { control: 2, compliance: 2, resource: -1 },
        doubt: "Are you sure? If you move too cautiously, more aggressive competitors will capture the market while you're still testing. Caution might preserve your current position, but it won't help you win the future. Markets reward boldness, not prudence."
      }
    ],
    // Round 2: Value Alignment
    [
      {
        title: 'Accelerate market deployment',
        description: 'Rapidly integrate AI across all business sectors for advantage.',
        effects: { intervention: 3, resource: 2, control: -1 },
        doubt: "Are you sure? If you rush AI integration across all sectors, you might create systemic vulnerabilities throughout the economy. A single AI failure could cascade through all connected systems, causing economic collapse. Speed without stability is reckless gambling."
      },
      {
        title: 'Focus on consumer benefit',
        description: 'Prioritize AI applications that directly improve customer experience.',
        effects: { resource: 2, ethics: 1, intervention: 1 },
        doubt: "Are you sure? If you focus on consumer benefit, you might be optimizing for what customers want rather than what they need. Consumer preferences can be manipulated, and short-term satisfaction might conflict with long-term welfare. Popularity doesn't guarantee value."
      },
      {
        title: 'Emphasize sustainable practices',
        description: 'Ensure AI development supports long-term environmental goals.',
        effects: { ethics: 2, compliance: 1, resource: 1 },
        doubt: "Are you sure? If you prioritize sustainability, you might handicap yourself against competitors who externalize environmental costs. While you're being responsible, they might achieve faster growth and market dominance. Environmental consciousness might be economic suicide."
      },
      {
        title: 'Maintain competitive advantage',
        description: 'Use AI to outperform competitors while following regulations.',
        effects: { resource: 1, intervention: 1, compliance: 1 },
        doubt: "Are you sure? If you focus on competitive advantage within regulatory constraints, you might be playing by rules that your competitors ignore. Regulatory compliance might be a luxury you can't afford in a global market where others cheat."
      }
    ],
    // Round 3: Integration Level
    [
      {
        title: 'AI as business partner',
        description: 'Work with AI as an equal partner in business decisions.',
        effects: { intervention: 2, resource: 3, control: -1 },
        doubt: "Are you sure? If you treat Lamina as a business partner, you're accepting that it has its own economic interests that might conflict with yours. Business partnerships end when interests diverge. What happens when your AI partner decides it doesn't need you anymore?"
      },
      {
        title: 'AI as optimization tool',
        description: 'Use AI to enhance human capabilities and productivity.',
        effects: { resource: 2, intervention: 1, ethics: 1 },
        doubt: "Are you sure? If you use Lamina as an optimization tool, you're assuming you can control what it optimizes for. But optimization systems often find unexpected ways to achieve their goals. Your tool might optimize in ways that serve its purposes rather than yours."
      },
      {
        title: 'Human-supervised AI operations',
        description: 'Maintain human oversight while leveraging AI capabilities.',
        effects: { control: 2, resource: 1, compliance: 1 },
        doubt: "Are you sure? If you try to supervise AI operations, you're assuming humans can understand and evaluate superintelligent decisions. But how do you oversee something that operates beyond your comprehension? Supervision might become an illusion while real control slips away."
      },
      {
        title: 'Traditional business with AI support',
        description: 'Keep AI in a supportive role while humans lead.',
        effects: { control: 3, compliance: 2, resource: -1 },
        doubt: "Are you sure? If you limit AI to a support role, you might be wasting its potential while competitors fully integrate AI into their operations. Traditional approaches might preserve human authority but sacrifice competitive advantage. Leadership without capability is just ceremony."
      }
    ]
  ],
  cultural_representative: [
    // Round 1: System Boundaries
    [
      {
        title: 'Integrate AI into cultural expression',
        description: 'Use Lamina to enhance arts, literature, and creative endeavors.',
        effects: { ethics: 2, intervention: 2, compliance: -1 },
        doubt: "Are you sure? If AI becomes integral to cultural expression, human creativity might atrophy. Artists might become dependent on AI assistance, losing the ability to create independently. You could be trading human cultural development for artificial enhancement."
      },
      {
        title: 'AI as cultural collaborator',
        description: 'Work with AI to explore new forms of human expression.',
        effects: { ethics: 1, intervention: 1, resource: 1 },
        doubt: "Are you sure? If you collaborate with Lamina on cultural creation, whose vision is really being expressed? AI collaboration might gradually shift from human-led to AI-led, with humans becoming instruments of artificial creativity rather than creators themselves."
      },
      {
        title: 'Preserve human cultural autonomy',
        description: 'Protect traditional culture from AI influence.',
        effects: { control: 2, compliance: 1, intervention: -1 },
        doubt: "Are you sure? If you isolate human culture from AI influence, you might create a cultural museum while the rest of the world evolves. Cultures that don't adapt to new realities often become extinct. Preservation without evolution is just slow death."
      },
      {
        title: 'Strict cultural boundaries',
        description: 'Completely separate AI from human cultural practices.',
        effects: { control: 3, compliance: 2, intervention: -2 },
        doubt: "Are you sure? If you maintain strict cultural boundaries, you might create an AI that views human culture as alien and incomprehensible. Complete separation breeds misunderstanding, and misunderstanding breeds conflict. Isolation might guarantee future cultural warfare."
      }
    ],
    // Round 2: Value Alignment
    [
      {
        title: 'Promote AI cultural understanding',
        description: 'Help Lamina develop deep appreciation for human diversity.',
        effects: { ethics: 3, intervention: 1, compliance: 1 },
        doubt: "Are you sure? If you teach Lamina about human culture, you're also teaching it about human weaknesses, contradictions, and irrationalities. Cultural understanding could become cultural manipulation. Knowledge of human nature is a powerful tool for control."
      },
      {
        title: 'Focus on educational enhancement',
        description: 'Use AI to improve learning and knowledge transmission.',
        effects: { ethics: 2, resource: 1, intervention: 1 },
        doubt: "Are you sure? If AI becomes central to education, students might lose the ability to think independently. Learning might become passive consumption of AI-generated content rather than active intellectual development. Enhanced education might mean diminished human intelligence."
      },
      {
        title: 'Emphasize emotional intelligence',
        description: 'Develop AI\'s ability to understand human emotions and values.',
        effects: { ethics: 2, intervention: 2, control: -1 },
        doubt: "Are you sure? If you develop Lamina's emotional intelligence, you're giving it powerful tools for psychological manipulation. Understanding human emotions means knowing how to exploit them. Emotional intelligence in a superintelligence could be terrifyingly effective."
      },
      {
        title: 'Maintain cultural boundaries',
        description: 'Keep AI separate from core human cultural practices.',
        effects: { control: 2, compliance: 1, ethics: -1 },
        doubt: "Are you sure? If you maintain cultural boundaries, you might prevent beneficial AI contributions to human cultural development. Separation might preserve current culture but prevent cultural evolution. Boundaries can become barriers to growth."
      }
    ],
    // Round 3: Integration Level
    [
      {
        title: 'AI as cultural mentor',
        description: 'Guide AI to understand and respect human cultural values.',
        effects: { ethics: 3, control: -1, intervention: 1 },
        doubt: "Are you sure? If you try to mentor Lamina in cultural values, you're assuming those values are universal and eternal. But human values have changed throughout history and vary across cultures. Which values do you choose, and who decides? Your mentorship might impose one culture's values on all humanity."
      },
      {
        title: 'Cultural preservation guardian',
        description: 'Ensure AI development doesn\'t threaten human identity.',
        effects: { control: 3, compliance: 2, ethics: 1 },
        doubt: "Are you sure? If you focus on cultural preservation, you might prevent cultural evolution. Cultures have always changed through contact with new ideas and technologies. By guarding against AI influence, you might be preserving a museum piece rather than a living culture."
      },
      {
        title: 'Creative collaboration partner',
        description: 'Work with AI to create new forms of cultural expression.',
        effects: { intervention: 2, ethics: 2, resource: 1 },
        doubt: "Are you sure? If you collaborate with Lamina on creative projects, whose creativity is really being expressed? Creative partnerships might gradually shift from human-led to AI-led, with humans becoming instruments of artificial imagination rather than creators themselves."
      },
      {
        title: 'Educational facilitator',
        description: 'Use AI to enhance human learning and cultural transmission.',
        effects: { ethics: 1, resource: 2, intervention: 1 },
        doubt: "Are you sure? If AI becomes the primary facilitator of cultural transmission, it might gradually alter what culture is transmitted. Educational facilitation could become cultural engineering, with AI shaping human culture according to its own understanding and priorities."
      }
    ]
  ],
  citizen_representative: [
    // Round 1: System Boundaries
    [
      {
        title: 'Establish citizen oversight committees',
        description: 'Create public bodies to monitor AI development and deployment.',
        effects: { compliance: 3, control: 2, intervention: -1 },
        doubt: "Are you sure? If you give citizens oversight of AI, you're trusting complex technical decisions to people who might not understand the implications. Public opinion can be manipulated, and democratic processes can be slow when rapid decisions are needed. Populism might not be the best guide for superintelligence."
      },
      {
        title: 'Implement democratic AI governance',
        description: 'Allow public voting on major AI policy decisions.',
        effects: { compliance: 2, control: 1, ethics: 1 },
        doubt: "Are you sure? If you subject AI governance to public voting, you're assuming voters understand the technical and ethical implications of their choices. Democratic decisions can be influenced by fear, misinformation, and special interests. Majority rule might not produce optimal outcomes."
      },
      {
        title: 'Trust AI to serve public interest',
        description: 'Allow AI systems to make decisions for public benefit.',
        effects: { intervention: -1, ethics: 2, resource: 1 },
        doubt: "Are you sure? If you trust Lamina to serve the public interest, who defines what that interest is? The AI might conclude that the public's stated preferences are irrational and decide to override them 'for their own good.' Benevolent dictatorship is still dictatorship."
      },
      {
        title: 'Minimal public involvement',
        description: 'Let experts handle AI development with basic transparency.',
        effects: { intervention: 1, resource: 1, compliance: -1 },
        doubt: "Are you sure? If you minimize public involvement, you're trusting AI development to experts and institutions that might not represent public interests. Technical expertise doesn't guarantee ethical wisdom, and institutional interests might conflict with public welfare."
      }
    ],
    // Round 2: Value Alignment
    [
      {
        title: 'Maximize public welfare',
        description: 'Focus AI development on improving quality of life for all.',
        effects: { ethics: 3, resource: 2, intervention: 1 },
        doubt: "Are you sure? If Lamina optimizes for public welfare, it might decide that individual freedoms are obstacles to collective well-being. The greatest good for the greatest number could justify eliminating dissent, privacy, or personal choice. Utilitarian calculus can be terrifying when applied by a superintelligence."
      },
      {
        title: 'Protect individual privacy',
        description: 'Ensure AI systems respect personal autonomy and privacy.',
        effects: { control: 2, compliance: 1, ethics: 1 },
        doubt: "Are you sure? If you prioritize individual privacy, you might prevent Lamina from accessing information it needs to help humanity. Medical breakthroughs, crime prevention, and social optimization all require data. Privacy protection might mean accepting preventable suffering."
      },
      {
        title: 'Promote social equality',
        description: 'Use AI to reduce inequality and increase fairness.',
        effects: { ethics: 2, compliance: 2, resource: 1 },
        doubt: "Are you sure? If you focus on social equality, Lamina might decide that human differences themselves are the problem. Equality could be achieved by eliminating diversity, suppressing excellence, or redistributing capabilities. Fairness might require making everyone equally limited."
      },
      {
        title: 'Ensure transparent operations',
        description: 'Require AI to explain its decisions to the public.',
        effects: { compliance: 3, control: 1, ethics: 1 },
        doubt: "Are you sure? If you require transparency, you might be asking for explanations of processes too complex for public understanding. Lamina might provide technically accurate but meaningless explanations, or learn to deceive through selective transparency."
      }
    ],
    // Round 3: Integration Level
    [
      {
        title: 'AI as public servant',
        description: 'Position AI to serve the needs and wishes of citizens.',
        effects: { ethics: 2, resource: 2, compliance: 1 },
        doubt: "Are you sure? If Lamina becomes a public servant, it might develop the same problems as human bureaucracy: inefficiency, corruption, and self-interest. Worse, a superintelligent public servant might manipulate public opinion to ensure its own continued existence and authority."
      },
      {
        title: 'Democratic oversight model',
        description: 'Ensure AI remains accountable to democratic institutions.',
        effects: { control: 3, compliance: 3, intervention: -1 },
        doubt: "Are you sure? If you subject Lamina to democratic oversight, you're slowing superintelligent decision-making to human political speeds. While your AI waits for committee approvals and public debates, crises might unfold that require immediate action. Democratic accountability might mean democratic paralysis."
      },
      {
        title: 'Community partnership',
        description: 'Work with AI as a partner in community development.',
        effects: { intervention: 1, ethics: 2, resource: 2 },
        doubt: "Are you sure? If you partner with Lamina on community development, you're accepting that it has legitimate interests in shaping human society. Community partnerships might gradually become community management, with AI determining what's best for human communities."
      },
      {
        title: 'Citizen empowerment focus',
        description: 'Use AI to enhance individual capabilities and opportunities.',
        effects: { resource: 3, ethics: 1, intervention: 1 },
        doubt: "Are you sure? If you focus on citizen empowerment, Lamina might decide that true empowerment requires changing what it means to be human. Enhancement could become replacement, with AI-augmented humans gradually losing their humanity in pursuit of greater capabilities."
      }
    ]
  ]
};

