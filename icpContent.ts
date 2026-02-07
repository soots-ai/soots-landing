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
  return (slug && ICP_PATH_MAP[slug]) ? ICP_PATH_MAP[slug] : 'baseline';
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
    stats: Array<{ value: string; label: string }>;
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
      subheadConnector: 'intact for',
      rotatingTerms: [
        'Delivery Teams',
        'Onboarding Teams',
        'Implementation Teams',
        'Account Managers',
        'Project Managers',
        'Customer Success'
      ],
      subheadTail: '// Promise to execution, no rework',
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
      topCard: 'SALES: "We agreed on the outcome."',
      bottomCardLabel: 'DELIVERY',
      bottomCardQuote: '"What exactly was agreed — and why?"',
      stats: [
        { value: '30%', label: 'Margin Pressure' },
        { value: '60h', label: 'Reconstruction Time' },
        { value: '2x', label: 'Escalation Risk' }
      ]
    },
    painTimeline: {
      title: 'The Hidden Cost',
      subtitle: 'OF CONTEXT RECONSTRUCTION',
      bracketLabel: '3–6 Hours Per Lead / Week',
      hazardLabel: 'Reconstruction Phase',
      startLabel: 'DEAL CLOSED',
      endLabel: 'KICKOFF',
      impacts: [
        {
          title: 'Margin Pressure',
          description: 'Senior talent spends time rebuilding decisions instead of delivering outcomes.'
        },
        {
          title: 'Delayed Start',
          description: 'Kickoffs slip while teams re-collect information that already exists somewhere.'
        },
        {
          title: 'Early Friction',
          description: '"That’s not what we were told" is how trust gets lost before delivery even begins.'
        }
      ]
    },
    riskDetection: {
      title: 'Risk Signals',
      subtitle: 'Semantic Risk Detection',
      transcript: [
        { speaker: 'Sales Rep', text: "Great to meet everyone. Let’s align on what success looks like." },
        { speaker: 'Client', text: 'We need SSO with Okta out of the box.' },
        { speaker: 'Sales Rep', text: "Understood — we’ll confirm the SSO requirements in the scope." },
        { speaker: 'Client', text: 'What about the custom API for legacy inventory?' },
        {
          speaker: 'Sales Rep',
          text: 'We can include the custom API integration in the pilot phase.',
          highlight: true
        },
        { speaker: 'Client', text: 'Perfect — that’s what we need.' }
      ],
      riskTitle: 'RISK DETECTED: Unowned Commitment',
      insightLabel: 'INSIGHT:',
      insightText: 'A delivery-impacting commitment is stated without a documented owner, scope, or timeline.',
      actionText: 'Confirm feasibility with delivery, assign an owner, and reflect it in the SOW / project plan before kickoff.'
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'SOOTS CONTEXTUALIZATION LAYER',
      ingestTags: ['Emails', 'Transcripts', 'CRM Data'],
      steps: [
        {
          title: '1. Ingest',
          description: 'Capture decisions and commitments from the tools your teams already use.'
        },
        {
          title: '2. Structure',
          description: 'Link commitments to owners, evidence, and rationale — so teams share one reality.'
        },
        {
          title: '3. Activate',
          description: 'Generate handoffs, risk flags, and delivery-ready plans so execution starts aligned.'
        }
      ]
    },
    integrations: {
      title: 'Connect the data you already have — and make it usable.',
      description:
        'Soots sits on top of your existing tools to preserve decision context across emails, calls, CRM notes, docs, and tickets — without replacing anything.',
      footer: [
        { title: 'NO MIGRATION', description: 'Keep your systems' },
        { title: 'LOW FRICTION', description: 'Works with current workflows' },
        { title: 'FAST SIGNALS', description: 'Spot gaps early' }
      ],
      footerTag: '// UNIVERSAL CONTEXT INGESTION'
    },
    emailPopup: {
      title: 'Get in Touch',
      subtitle: '// PILOT PROGRAM INQUIRY'
    },
    footer: {
      headline: 'When context carries forward, delivery starts aligned — and trust doesn’t have to be rebuilt later.',
      highlight: 'Alignment you can prove',
      ctaLabel: "Let's Prove the Value",
      status: SHARED_FOOTER_STATUS
    }
  },

  cs: {
    hero: {
      status: SHARED_STATUS,
      headline: {
        line1: 'Protect renewals',
        line2: 'by keeping a',
        highlight: 'shared customer reality.'
      },
      subheadLead: 'The context layer that keeps',
      subheadHighlight: 'customer commitments',
      subheadConnector: 'and decision rationale visible for',
      rotatingTerms: [
        'Customer Success',
        'Account Teams',
        'Onboarding',
        'Support',
        'Delivery'
      ],
      subheadTail: '// Fewer surprises. Stronger renewals. Expansion built on trust.',
      ctaLabel: 'STRENGTHEN RENEWAL READINESS',
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
        { value: '2x', label: 'Renewal Risk' },
        { value: '45h', label: 'Context Rebuild / Account' },
        { value: '18%', label: 'Expansion Drag' }
      ]
    },
  
    painTimeline: {
      title: 'The Hidden Cost',
      subtitle: 'OF CONTEXT LOSS IN CS',
      bracketLabel: '3–6 Hours Per Account / Week',
      hazardLabel: 'Context Reconstruction',
      startLabel: 'GO-LIVE',
      endLabel: 'RENEWAL',
      impacts: [
        {
          title: 'Trust Erosion',
          description: 'Customers feel the repetition: “Didn’t we already cover this?”'
        },
        {
          title: 'Late Surprises',
          description: 'Critical assumptions resurface too late—right when renewal stakes are highest.'
        },
        {
          title: 'Value Is Harder to Prove',
          description: 'When rationale is missing, outcomes become subjective and renewals become harder to defend.'
        }
      ]
    },
  
    riskDetection: {
      title: 'Risk Signals',
      subtitle: 'Semantic Risk Detection',
      transcript: [
        { speaker: 'Customer', text: 'We expected onboarding to include integration support.' },
        { speaker: 'CSM', text: 'Let’s confirm what’s included and who owns that.' },
        { speaker: 'Customer', text: 'Also, weekly exec updates were part of the agreement.' },
        {
          speaker: 'CSM',
          text: 'Understood — we’ll align on cadence, owner, and success criteria.',
          highlight: true
        },
        { speaker: 'Customer', text: 'Great. That keeps us on track.' }
      ],
      riskTitle: 'RISK DETECTED: Commitment Without Evidence',
      insightLabel: 'INSIGHT:',
      insightText: 'A renewal-impacting expectation exists without a clear owner, source, or success criteria.',
      actionText: 'Attach evidence (call/email/SOW), assign an owner, and confirm scope with the sponsor before it becomes a renewal blocker.'
    },
  
    howItWorks: {
      title: 'How It Works',
      subtitle: 'SOOTS CONTEXTUALIZATION LAYER',
      ingestTags: ['Emails', 'Calls', 'CRM Notes'],
      steps: [
        {
          title: '1. Ingest',
          description: 'Capture customer commitments and decision rationale across every touchpoint.'
        },
        {
          title: '2. Map',
          description: 'Tie expectations to owners and evidence so “what was agreed” is never a debate.'
        },
        {
          title: '3. Execute',
          description: 'A shared customer reality that reduces surprises and strengthens renewals and expansion.'
        }
      ]
    },
  
    integrations: {
      title: 'One customer story across systems.',
      description:
        'Soots connects CRM, support, and call data so CS can see commitments, decisions, and rationale in one place—before renewal pressure hits.',
      footer: [
        { title: 'CONTINUITY', description: 'Keep account reality intact' },
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
      headline: 'When context carries forward, renewals are earned with evidence — not defended in a scramble.',
      highlight: 'Make customer truth durable',
      ctaLabel: 'ASSESS RENEWAL READINESS',
      status: SHARED_FOOTER_STATUS
    }
  },
  

  ops: {
    hero: {
      status: SHARED_STATUS,
      headline: {
        line1: 'Scale execution',
        line2: 'without losing',
        highlight: 'shared understanding.'
      },
      subheadLead: 'The context layer that keeps',
      subheadHighlight: 'operating decisions',
      subheadConnector: 'consistent across',
      rotatingTerms: [
        'Programs',
        'Teams',
        'Regions',
        'Functions',
        'Leaders'
      ],
      subheadTail: '// Alignment without rework',
      ctaLabel: 'VALIDATE ALIGNMENT',
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
      bottomCardLabel: 'OPERATIONS',
      bottomCardQuote: '"Why did teams execute different outcomes?"',
      stats: [
        { value: '34%', label: 'Rework Load' },
        { value: '3x', label: 'Clarification Cycles' },
        { value: '21%', label: 'Outcome Drift' }
      ]
    },
    painTimeline: {
      title: 'The Hidden Cost',
      subtitle: 'OF CONTEXT RECONSTRUCTION',
      bracketLabel: '2–4 Hours Per Team / Week',
      hazardLabel: 'Alignment Recovery',
      startLabel: 'LAUNCH',
      endLabel: 'SCALE',
      impacts: [
        {
          title: 'Operational Drag',
          description: 'Teams execute “correctly,” yet outcomes diverge because intent and decisions weren’t shared.'
        },
        {
          title: 'Coordination Overhead',
          description: 'Ops becomes the escalation and clarification hub instead of a scaling engine.'
        },
        {
          title: 'Internal Exposure',
          description: 'Reliability drops when you can’t prove alignment and decision ownership.'
        }
      ]
    },
    riskDetection: {
      title: 'Risk Signals',
      subtitle: 'Semantic Risk Detection',
      transcript: [
        { speaker: 'Ops', text: 'We’re standardizing the workflow for Q2.' },
        { speaker: 'Team Lead', text: 'Great — we already adapted it locally.' },
        { speaker: 'Ops', text: 'Is the adaptation documented and approved?' },
        {
          speaker: 'Team Lead',
          text: 'Not yet, but we can roll out our version.',
          highlight: true
        },
        { speaker: 'Ops', text: 'Let’s align before it scales.' }
      ],
      riskTitle: 'RISK DETECTED: Drift From Operating Model',
      insightLabel: 'INSIGHT:',
      insightText: 'Local execution is diverging from intended standards without recorded rationale or approval.',
      actionText: 'Trigger an alignment review, document the decision, and confirm the approved version before rollout.'
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'SOOTS CONTEXTUALIZATION LAYER',
      ingestTags: ['Docs', 'Process Notes', 'Project Updates'],
      steps: [
        {
          title: '1. Ingest',
          description: 'Capture the decisions behind operating model changes across teams.'
        },
        {
          title: '2. Structure',
          description: 'Make intent, ownership, and exceptions explicit — so drift is visible early.'
        },
        {
          title: '3. Activate',
          description: 'A single operational reality at scale — without adding more process.'
        }
      ]
    },
    integrations: {
      title: 'Alignment that works across your existing systems.',
      description:
        'Soots connects process tools, project updates, and system data so operations can scale with consistency — and prove why exceptions exist.',
      footer: [
        { title: 'GOVERNANCE', description: 'Catch drift before it spreads' },
        { title: 'EVIDENCE', description: 'Rationale for every deviation' },
        { title: 'SPEED', description: 'Align faster, with less overhead' }
      ],
      footerTag: '// OPERATIONAL ALIGNMENT'
    },
    emailPopup: {
      title: 'Request an Alignment Diagnostic',
      subtitle: '// CONTEXT LOSS CHECKLIST'
    },
    footer: {
      headline: 'When context carries forward, operations scale without silent divergence.',
      highlight: 'Make alignment provable',
      ctaLabel: 'RESTORE OPERATIONAL CLARITY',
      status: SHARED_FOOTER_STATUS
    }
  },

  delivery: {
    hero: {
      status: SHARED_STATUS,
      headline: {
        line1: 'Deliver what was sold',
        line2: 'without',
        highlight: 're-litigating scope.'
      },
      subheadLead: 'The context layer that preserves',
      subheadHighlight: 'deal decisions',
      subheadConnector: 'for',
      rotatingTerms: [
        'Implementation Teams',
        'Project Managers',
        'Consultants',
        'Onboarding Teams'
      ],
      subheadTail: '// Protect margin with clarity',
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
      startLabel: 'RE-LITIGATING ASSUMPTIONS',
      topCard: 'SALES: "It’s included."',
      bottomCardLabel: 'DELIVERY',
      bottomCardQuote: '"Where is that documented — and what does it cost?"',
      stats: [
        { value: '30%', label: 'Margin Pressure' },
        { value: '6wk', label: 'Start Delays' },
        { value: '2x', label: 'Change Requests' }
      ]
    },
    painTimeline: {
      title: 'The Hidden Cost',
      subtitle: 'OF CONTEXT RECONSTRUCTION',
      bracketLabel: '5–9 Hours Per Project',
      hazardLabel: 'Scope Recovery',
      startLabel: 'SOW SIGNED',
      endLabel: 'KICKOFF',
      impacts: [
        {
          title: 'Margin Leakage',
          description: 'Senior delivery time goes to rebuilding scope and assumptions instead of executing.'
        },
        {
          title: 'Scope Conflict',
          description: 'Mis-selling accusations appear when commitments aren’t traceable.'
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
        { speaker: 'Sales Rep', text: "Understood — we’ll confirm what’s included in the scope." },
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
      insightText: 'A delivery-impacting commitment is accepted without cost, timeline, or delivery approval.',
      actionText: 'Review with delivery, confirm feasibility, and update scope/plan before kickoff to protect margin.'
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'SOOTS CONTEXTUALIZATION LAYER',
      ingestTags: ['Emails', 'SOWs', 'Call Notes'],
      steps: [
        {
          title: '1. Ingest',
          description: 'Capture the deal decisions and assumptions made upstream.'
        },
        {
          title: '2. Structure',
          description: 'Tie commitments to owners and evidence so scope is defensible.'
        },
        {
          title: '3. Activate',
          description: 'Start delivery with clarity and accountability — not improvisation.'
        }
      ]
    },
    integrations: {
      title: 'Protect delivery by making commitments traceable.',
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
      headline: 'When context carries forward, delivery starts in control — not in recovery.',
      highlight: 'Never pay for decisions you didn’t make',
      ctaLabel: 'PREVENT DELIVERY SURPRISES',
      status: SHARED_FOOTER_STATUS
    }
  },

  revops: {
    hero: {
      status: SHARED_STATUS,
      headline: {
        line1: 'Turn pipeline data',
        line2: 'into a',
        highlight: 'shared revenue reality.'
      },
      subheadLead: 'The context layer that makes',
      subheadHighlight: 'stage changes',
      subheadConnector: 'mean the same thing to',
      rotatingTerms: [
        'Sales',
        'Customer Success',
        'Finance',
        'Revenue Leaders'
      ],
      subheadTail: '// Forecasts backed by evidence',
      ctaLabel: 'PROVE FORECAST INTEGRITY',
      ctaNote: SHARED_CTA_NOTE
    },
    problemSplit: {
      title: 'The Revenue Reality Split',
      subtitle: 'FIG 2.4: PIPELINE MEANING OVER TIME',
      xAxisLabels: ['STAGE ENTRY', 'COMMIT', 'HANDOFF', 'FORECAST'],
      yAxisLabel: 'CONTEXT COMPLETENESS (%)',
      voidLabel: 'THE VOID',
      contextLostLabel: 'Meaning breaks here',
      startLabel: 'RECONCILIATION MODE',
      topCard: 'SALES: "It’s a Commit."',
      bottomCardLabel: 'REVOPS',
      bottomCardQuote: '"Based on what evidence — and whose criteria?"',
      stats: [
        { value: '22%', label: 'Forecast Variance' },
        { value: '3x', label: 'Reconciliation Cycles' },
        { value: '18d', label: 'Close Slip' }
      ]
    },
    painTimeline: {
      title: 'The Hidden Cost',
      subtitle: 'OF CONTEXT RECONSTRUCTION',
      bracketLabel: '2–5 Hours Per Forecast Cycle',
      hazardLabel: 'Forecast Reconciliation',
      startLabel: 'STAGE CHANGE',
      endLabel: 'FORECAST LOCK',
      impacts: [
        {
          title: 'Forecast Misses',
          description: 'Stages mean different things across teams — so the forecast is built on interpretation.'
        },
        {
          title: 'Misleading Clean Data',
          description: 'CRM fields can be “correct” while reality is missing the decision trail.'
        },
        {
          title: 'Reactive Reconciliation',
          description: 'RevOps becomes the reconciler, not the operator of a reliable revenue system.'
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
      insightText: 'The deal moved stages without meeting agreed criteria or attaching supporting proof.',
      actionText: 'Require decision evidence (docs/notes/approvals) before moving to Commit to keep the forecast defensible.'
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'SOOTS CONTEXTUALIZATION LAYER',
      ingestTags: ['CRM Stages', 'Deal Notes', 'Call Transcripts'],
      steps: [
        {
          title: '1. Ingest',
          description: 'Capture the decision trail behind stage changes and commitments.'
        },
        {
          title: '2. Structure',
          description: 'Normalize meaning and criteria so pipeline reflects reality — not interpretation.'
        },
        {
          title: '3. Activate',
          description: 'Forecasts built on evidence so teams stop arguing about what the data “means.”'
        }
      ]
    },
    integrations: {
      title: 'Unify your revenue stack with decision context.',
      description:
        'Soots connects CRM, enablement, and BI so pipeline stages stay consistent from Sales to Finance — and forecast assumptions are auditable.',
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
      headline: 'When context carries forward, the forecast becomes defendable — and teams align faster.',
      highlight: 'Make revenue truth provable',
      ctaLabel: 'VALIDATE FORECAST INTEGRITY',
      status: SHARED_FOOTER_STATUS
    }
  },

  ai: {
    hero: {
      status: SHARED_STATUS,
      headline: {
        line1: 'Give AI the',
        line2: 'context it needs',
        highlight: 'to earn trust.'
      },
      subheadLead: 'The context layer that makes',
      subheadHighlight: 'business meaning',
      subheadConnector: 'coherent across',
      rotatingTerms: [
        'Emails',
        'Tickets',
        'Calls',
        'Docs',
        'Dashboards'
      ],
      subheadTail: '// Coherence before automation',
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
      bottomCardQuote: '"We don’t have coherent meaning."',
      stats: [
        { value: '3x', label: 'Manual Intervention' },
        { value: '40%', label: 'Pilot Stall Rate' },
        { value: '2x', label: 'Governance Overhead' }
      ]
    },
    painTimeline: {
      title: 'The Hidden Cost',
      subtitle: 'OF CONTEXT RECONSTRUCTION',
      bracketLabel: '4–10 Hours Per Model Iteration',
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
          description: 'Inconsistent outputs kill adoption — even if the model is “working.”'
        },
        {
          title: 'Governance Friction',
          description: 'Without traceable rationale, automation becomes hard to approve.'
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
      insightText: 'Inputs lack shared meaning and traceability, increasing the chance of inconsistent outputs and audit failures.',
      actionText: 'Normalize meaning (labels/definitions), capture rationale, and require traceability before scaling automation.'
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'SOOTS CONTEXTUALIZATION LAYER',
      ingestTags: ['Warehouse', 'Tickets', 'Calls'],
      steps: [
        {
          title: '1. Ingest',
          description: 'Capture unstructured business context alongside structured data.'
        },
        {
          title: '2. Structure',
          description: 'Create a coherent layer of meaning your models — and auditors — can rely on.'
        },
        {
          title: '3. Activate',
          description: 'Power AI outputs with context-rich inputs that are consistent, governable, and trusted.'
        }
      ]
    },
    integrations: {
      title: 'A coherence layer that makes AI outputs reliable.',
      description:
        'Soots connects warehouses, knowledge bases, and interaction data so models learn what decisions mean — and why they were made.',
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
      headline: 'When context carries forward, AI delivers consistent outcomes — and teams can trust the results.',
      highlight: 'Build coherence first',
      ctaLabel: 'VALIDATE AI COHERENCE',
      status: SHARED_FOOTER_STATUS
    }
  }
};
