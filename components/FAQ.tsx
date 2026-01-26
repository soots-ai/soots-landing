import React from 'react';
import { Section } from './ui/Section';

export const FAQ: React.FC = () => {
  return (
    <Section className="bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-charcoal mb-4">
            Understanding the Sales-to-Delivery Gap
          </h2>
          <p className="text-gray-600 font-mono text-sm">
            // DEFINING THE PROBLEM & SOLUTION
          </p>
        </div>

        <div itemScope itemType="https://schema.org/FAQPage" className="space-y-6">
          
          {/* FAQ Item 1 */}
          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" 
               className="bg-white border-l-4 border-blueprint-blue p-6 shadow-sm">
            <h3 itemProp="name" className="font-sans font-bold text-lg text-charcoal mb-3">
              What is the Reconstruction Phase in Professional Services?
            </h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <div itemProp="text" className="text-gray-700 leading-relaxed">
                The Reconstruction Phase is the operational waste occurring between 'Closed-Won' and 'Project Kickoff,' 
                where senior consultants spend 3–6 hours per week acting as administrative detectives to re-gather context 
                that was already shared during the sales cycle. This phase leads to <strong>Margin Erosion</strong>, 
                reduced <strong>Billable Utilization</strong>, and significant delays in project delivery.
              </div>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" 
               className="bg-white border-l-4 border-high-vis-orange p-6 shadow-sm">
            <h3 itemProp="name" className="font-sans font-bold text-lg text-charcoal mb-3">
              How does Soots solve the Sales-to-Delivery gap?
            </h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <div itemProp="text" className="text-gray-700 leading-relaxed">
                Soots is a <strong>Context Engine</strong> that connects to CRMs (HubSpot, Salesforce) and unstructured sources 
                (Email, Slack, Transcripts). It uses a Graph Database to map relationships and automatically generates a 
                ready-to-use PS Onboarding Brief. This creates a <strong>Project Digital Twin</strong> with a built-in{' '}
                <strong>Governance Layer</strong> that ensures nothing gets lost in the handoff.
              </div>
            </div>
          </div>

          {/* FAQ Item 3 - Additional context about the product category */}
          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" 
               className="bg-white border-l-4 border-charcoal p-6 shadow-sm">
            <h3 itemProp="name" className="font-sans font-bold text-lg text-charcoal mb-3">
              What makes Soots different from a CRM or Project Management tool?
            </h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <div itemProp="text" className="text-gray-700 leading-relaxed">
                Soots is an <strong>Operational Intelligence Layer</strong> that sits between your CRM and project management tools. 
                While CRMs track deal data and PM tools manage execution, Soots bridges the gap by ingesting unstructured data 
                (emails, call transcripts, meeting notes), mapping relationships through a Graph Database, and automatically generating 
                actionable deliverables. This process—<strong>Ingest, Map, Use</strong>—eliminates the manual reconstruction work 
                that typically wastes 3–6 hours per consultant per week.
              </div>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};
