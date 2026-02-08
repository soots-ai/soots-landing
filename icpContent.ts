export type IcpKey = 'baseline' | 'cs' | 'ops' | 'delivery' | 'revops' | 'ai';

export const ICP_PATH_MAP: Record<string, IcpKey> = {
  cs: 'cs',
  ops: 'ops',
  delivery: 'delivery',
  revops: 'revops',
  ai: 'ai'
};

export const getIcpKeyFromPath = (pathname: string): IcpKey => {
  const trimmed = pathname.replace(/\/+$/, '');
  const segments = trimmed.split('/').filter(Boolean);
  const slug = segments[0]?.toLowerCase();
  return slug && ICP_PATH_MAP[slug] ? ICP_PATH_MAP[slug] : 'baseline';
};

const SHARED_STATUS = 'STATUS: ACCEPTING PILOT PARTNERS FOR Q1 2026';
const SHARED_CTA_NOTE = 'Pilot slots available';
const SHARED_FOOTER_STATUS = '[ STATUS: ACCEPTING PILOT PARTNERS FOR Q1 ]';

export interface IcpContent {
  hero: {
    status: string;
    headline: {
      line1: string;
      line2: string;
      highlight: string;
    };
    subheadLead: string;
    subheadHighlight: string;
    subheadConnector: string;
    rotatingTerms: string[];
    subheadTail: string;
    ctaLabel: string;
    ctaNote: string;
  };
  problemSplit: {
    title: string;
    subtitle: string;
    xAxisLabels: [string, string, string, string];
    yAxisLabel: string;
    voidLabel: string;
    contextLostLabel: string;
    startLabel: string;
    topCard: string;
    bottomCardLabel: string;
    bottomCardQuote: string;
    stats: Array<{ icon: string; label: string; subtext?: string }>;
  };
  painTimeline: {
    title: string;
    subtitle: string;
    bracketLabel: string;
    hazardLabel: string;
    startLabel: string;
    endLabel: string;
    impacts: Array<{ title: string; description: string }>;
  };
  riskDetection: {
    title: string;
    subtitle: string;
    transcript: Array<{ speaker: string; text: string; highlight?: boolean }>;
    riskTitle: string;
    insightLabel: string;
    insightText: string;
    actionText: string;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    ingestTags: string[];
    steps: Array<{ title: string; description: string }>;
  };
  integrations: {
    title: string;
    description: string;
    footer: Array<{ title: string; description: string }>;
    footerTag: string;
  };
  emailPopup: {
    title: string;
    subtitle: string;
  };
  footer: {
    headline: string;
    highlight: string;
    ctaLabel: string;
    status: string;
  };
}

export const ICP_CONTENT: Record<IcpKey, IcpContent> = {
  baseline: {
    hero: {
      status: SHARED_STATUS,
      headline: {
        line1: 'Carry context',
        line2: 'forward so teams',
        highlight: 'don’t restart work.'
      },
      subheadLead: 'The context layer that keeps',
      subheadHighlight: 'commercial decisions',
      subheadConnector: 'usable for',
      rotatingTerms: [
        'Delivery Teams',
        'Onboarding Teams',
        'Implementation Teams',
        'Account Managers',
        'Project Managers',
        'Customer Success'
      ],
      subheadTail: '// From promise to execution — without rework, guesswork, or re-litigation',
      ctaLabel: 'REQUEST EARLY ACCESS',
      ctaNote: SHARED_CTA_NOTE
    },
    problemSplit: {
      title: 'The Context Cliff',
      subtitle: 'FIG 2.0: DECISION FIDELITY OVER TIME',
      xAxisLabels: ['DISCOVERY', 'DEAL SIGNED', 'HANDOVER', 'KICKOFF'],
      yAxisLabel: 'CONTEXT COMPLETENESS (%)',
      voidLabel: 'THE VOID',
      contextLostLabel: 'Context breaks here',
      startLabel: 'RECONSTRUCTING DECISIONS',
      topCard: 'SALES: "We aligned on the outcome."',
      bottomCardLabel: 'DELIVERY',
      bottomCardQuote: '"What exactly was agreed — and why?"',
      stats: [
        { icon: 'message', label: 'Rework & clarification', subtext: 'Teams re-ask what was already agreed.' },
        { icon: 'clock', label: 'Delivery speed', subtext: 'Starts slip while context is rebuilt.' },
        { icon: 'alert', label: 'Expectation risk', subtext: 'Misalignment shows up at kickoff.' }
      ]
    },
    painTimeline: {
      title: 'The Hidden Cost',
      subtitle: 'OF CONTEXT RECONSTRUCTION',
      bracketLabel: 'Hours lost every week to re-explaining decisions',
      hazardLabel: 'Reconstruction Phase',
      startLabel: 'DEAL CLOSED',
      endLabel: 'KICKOFF',
      impacts: [
        {
          title: 'Margin Pressure',
          description: 'Senior talent spends time rebuilding decisions instead of delivering outcomes.'
        },
        {
          title: 'Delayed Starts',
          description: 'Kickoffs slip while teams chase information that already exists somewhere.'
        },
        {
          title: 'Early Friction',
          description: 'Trust erodes when customers hear: “That’s not what we understood.”'
        }
      ]
    },
    riskDetection: {
      title: 'Risk Signals',
      subtitle: 'Semantic Risk Detection',
      transcript: [
        { speaker: 'Sales Rep', text: "Great to meet everyone. Let’s align on what success looks like." },
        { speaker: 'Client', text: 'We need SSO with Okta out of the box.' },
        { speaker: 'Sales Rep', text: "Understood — we’ll confirm the SSO requirements in scope." },
        { speaker: 'Client', text: 'What about the custom API for legacy inventory?' },
        {
          speaker: 'Sales Rep',
          text: 'We can include a custom API integration in the pilot phase.',
          highlight: true
        },
        { speaker: 'Client', text: 'Perfect — that’s what we need.' }
      ],
      riskTitle: 'RISK DETECTED: Unowned Commitment',
      insightLabel: 'INSIGHT:',
      insightText:
        'A delivery-impacting commitment is stated without clear owner, scope, or delivery confirmation.',
      actionText:
        'Confirm feasibility with delivery, assign an owner, and reflect it in the SOW / project plan before kickoff.'
    },
    howItWorks: {
      title: 'The Engine',
      subtitle: 'SOOTS CONTEXTUALIZATION LAYER',
      ingestTags: ['Emails', 'Transcripts', 'CRM Data'],
      steps: [
        {
          title: '1. Ingest',
          description: 'Capture decisions and commitments from the tools your teams already use.'
        },
        {
          title: '2. Map',
          description: 'Link commitments to owners, evidence, and rationale — so teams share one reality.'
        },
        {
          title: '3. Execute',
          description: 'Generate handoffs, risk flags, and delivery-ready plans so execution starts aligned.'
        }
      ]
    },
    integrations: {
      title: 'The context layer that connects your existing data sources.',
      description:
        'Soots sits on top of your stack. We ingest unstructured context across your ecosystem, without replacing a single tool.',
      footer: [
        { title: 'NO MIGRATION', description: 'Keep your systems' },
        { title: 'LOW FRICTION', description: 'Works with current workflows' },
        { title: 'FASTER CLARITY', description: 'Spot gaps early' }
      ],
      footerTag: '// UNIVERSAL CONTEXT INGESTION'
    },
    emailPopup: {
      title: 'Get in Touch',
      subtitle: '// PILOT PROGRAM INQUIRY'
    },
    footer: {
      headline:
        'When context carries forward, delivery starts aligned and trust doesn’t have to be rebuilt later',
      highlight: 'Alignment you can prove',
      ctaLabel: "Let's Prove the Value",
      status: SHARED_FOOTER_STATUS
    }
  },

  // -----------------------
  // Customer Success (renewal / expansion first; escalations are a symptom)
  // -----------------------
  cs: {
    hero: {
      status: SHARED_STATUS,
      headline: {
        line1: 'Protect renewals',
        line2: 'with a',
        highlight: 'shared customer reality.'
      },
      subheadLead: 'The context layer that keeps',
      subheadHighlight: 'customer commitments',
      subheadConnector: 'and decision rationale visible across',
      rotatingTerms: ['CS Leaders', 'Account Teams', 'Onboarding', 'Support', 'Delivery'],
      subheadTail: '// Fewer surprises. Stronger renewals. Expansion built on trust.',
      ctaLabel: 'IMPROVE RENEWAL READINESS',
      ctaNote: SHARED_CTA_NOTE
    },
    problemSplit: {
      title: 'The Shared Understanding Gap',
      subtitle: 'FIG 2.1: CUSTOMER REALITY FIDELITY OVER TIME',
      xAxisLabels: ['DISCOVERY', 'GO-LIVE', 'ADOPTION', 'RENEWAL'],
      yAxisLabel: 'CONTEXT COMPLETENESS (%)',
      voidLabel: 'THE VOID',
      contextLostLabel: 'Customer reality breaks here',
      startLabel: 'RE-ASKING + RE-EXPLAINING',
      topCard: 'CUSTOMER: "We agreed on this outcome."',
      bottomCardLabel: 'CS',
      bottomCardQuote: '"Where’s the decision trail — what was agreed and why?"',
      stats: [
        { icon: 'alert', label: 'Renewal risk', subtext: 'Commitments drift without a record.' },
        { icon: 'check', label: 'Trust at critical moments', subtext: 'Customers lose confidence fast.' },
        { icon: 'clock', label: 'Time spent reconstructing', subtext: 'CS burns hours chasing history.' }
      ]
    },
    painTimeline: {
      title: 'The Hidden Cost',
      subtitle: 'OF CONTEXT LOSS IN CS',
      bracketLabel: 'Hours per week lost to chasing “what was agreed”',
      hazardLabel: 'Context Reconstruction',
      startLabel: 'GO-LIVE',
      endLabel: 'RENEWAL',
      impacts: [
        {
          title: 'Trust Erosion',
          description: 'Customers notice repetition: “Didn’t we already cover this?”'
        },
        {
          title: 'Late Visibility',
          description: 'Churn and escalation risk surfaces too late to change the outcome.'
        },
        {
          title: 'Harder to Prove Value',
          description: 'When rationale is missing, outcomes become subjective and renewals get harder to defend.'
        }
      ]
    },
    riskDetection: {
      title: 'Risk Signals',
      subtitle: 'Semantic Risk Detection',
      transcript: [
        { speaker: 'Customer', text: 'We expected onboarding to include integration support.' },
        { speaker: 'CSM', text: 'Let’s confirm what was agreed and who owns it.' },
        { speaker: 'Customer', text: 'We also need weekly executive updates.' },
        {
          speaker: 'CSM',
          text: 'Understood — we’ll align on cadence, owner, and success criteria.',
          highlight: true
        },
        { speaker: 'Customer', text: 'Great. Please share the plan.' }
      ],
      riskTitle: 'RISK DETECTED: Expectation Without Evidence',
      insightLabel: 'INSIGHT:',
      insightText:
        'A renewal-impacting expectation exists without clear source, owner, or success criteria.',
      actionText:
        'Attach evidence (call/email/SOW), assign an owner, and confirm scope with the sponsor before it becomes a renewal blocker.'
    },
    howItWorks: {
      title: 'The Engine',
      subtitle: 'SOOTS CONTEXTUALIZATION LAYER',
      ingestTags: ['Emails', 'Calls', 'CRM Notes'],
      steps: [
        {
          title: '1. Ingest',
          description: 'Capture commitments, decisions, and rationale across customer touchpoints.'
        },
        {
          title: '2. Map',
          description: 'Link expectations to owners and evidence so “what was agreed” isn’t a debate.'
        },
        {
          title: '3. Execute',
          description: 'A shared customer reality that reduces surprises and strengthens renewal confidence.'
        }
      ]
    },
    integrations: {
      title: 'One customer story across systems.',
      description:
        'Soots connects CRM, support, and call data so CS can see commitments and rationale in one place — before renewal pressure hits.',
      footer: [
        { title: 'CONTINUITY', description: 'Keep the account story intact' },
        { title: 'EVIDENCE', description: 'Trace decisions to source' },
        { title: 'EARLY SIGNALS', description: 'Spot renewal risk sooner' }
      ],
      footerTag: '// CUSTOMER CONTEXT CONTINUITY'
    },
    emailPopup: {
      title: 'Request a Renewal Readiness Brief',
      subtitle: '// 10-MINUTE CUSTOMER CONTEXT AUDIT'
    },
    footer: {
      headline:
        'When context carries forward, renewals are earned with evidence — not defended in a scramble',
      highlight: 'Make customer truth durable',
      ctaLabel: 'ASSESS RENEWAL READINESS',
      status: SHARED_FOOTER_STATUS
    }
  },

  // -----------------------
  // Operations (fix system, not symptoms)
  // -----------------------
  ops: {
    hero: {
      status: SHARED_STATUS,
      headline: {
        line1: 'Fix the system,',
        line2: 'not the',
        highlight: 'symptoms.'
      },
      subheadLead: 'The context layer that keeps',
      subheadHighlight: 'execution intent',
      subheadConnector: 'consistent across',
      rotatingTerms: ['Programs', 'Teams', 'Regions', 'Functions', 'Leaders'],
      subheadTail: '// Improve reliability without adding more process.',
      ctaLabel: 'DIAGNOSE EXECUTION RISK',
      ctaNote: SHARED_CTA_NOTE
    },
    problemSplit: {
      title: 'The Alignment Gap',
      subtitle: 'FIG 2.2: EXECUTION ALIGNMENT OVER TIME',
      xAxisLabels: ['PLANNING', 'LAUNCH', 'HANDOFF', 'SCALE'],
      yAxisLabel: 'CONTEXT COMPLETENESS (%)',
      voidLabel: 'THE VOID',
      contextLostLabel: 'Alignment breaks here',
      startLabel: 'CLARIFICATION LOOP',
      topCard: 'PROGRAM: "Process shipped."',
      bottomCardLabel: 'OPS',
      bottomCardQuote: '"Why did teams produce different outcomes?"',
      stats: [
        { icon: 'layers', label: 'Rework load', subtext: 'Teams repeat decisions in parallel.' },
        { icon: 'message', label: 'Cross-team clarifications', subtext: 'Alignment meetings multiply.' },
        { icon: 'trendDown', label: 'Systemic drift', subtext: 'Execution diverges from intent.' }
      ]
    },
    painTimeline: {
      title: 'The Hidden Cost',
      subtitle: 'OF CONTEXT RECONSTRUCTION',
      bracketLabel: 'Hours per week spent reconciling intent vs reality',
      hazardLabel: 'Alignment Recovery',
      startLabel: 'LAUNCH',
      endLabel: 'SCALE',
      impacts: [
        {
          title: 'Operational Drag',
          description: 'Teams execute “correctly,” yet outcomes diverge because decisions weren’t shared.'
        },
        {
          title: 'Ops Becomes the Hub',
          description: 'You’re pulled into endless clarification instead of scaling reliability.'
        },
        {
          title: 'Internal Exposure',
          description: 'Reliability suffers when you can’t prove alignment and decision ownership.'
        }
      ]
    },
    riskDetection: {
      title: 'Risk Signals',
      subtitle: 'Semantic Risk Detection',
      transcript: [
        { speaker: 'Ops', text: 'We’re standardizing the workflow for Q2.' },
        { speaker: 'Team Lead', text: 'We already adapted it locally.' },
        { speaker: 'Ops', text: 'Is the adaptation documented and approved?' },
        {
          speaker: 'Team Lead',
          text: 'Not yet — but we can roll out our version.',
          highlight: true
        },
        { speaker: 'Ops', text: 'Let’s align before it scales.' }
      ],
      riskTitle: 'RISK DETECTED: Drift From Intended Operating Model',
      insightLabel: 'INSIGHT:',
      insightText:
        'Local execution is diverging without recorded rationale or approval, increasing systemic inconsistency.',
      actionText:
        'Trigger an alignment review, document the decision, and confirm the approved version before rollout.'
    },
    howItWorks: {
      title: 'The Engine',
      subtitle: 'SOOTS CONTEXTUALIZATION LAYER',
      ingestTags: ['Docs', 'Process Notes', 'Project Updates'],
      steps: [
        {
          title: '1. Ingest',
          description: 'Capture the decisions behind operating model changes across teams.'
        },
        {
          title: '2. Map',
          description: 'Make intent, ownership, and exceptions explicit — so drift is visible early.'
        },
        {
          title: '3. Execute',
          description: 'A single operational reality at scale — without adding bureaucracy.'
        }
      ]
    },
    integrations: {
      title: 'The governance layer that keeps execution aligned.',
      description:
        'Soots connects process tools, project updates, and system signals so Ops can scale with consistency — and explain why exceptions exist.',
      footer: [
        { title: 'GOVERNANCE', description: 'Catch drift before it spreads' },
        { title: 'EVIDENCE', description: 'Rationale for every deviation' },
        { title: 'SPEED', description: 'Align faster with less overhead' }
      ],
      footerTag: '// OPERATIONAL ALIGNMENT'
    },
    emailPopup: {
      title: 'Request an Alignment Diagnostic',
      subtitle: '// CONTEXT LOSS CHECKLIST'
    },
    footer: {
      headline:
        'When context carries forward, operations scale without silent divergence',
      highlight: 'Make alignment provable',
      ctaLabel: 'RESTORE OPERATIONAL CLARITY',
      status: SHARED_FOOTER_STATUS
    }
  },

  // -----------------------
  // Delivery / PS (deliver without renegotiating reality)
  // -----------------------
  delivery: {
    hero: {
      status: SHARED_STATUS,
      headline: {
        line1: 'Deliver without',
        line2: 'renegotiating',
        highlight: 'reality.'
      },
      subheadLead: 'The context layer that preserves',
      subheadHighlight: 'sales intent',
      subheadConnector: 'and delivery assumptions for',
      rotatingTerms: ['Implementation Teams', 'Project Managers', 'Consultants', 'Onboarding Teams'],
      subheadTail: '// Start projects with clarity. Protect margin. Avoid mis-selling disputes.',
      ctaLabel: 'DE-RISK DELIVERY',
      ctaNote: SHARED_CTA_NOTE
    },
    problemSplit: {
      title: 'The Commitment Cliff',
      subtitle: 'FIG 2.3: DELIVERY CONTEXT OVER TIME',
      xAxisLabels: ['DISCOVERY', 'SOW SIGNED', 'HANDOVER', 'KICKOFF'],
      yAxisLabel: 'CONTEXT COMPLETENESS (%)',
      voidLabel: 'THE VOID',
      contextLostLabel: 'Commitment breaks here',
      startLabel: 'RE-LITIGATING SCOPE',
      topCard: 'SALES: "It’s included."',
      bottomCardLabel: 'DELIVERY',
      bottomCardQuote: '"Where is that documented — and what does it cost?"',
      stats: [
        { icon: 'trendDown', label: 'Margin pressure', subtext: 'Scope gaps get priced late.' },
        { icon: 'message', label: 'Change requests', subtext: 'New asks surface after handoff.' },
        { icon: 'clock', label: 'Kickoff delays', subtext: 'Teams pause to re-litigate.' }
      ]
    },
    painTimeline: {
      title: 'The Hidden Cost',
      subtitle: 'OF CONTEXT RECONSTRUCTION',
      bracketLabel: 'Hours per project lost to rediscovery and clarification',
      hazardLabel: 'Scope Recovery',
      startLabel: 'SOW SIGNED',
      endLabel: 'KICKOFF',
      impacts: [
        {
          title: 'Margin Leakage',
          description: 'Senior delivery time goes to rebuilding scope instead of shipping outcomes.'
        },
        {
          title: 'Expectation Conflict',
          description: 'Mis-selling disputes appear when commitments aren’t traceable.'
        },
        {
          title: 'Timeline Risk',
          description: 'Kickoffs slip as teams re-decide what should have been captured upstream.'
        }
      ]
    },
    riskDetection: {
      title: 'Risk Signals',
      subtitle: 'Semantic Risk Detection',
      transcript: [
        { speaker: 'Client', text: 'We need a custom reporting dashboard at go-live.' },
        { speaker: 'Sales Rep', text: "Understood — we’ll confirm scope and effort." },
        { speaker: 'Delivery', text: 'That’s not reflected in the SOW.' },
        {
          speaker: 'Sales Rep',
          text: 'We can include it as part of the pilot scope.',
          highlight: true
        },
        { speaker: 'Client', text: 'Great — then we can proceed.' }
      ],
      riskTitle: 'RISK DETECTED: Unpriced Scope Commitment',
      insightLabel: 'INSIGHT:',
      insightText:
        'A delivery-impacting commitment is accepted without cost, timeline, or delivery approval.',
      actionText:
        'Review with delivery, confirm feasibility, and update scope/plan before kickoff to protect margin.'
    },
    howItWorks: {
      title: 'The Engine',
      subtitle: 'SOOTS CONTEXTUALIZATION LAYER',
      ingestTags: ['Emails', 'SOWs', 'Call Notes'],
      steps: [
        {
          title: '1. Ingest',
          description: 'Capture the deal decisions and assumptions made upstream.'
        },
        {
          title: '2. Map',
          description: 'Tie commitments to owners and evidence so scope is defensible.'
        },
        {
          title: '3. Execute',
          description: 'Start delivery with clarity and accountability — not improvisation.'
        }
      ]
    },
    integrations: {
      title: 'The legitimacy layer that protects delivery commitments.',
      description:
        'Soots connects CRM, SOWs, and project tools so delivery doesn’t pay for hidden promises — and scope stays defensible.',
      footer: [
        { title: 'EVIDENCE', description: 'Trace commitments to source' },
        { title: 'SAFETY', description: 'Catch scope risk early' },
        { title: 'SPEED', description: 'Faster kickoffs with clarity' }
      ],
      footerTag: '// DELIVERY CONTEXT CONTINUITY'
    },
    emailPopup: {
      title: 'Request a Handoff Risk Audit',
      subtitle: '// COMMITMENT CLARITY FRAMEWORK'
    },
    footer: {
      headline:
        'When context carries forward, delivery starts in control instead of in recovery',
      highlight: 'Never pay for decisions you didn’t make',
      ctaLabel: 'PREVENT DELIVERY SURPRISES',
      status: SHARED_FOOTER_STATUS
    }
  },

  // -----------------------
  // RevOps (shared revenue reality / forecast credibility)
  // -----------------------
  revops: {
    hero: {
      status: SHARED_STATUS,
      headline: {
        line1: 'Protect forecast',
        line2: 'credibility',
        highlight: 'after every close.'
      },
      subheadLead: 'The context layer that keeps',
      subheadHighlight: 'deal intent',
      subheadConnector: 'consistent for',
      rotatingTerms: ['Sales', 'Customer Success', 'Finance', 'Revenue Leaders'],
      subheadTail: '// Forecasts based on evidence — and delivery reality, not anecdotes.',
      ctaLabel: 'IMPROVE FORECAST INTEGRITY',
      ctaNote: SHARED_CTA_NOTE
    },
    problemSplit: {
      title: 'The Revenue Reality Split',
      subtitle: 'FIG 2.4: PIPELINE MEANING OVER TIME',
      xAxisLabels: ['STAGE ENTRY', 'COMMIT', 'HANDOFF', 'FORECAST'],
      yAxisLabel: 'CONTEXT COMPLETENESS (%)',
      voidLabel: 'THE VOID',
      contextLostLabel: 'Meaning breaks here',
      startLabel: 'RECONCILIATION LOOP',
      topCard: 'SALES: "This is Commit."',
      bottomCardLabel: 'REVOPS',
      bottomCardQuote: '"Based on what evidence — and whose criteria?"',
      stats: [
        { icon: 'trendDown', label: 'Forecast variance', subtext: 'Commit stages lose meaning.' },
        { icon: 'layers', label: 'Pipeline rework', subtext: 'Deals get re-classified late.' },
        { icon: 'alert', label: 'Post-close fallout', subtext: 'Delivery reality breaks forecasts.' }
      ]
    },
    painTimeline: {
      title: 'The Hidden Cost',
      subtitle: 'OF CONTEXT RECONSTRUCTION',
      bracketLabel: 'Hours per forecast cycle lost to reconciliation',
      hazardLabel: 'Forecast Reconciliation',
      startLabel: 'STAGE CHANGE',
      endLabel: 'FORECAST LOCK',
      impacts: [
        {
          title: 'Forecast Misses',
          description: 'Pipeline stages mean different things across teams, so forecasts are built on interpretation.'
        },
        {
          title: 'Clean Data, Wrong Story',
          description: 'CRM fields can be “correct” while the decision trail is missing.'
        },
        {
          title: 'Credibility Erodes',
          description: 'Post-close delivery fallout reduces trust in the numbers.'
        }
      ]
    },
    riskDetection: {
      title: 'Risk Signals',
      subtitle: 'Semantic Risk Detection',
      transcript: [
        { speaker: 'Sales', text: 'We moved the deal to Commit.' },
        { speaker: 'RevOps', text: 'Do we have signed redlines / legal approval?' },
        {
          speaker: 'Sales',
          text: 'Not yet — but the buyer says it’s a formality.',
          highlight: true
        },
        { speaker: 'Finance', text: 'We need evidence before we lock the forecast.' }
      ],
      riskTitle: 'RISK DETECTED: Stage Change Without Evidence',
      insightLabel: 'INSIGHT:',
      insightText:
        'The deal moved stages without meeting agreed criteria or attaching supporting proof.',
      actionText:
        'Require decision evidence (docs/notes/approvals) before moving to Commit so the forecast is defensible.'
    },
    howItWorks: {
      title: 'The Engine',
      subtitle: 'SOOTS CONTEXTUALIZATION LAYER',
      ingestTags: ['CRM Stages', 'Deal Notes', 'Call Transcripts'],
      steps: [
        {
          title: '1. Ingest',
          description: 'Capture the decision trail behind stage changes and commitments.'
        },
        {
          title: '2. Map',
          description: 'Normalize stage meaning so pipeline reflects revenue reality.'
        },
        {
          title: '3. Execute',
          description: 'Forecasts built on evidence — and aligned with what can actually be delivered.'
        }
      ]
    },
    integrations: {
      title: 'The revenue truth layer that unifies your stack.',
      description:
        'Soots connects CRM, CPQ, and BI so pipeline reality stays consistent from sales to finance — and assumptions stay auditable.',
      footer: [
        { title: 'EVIDENCE', description: 'Proof behind every stage' },
        { title: 'GOVERNANCE', description: 'Shared criteria across GTM' },
        { title: 'SPEED', description: 'Fewer forecast fire drills' }
      ],
      footerTag: '// REVENUE CONTEXT INTEGRITY'
    },
    emailPopup: {
      title: 'Request a Revenue Reality Diagnostic',
      subtitle: '// FORECAST INTEGRITY CHECKLIST'
    },
    footer: {
      headline:
        'When context carries forward, forecasts become defendable and teams align faster',
      highlight: 'Make revenue truth provable',
      ctaLabel: 'VALIDATE FORECAST INTEGRITY',
      status: SHARED_FOOTER_STATUS
    }
  },

  // -----------------------
  // AI Platform / Initiative Lead (coherence, “why”, governance)
  // -----------------------
  ai: {
    hero: {
      status: SHARED_STATUS,
      headline: {
        line1: 'Fast-track AI',
        line2: 'with',
        highlight: 'enterprise context.'
      },
      subheadLead: 'The context layer that makes',
      subheadHighlight: 'business meaning',
      subheadConnector: 'coherent across',
      rotatingTerms: ['Emails', 'Tickets', 'Calls', 'Docs', 'Dashboards'],
      subheadTail: '// Coherence before automation — auditability by default.',
      ctaLabel: 'ASSESS AI READINESS',
      ctaNote: SHARED_CTA_NOTE
    },
    problemSplit: {
      title: 'The Meaning Drop',
      subtitle: 'FIG 2.5: COHERENCE OVER TIME',
      xAxisLabels: ['CAPTURE', 'INGEST', 'MODEL', 'DEPLOY'],
      yAxisLabel: 'CONTEXT COMPLETENESS (%)',
      voidLabel: 'THE VOID',
      contextLostLabel: 'Meaning breaks here',
      startLabel: 'MANUAL PATCHING',
      topCard: 'DATA: "We have artifacts."',
      bottomCardLabel: 'AI LEAD',
      bottomCardQuote: '"We don’t have coherent rationale."',
      stats: [
        { icon: 'message', label: 'Manual intervention', subtext: 'Humans patch missing meaning.' },
        { icon: 'alert', label: 'Pilot stall risk', subtext: 'Models pause without clarity.' },
        { icon: 'file', label: 'Governance overhead', subtext: 'Audit trails are rebuilt by hand.' }
      ]
    },
    painTimeline: {
      title: 'The Hidden Cost',
      subtitle: 'OF CONTEXT RECONSTRUCTION',
      bracketLabel: 'Hours per iteration lost to making inputs “make sense”',
      hazardLabel: 'Coherence Recovery',
      startLabel: 'PILOT START',
      endLabel: 'TRUST REVIEW',
      impacts: [
        {
          title: 'Pilot Drag',
          description: 'Models underperform when inputs contain contradictions or missing meaning.'
        },
        {
          title: 'Business Distrust',
          description: 'Summaries are fine — but leaders don’t trust AI for decisions without the “why.”'
        },
        {
          title: 'Governance Friction',
          description: 'Without traceable rationale, automation becomes hard to approve and scale.'
        }
      ]
    },
    riskDetection: {
      title: 'Risk Signals',
      subtitle: 'Semantic Risk Detection',
      transcript: [
        { speaker: 'AI Lead', text: 'The model is trained on support tickets.' },
        { speaker: 'Analyst', text: 'Do we tag root causes consistently?' },
        {
          speaker: 'AI Lead',
          text: 'Not consistently — we infer them from free-text notes.',
          highlight: true
        },
        { speaker: 'Compliance', text: 'We need traceable rationale for automation decisions.' }
      ],
      riskTitle: 'RISK DETECTED: Coherence Gap',
      insightLabel: 'INSIGHT:',
      insightText:
        'Inputs lack shared meaning and traceability, increasing inconsistent outputs and audit risk.',
      actionText:
        'Normalize definitions/labels, capture rationale, and require traceability before scaling automation.'
    },
    howItWorks: {
      title: 'The Engine',
      subtitle: 'SOOTS CONTEXTUALIZATION LAYER',
      ingestTags: ['Warehouse', 'Tickets', 'Calls'],
      steps: [
        {
          title: '1. Ingest',
          description: 'Capture unstructured business context alongside structured data.'
        },
        {
          title: '2. Map',
          description: 'Create a coherent layer of meaning your models — and auditors — can rely on.'
        },
        {
          title: '3. Execute',
          description: 'Power trustworthy AI outputs with context-rich, governable inputs.'
        }
      ]
    },
    integrations: {
      title: 'The coherence layer that makes AI reliable.',
      description:
        'Soots connects the data warehouse, knowledge bases, and interaction data so models learn what decisions mean — and why they were made.',
      footer: [
        { title: 'GOVERNANCE', description: 'Audit-ready context' },
        { title: 'TRACEABILITY', description: 'Rationale behind outputs' },
        { title: 'SPEED', description: 'Faster path to trusted automation' }
      ],
      footerTag: '// AI CONTEXT COHERENCE'
    },
    emailPopup: {
      title: 'Request an AI Context Readiness Scorecard',
      subtitle: '// COHERENCE AUDIT'
    },
    footer: {
      headline:
        'When context carries forward, AI delivers consistent outcomes leaders can trust',
      highlight: 'Build coherence first',
      ctaLabel: 'VALIDATE AI COHERENCE',
      status: SHARED_FOOTER_STATUS
    }
  }
};