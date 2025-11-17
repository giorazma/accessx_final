import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase, isSupabaseConfigured } from "@/integrations/supabase/client";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import designImpactImage from "@/assets/3550f424-9762-4568-ab38-52186b47b995.jpeg";

interface Insight {
  id: string;
  title: string;
  featured_image: string | null;
  description: string;
  body: string;
  author_name: string;
  published_date: string;
  slug?: string;
}

// Static insights with full content as fallback
const staticInsightsWithBody: Insight[] = [
  {
    id: "1",
    title: "Design Creates Impact by Translating User Needs into Business Success",
    featured_image: designImpactImage,
    description: "In today's digital-first world, design is not just about how things look — it's about how well they work, for users and for business. Discover how user needs drive meaningful experiences and business results.",
    author_name: "AccessX Team",
    published_date: "2025-01-17",
    slug: "design-creates-impact",
    body: `
      <p class="text-muted-foreground leading-relaxed mb-6">
        In today's digital-first world, design is not just about how things look — it's about how well they work, for users and for business. When we truly listen to what users need, and embed those insights deeply into our design, the result is meaningful user experiences that also drive business results.
      </p>

      <h2 class="text-2xl font-bold mb-4">Understanding user needs</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        At the heart of design lies: what are user needs? According to the <a href="https://www.interaction-design.org/" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">Interaction Design Foundation</a>, user needs are "users' desires, goals, preferences and expectations when they interact with a product or service." In short: the "why" behind what users are trying to accomplish.
      </p>
      <p class="text-muted-foreground leading-relaxed mb-6">
        For example, as the <a href="https://www.nngroup.com/" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">Nielsen Norman Group</a> explains in its "Define" stage of design thinking:
      </p>
      <blockquote class="border-l-4 border-accent pl-6 mb-6 italic text-muted-foreground">
        "A user need statement … captures what we want to achieve with our design, not how."
      </blockquote>
      <p class="text-muted-foreground leading-relaxed mb-6">
        By framing needs as verbs (e.g., "to quickly compare options") rather than nouns ("we need a dropdown"), we avoid locking in onto solutions too early.
      </p>

      <h2 class="text-2xl font-bold mb-4">Linking user needs to business impact</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Great design treats user needs and business goals as two sides of the same coin. From the <a href="https://uxdesign.cc/" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">UX Collective</a> article:
      </p>
      <blockquote class="border-l-4 border-accent pl-6 mb-6 italic text-muted-foreground">
        "A successful user experience is not about meeting the exact needs of the users, the end goal is always business outcomes."
      </blockquote>
      <p class="text-muted-foreground leading-relaxed mb-6">
        And in practice: investing in UX delivers real business value — as shown by the Design Management Institute's Design Value Index and at-scale case studies. Moreover, one recent article found that a well-designed UX could boost a site's conversion rate by up to 200%.
      </p>

      <h2 class="text-2xl font-bold mb-4">How design makes this happen</h2>
      <ol class="list-decimal list-inside space-y-4 mb-6">
        <li class="text-muted-foreground leading-relaxed">
          <strong>Empathy & research</strong> — understand users deeply: their context, problems, goals. Without this, designers risk solving the wrong problem.
        </li>
        <li class="text-muted-foreground leading-relaxed">
          <strong>Define the need & goal</strong> — craft a clear need statement: "[Persona] needs to … in order to …" This guides the team and aligns stakeholders.
        </li>
        <li class="text-muted-foreground leading-relaxed">
          <strong>Align with business strategy</strong> — map user needs to business metrics (e.g., retention, conversion, cost reduction). As one article puts it: "Business-driven UX connects business strategy with user needs."
        </li>
        <li class="text-muted-foreground leading-relaxed">
          <strong>Design & test</strong> — iterate with prototypes, test with real users, measure impact (SUS, UMUX-Lite, NPS, etc.). Without measurement, you can't prove impact.
        </li>
        <li class="text-muted-foreground leading-relaxed">
          <strong>Deliver & scale</strong> — once validated, scale the solution, embed the design practice, track KPIs over time.
        </li>
      </ol>

      <h2 class="text-2xl font-bold mb-4">Why this matters for your organisation</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        When you build experiences grounded in real user needs — rather than internal assumptions — you reduce friction, delight users, and increase loyalty. That in turn translates into business success: higher conversions, stronger brand reputation, lower support costs. According to a UX blog:
      </p>
      <blockquote class="border-l-4 border-accent pl-6 mb-6 italic text-muted-foreground">
        "A well-designed UX design ensures that users can navigate products or services effortlessly … they are more likely to return and recommend the business to others."
      </blockquote>
      <p class="text-muted-foreground leading-relaxed mb-6">
        In other words: meeting user needs and aligning to business goals = impact.
      </p>

      <h2 class="text-2xl font-bold mb-4">Final thought</h2>
      <p class="text-muted-foreground leading-relaxed mb-6">
        Design is the bridge between what users need and what businesses aspire to achieve. When we centre design around the user need, align it with business strategy, and measure what matters — we create meaningful impact. As a UX research and design team, this is your superpower: translating insight into design into business success.
      </p>
    `
  },
  {
    id: "2",
    title: "How To Measure UX and Design Impact",
    featured_image: null,
    description: "In modern product teams, UX and Design are strategic drivers of business performance. Learn how to measure design impact across user experience, product performance, and business outcomes.",
    author_name: "AccessX Team",
    published_date: "2025-01-10",
    slug: "measure-ux-design-impact",
    body: `
      <p class="text-muted-foreground leading-relaxed mb-6">
        In modern product teams, UX and Design are no longer "nice to have." They are strategic drivers of business performance. But to gain influence, design teams must show evidence — not just good intentions. Measuring UX impact turns design from opinion-based craft into a measurable business function.
      </p>

      <h2 class="text-2xl font-bold mb-4">Why measuring UX matters</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        As the Nielsen Norman Group notes:
      </p>
      <blockquote class="border-l-4 border-accent pl-6 mb-6 italic text-muted-foreground">
        "UX work must tie directly to outcomes that matter for the business — otherwise, even good UX may be undervalued."
      </blockquote>
      <p class="text-muted-foreground leading-relaxed mb-6">
        Strong UX improves efficiency, trust, retention, and revenue. But without measurement, these outcomes remain invisible. As UX Magazine highlights, design earns credibility when it can prove its value to stakeholders.
      </p>

      <h2 class="text-2xl font-bold mb-4">Three layers of UX impact</h2>
      <p class="text-muted-foreground leading-relaxed mb-6">
        High-performing teams measure UX impact across three dimensions:
      </p>

      <h3 class="text-xl font-bold mb-3">1. User Experience Metrics (Experience Level)</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        These indicators reflect how users feel and perform while interacting with your product.
      </p>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Common UX metrics from NNG, Google HEART, and industry standards include:
      </p>
      <ul class="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
        <li>Task success rate</li>
        <li>Time on task</li>
        <li>Error rate</li>
        <li>Satisfaction (SUS, UMUX-Lite, CSAT)</li>
        <li>Learnability</li>
      </ul>
      <p class="text-muted-foreground leading-relaxed mb-6">
        These metrics capture the actual experience — the core of UX research.
      </p>

      <h3 class="text-xl font-bold mb-3">2. Product Performance Metrics (Behavior Level)</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        These metrics show what users actually do.
      </p>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Inspired by the HEART framework and UX Collective insights:
      </p>
      <ul class="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
        <li>Engagement (frequency of use, active users)</li>
        <li>Adoption (first-time actions completed)</li>
        <li>Retention (how many come back)</li>
        <li>Conversion (how many complete key actions)</li>
        <li>Churn (how many stop using)</li>
      </ul>
      <p class="text-muted-foreground leading-relaxed mb-6">
        These link experience quality to product outcomes.
      </p>

      <h3 class="text-xl font-bold mb-3">3. Business Impact Metrics (Business Level)</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        This is where design proves its strategic value.
      </p>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Examples include:
      </p>
      <ul class="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
        <li>Revenue generation</li>
        <li>Cost reduction (fewer support tickets, faster processes)</li>
        <li>Operational efficiency</li>
        <li>Productivity gains</li>
        <li>Customer lifetime value (CLV)</li>
      </ul>
      <p class="text-muted-foreground leading-relaxed mb-6">
        UX Magazine and LinkedIn thought-leaders consistently emphasize this: Design becomes a business asset when tied to measurable financial outcomes.
      </p>

      <h2 class="text-2xl font-bold mb-4">How to build a UX measurement process</h2>
      <p class="text-muted-foreground leading-relaxed mb-6">
        Drawing from NN/g, Google HEART, and leading UX research practices:
      </p>

      <h3 class="text-xl font-bold mb-3">1. Define: What problem are we solving?</h3>
      <p class="text-muted-foreground leading-relaxed mb-6">
        Start by aligning on the core user problem and business goal. Without a clear problem statement, measurement fails.
      </p>

      <h3 class="text-xl font-bold mb-3">2. Select your metrics (don't over-measure)</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Choose 1–2 metrics from each layer:
      </p>
      <ul class="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
        <li>Experience → e.g., UMUX-Lite</li>
        <li>Product → e.g., conversion</li>
        <li>Business → e.g., support ticket reduction</li>
      </ul>
      <p class="text-muted-foreground leading-relaxed mb-6">
        This creates a balanced scorecard.
      </p>

      <h3 class="text-xl font-bold mb-3">3. Benchmark (the most important step)</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        NN/g stresses benchmarking as critical:
      </p>
      <blockquote class="border-l-4 border-accent pl-6 mb-6 italic text-muted-foreground">
        "If you don't capture a baseline, you cannot prove improvement."
      </blockquote>
      <p class="text-muted-foreground leading-relaxed mb-6">
        Run a quick usability test, analytics snapshot, or UX survey before the redesign.
      </p>

      <h3 class="text-xl font-bold mb-3">4. Design → Test → Iterate</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Quant + Qual.
      </p>
      <p class="text-muted-foreground leading-relaxed mb-6">
        Use usability tests, surveys, session replays, analytics, A/B tests. Design impact comes from repetition — not one-off measurement.
      </p>

      <h3 class="text-xl font-bold mb-3">5. Communicate results in business language</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Great design teams package insights as:
      </p>
      <ul class="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
        <li>"+18% conversion increase"</li>
        <li>"40% reduction in errors"</li>
        <li>"Support calls dropped by 27%"</li>
        <li>"Task time decreased from 4 minutes to 2 minutes"</li>
      </ul>
      <p class="text-muted-foreground leading-relaxed mb-6">
        This is how UX earns trust inside the organization.
      </p>

      <h2 class="text-2xl font-bold mb-4">What high-impact teams measure</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        According to LinkedIn's most shared UX leadership posts and NN/g reports, top design teams track:
      </p>
      <ul class="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
        <li>Usability health score (SUS/UMUX-Lite every 3–6 months)</li>
        <li>Customer-effort and satisfaction (CES/CSAT)</li>
        <li>Adoption and drop-off analytics</li>
        <li>Conversion rates of key flows</li>
        <li>Speed of completing key tasks</li>
        <li>Accessibility scores</li>
        <li>Research ROI (hours saved, risk reduced)</li>
      </ul>
      <p class="text-muted-foreground leading-relaxed mb-6">
        Measuring UX impact is not about drowning in numbers — it is about choosing meaningful indicators that demonstrate how design decisions improve business outcomes.
      </p>

      <h2 class="text-2xl font-bold mb-4">Final Thought</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Design impact becomes visible when we measure it.
      </p>
      <p class="text-muted-foreground leading-relaxed mb-6">
        UX teams that track experience, behavior, and business outcomes build stronger products and stronger influence. When design proves its value with data, it transforms from a support function into a strategic driver of growth.
      </p>
    `
  },
  {
    id: "3",
    title: "European Accessibility Act (EAA): Why WCAG AA Isn't Enough",
    featured_image: null,
    description: "The EAA is reshaping how digital products are designed across the EU. Discover why WCAG compliance alone doesn't meet EAA requirements.",
    author_name: "AccessX Team",
    published_date: "2025-01-05",
    slug: "eaa-beyond-wcag",
    body: `
      <p class="text-muted-foreground leading-relaxed mb-6">
        The European Accessibility Act (EAA) is reshaping how digital products and services are designed across the EU. While many teams feel "safe" once they meet WCAG 2.1 AA, the reality is different: EAA compliance goes beyond traditional WCAG checklists.
      </p>
      <p class="text-muted-foreground leading-relaxed mb-6">
        WCAG is a framework. EAA is a law. And that difference matters.
      </p>

      <h2 class="text-2xl font-bold mb-4">What the EAA actually requires</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        The EAA (effective 2025) sets accessibility obligations for:
      </p>
      <ul class="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
        <li>Banking and financial services</li>
        <li>E-commerce platforms</li>
        <li>Smartphones and computers</li>
        <li>Ticketing & transportation</li>
        <li>E-books and ATMs</li>
        <li>Customer support services</li>
        <li>And more</li>
      </ul>
      <p class="text-muted-foreground leading-relaxed mb-6">
        But unlike WCAG, the EAA covers the entire product ecosystem, not just the interface. As accessibility experts highlight: EAA requires accessible information, processes, support, hardware, documentation, contracts — everything that touches the user experience.
      </p>

      <h2 class="text-2xl font-bold mb-4">Why WCAG AA alone is not enough</h2>
      <p class="text-muted-foreground leading-relaxed mb-6">
        Even the World Wide Web Consortium (W3C), creators of WCAG, stress that WCAG is only one part of accessibility compliance. Here is why WCAG AA falls short for EAA:
      </p>

      <h3 class="text-xl font-bold mb-3">1. EAA covers the full service, not only the website</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        WCAG applies to digital content. EAA applies to the whole service journey, including:
      </p>
      <ul class="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
        <li>Customer support (voice, chat, physical branches)</li>
        <li>Product packaging and labeling</li>
        <li>Instructions and manuals</li>
        <li>Contract and onboarding flows</li>
        <li>Payment services</li>
        <li>Kiosks, ATMs, vending machines</li>
        <li>Physical hardware requirements</li>
      </ul>
      <p class="text-muted-foreground leading-relaxed mb-6">
        A WCAG-compliant website does not make the service accessible.
      </p>

      <h3 class="text-xl font-bold mb-3">2. EAA requires accessibility in the supply chain</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        The EAA includes obligations for:
      </p>
      <ul class="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
        <li>Manufacturers</li>
        <li>Distributors</li>
        <li>Service providers</li>
        <li>Retailers</li>
      </ul>
      <p class="text-muted-foreground leading-relaxed mb-6">
        This means: your partners and vendors must also be accessible. WCAG does not cover any of this.
      </p>

      <h3 class="text-xl font-bold mb-3">3. EAA mandates accessible customer support</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Under the EAA, companies must offer support channels that are accessible for people with:
      </p>
      <ul class="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
        <li>Hearing disabilities</li>
        <li>Cognitive disabilities</li>
        <li>Speech disabilities</li>
        <li>Limited mobility</li>
      </ul>
      <p class="text-muted-foreground leading-relaxed mb-6">
        WCAG says nothing about phone menus, authentication flows, chatbot accessibility, or in-branch interactions.
      </p>

      <h3 class="text-xl font-bold mb-3">4. EAA includes documentation and contracts — WCAG does not</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Teams often forget: Your terms & conditions, loan agreements, product manuals, PDFs, and marketing materials must also be accessible.
      </p>
      <p class="text-muted-foreground leading-relaxed mb-6">
        WCAG AA checks web content. EAA audits the entire documentation ecosystem.
      </p>

      <h3 class="text-xl font-bold mb-3">5. EAA expects usability, not only technical compliance</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        As the European Commission clarified, accessibility must be:
      </p>
      <ul class="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
        <li>Perceivable</li>
        <li>Understandable</li>
        <li>Operable</li>
        <li>Robust</li>
        <li><strong>AND Usable in real-life situations</strong></li>
      </ul>
      <p class="text-muted-foreground leading-relaxed mb-6">
        WCAG's success criteria are technical and often binary. EAA requires evidence that people with disabilities can actually use your service — through testing, feedback, and continuous improvement. This shifts accessibility from "checkboxes" to inclusive usability.
      </p>

      <h3 class="text-xl font-bold mb-3">6. Non-compliance has legal and financial consequences</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Unlike WCAG, which is voluntary guidance, the EAA includes:
      </p>
      <ul class="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
        <li>Enforcement</li>
        <li>Fines</li>
        <li>Inspections</li>
        <li>Corrective actions</li>
        <li>Removal of services from the market</li>
      </ul>
      <p class="text-muted-foreground leading-relaxed mb-6">
        In other words: complying with WCAG does not protect a business from EAA penalties.
      </p>

      <h3 class="text-xl font-bold mb-3">7. EAA requires ongoing improvement</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        WCAG compliance is typically done once per website version. EAA demands:
      </p>
      <ul class="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
        <li>Monitoring</li>
        <li>Maintenance</li>
        <li>Updates</li>
        <li>Continuous feedback loops</li>
        <li>Accessible reporting channels</li>
      </ul>
      <p class="text-muted-foreground leading-relaxed mb-6">
        Accessibility becomes an ongoing operational requirement, not a one-time audit.
      </p>

      <h2 class="text-2xl font-bold mb-4">How organisations should prepare</h2>
      <p class="text-muted-foreground leading-relaxed mb-6">
        To meet the EAA, companies need to think far beyond WCAG. Here's the modern approach taken by accessibility leaders:
      </p>

      <h3 class="text-xl font-bold mb-3">1. Start with WCAG AA — but don't stop there</h3>
      <p class="text-muted-foreground leading-relaxed mb-6">
        Use WCAG as your technical baseline, not your final goal.
      </p>

      <h3 class="text-xl font-bold mb-3">2. Conduct accessibility testing with real users with disabilities</h3>
      <p class="text-muted-foreground leading-relaxed mb-6">
        The EAA explicitly values real-world usability testing.
      </p>

      <h3 class="text-xl font-bold mb-3">3. Map the full end-to-end service journey</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Check where accessibility breaks in:
      </p>
      <ul class="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
        <li>Customer service</li>
        <li>Onboarding</li>
        <li>Payment</li>
        <li>Mobile apps</li>
        <li>Branch/physical touchpoints</li>
      </ul>

      <h3 class="text-xl font-bold mb-3">4. Ensure accessibility across the supply chain</h3>
      <p class="text-muted-foreground leading-relaxed mb-6">
        Update contracts, requirements, procurement policies.
      </p>

      <h3 class="text-xl font-bold mb-3">5. Train teams across the organisation</h3>
      <p class="text-muted-foreground leading-relaxed mb-6">
        Designers, developers, copywriters, customer support, marketing, legal — all must understand EAA expectations.
      </p>

      <h3 class="text-xl font-bold mb-3">6. Implement an accessibility governance model</h3>
      <p class="text-muted-foreground leading-relaxed mb-6">
        Accessibility owner, auditing schedule, remediation timeline, reporting KPIs.
      </p>

      <h2 class="text-2xl font-bold mb-4">Final Thought</h2>
      <p class="text-muted-foreground leading-relaxed mb-6">
        The European Accessibility Act raises the bar. WCAG AA is essential — but not enough.
      </p>
      <p class="text-muted-foreground leading-relaxed mb-6">
        To be compliant, organisations must shift from "website accessibility" to service accessibility. The focus must move from passing checklist audits to delivering real inclusion, where every user — regardless of disability — can complete their journey successfully.
      </p>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Accessibility isn't only a legal requirement. It's a design opportunity.
      </p>
      <p class="text-muted-foreground leading-relaxed mb-6">
        The organisations that embrace it will lead the next era of inclusive digital experiences.
      </p>
    `
  },
  {
    id: "4",
    title: "How To Measure the Impact of Features",
    featured_image: null,
    description: "High-performing product teams treat every feature as an experiment. Learn how to validate features with real data and turn releases into evidence-based decisions.",
    author_name: "AccessX Team",
    published_date: "2024-12-28",
    slug: "measure-feature-impact",
    body: `
      <p class="text-muted-foreground leading-relaxed mb-6">
        Launching a new feature is never the final step — the real work begins once it's live.
      </p>
      <p class="text-muted-foreground leading-relaxed mb-6">
        High-performing product teams treat every feature as an experiment: a hypothesis that must be validated with real data. Measuring feature impact ensures we understand whether something actually improved the user experience and delivered business value — or just added complexity.
      </p>

      <h2 class="text-2xl font-bold mb-4">Why feature impact matters</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        As UX leaders often say:
      </p>
      <blockquote class="border-l-4 border-accent pl-6 mb-6 italic text-muted-foreground">
        "If you don't measure it, you're guessing."
      </blockquote>
      <p class="text-muted-foreground leading-relaxed mb-4">
        New features introduce risk:
      </p>
      <ul class="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
        <li>They can improve the experience</li>
        <li>They can complicate the journey</li>
        <li>They can increase errors or friction</li>
        <li>They can cannibalize other flows</li>
      </ul>
      <p class="text-muted-foreground leading-relaxed mb-6">
        Measuring impact turns feature releases into evidence-based decisions — not opinions.
      </p>

      <h2 class="text-2xl font-bold mb-4">How to Create a Feature Impact Plan</h2>

      <h3 class="text-xl font-bold mb-3">1. Start with the hypothesis</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        A clear hypothesis ties the feature to measurable outcomes.
      </p>
      <p class="text-muted-foreground leading-relaxed mb-6">
        <strong>Example:</strong> "If we add 'Quick Filters', users will find relevant products 30% faster and increase conversions by 10%."
      </p>

      <h3 class="text-xl font-bold mb-3">2. Define the success metrics before building</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        This step is non-negotiable.
      </p>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Set 1–2 metrics from each category:
      </p>
      <ul class="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
        <li>Experience metric → e.g., decrease error rate</li>
        <li>Behavior metric → e.g., higher adoption</li>
        <li>Business metric → e.g., higher conversion</li>
      </ul>
      <p class="text-muted-foreground leading-relaxed mb-6">
        This creates a balanced scorecard.
      </p>

      <h3 class="text-xl font-bold mb-3">3. Benchmark the current state</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        NN/g emphasizes that:
      </p>
      <blockquote class="border-l-4 border-accent pl-6 mb-6 italic text-muted-foreground">
        "Without a baseline, you cannot prove improvement."
      </blockquote>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Do pre-launch benchmarking:
      </p>
      <ul class="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
        <li>Usability tests</li>
        <li>Analytics snapshot</li>
        <li>Time-on-task baseline</li>
        <li>User satisfaction baseline</li>
      </ul>
      <p class="text-muted-foreground leading-relaxed mb-6">
        Then compare after launch.
      </p>

      <h3 class="text-xl font-bold mb-3">4. Test with real users</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Run:
      </p>
      <ul class="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
        <li>A/B tests</li>
        <li>Usability tests</li>
        <li>First-click tests</li>
        <li>Tree testing</li>
        <li>Unmoderated tests</li>
      </ul>
      <p class="text-muted-foreground leading-relaxed mb-6">
        These reveal if the feature works as intended.
      </p>

      <h3 class="text-xl font-bold mb-3">5. Measure after launch (30/60/90 days)</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Follow a structured post-launch cycle:
      </p>
      <ul class="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
        <li><strong>Day 1–7:</strong> Bug monitoring, early adoption patterns</li>
        <li><strong>Day 30:</strong> Behavioral insights, usability issues</li>
        <li><strong>Day 60:</strong> Conversion and retention impact</li>
        <li><strong>Day 90:</strong> Business KPIs and final conclusions</li>
      </ul>
      <p class="text-muted-foreground leading-relaxed mb-6">
        This timeframe gives a full picture of impact.
      </p>

      <h3 class="text-xl font-bold mb-3">6. Report impact in business language</h3>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Strong feature impact stories include:
      </p>
      <ul class="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
        <li>"Task success increased from 62% → 91%"</li>
        <li>"Support tickets dropped by 23%"</li>
        <li>"Average loan application time decreased by 40 seconds"</li>
        <li>"Feature adoption reached 58% of all active users"</li>
      </ul>
      <p class="text-muted-foreground leading-relaxed mb-6">
        This translates design and UX work into measurable business outcomes.
      </p>

      <h2 class="text-2xl font-bold mb-4">Final Thought</h2>
      <p class="text-muted-foreground leading-relaxed mb-6">
        Every feature is a bet on improving the user experience and driving business value. Measuring impact ensures we learn from each bet — and make smarter decisions going forward.
      </p>
      <p class="text-muted-foreground leading-relaxed mb-6">
        Teams that measure feature impact build better products, reduce waste, and earn trust from stakeholders. It transforms product development from guesswork into a disciplined, evidence-based practice.
      </p>
    `
  }
];

const InsightArticle = () => {
  const { slug } = useParams();
  const [insight, setInsight] = useState<Insight | null>(null);
  const [loading, setLoading] = useState(isSupabaseConfigured);

  useEffect(() => {
    if (!supabase) {
      console.warn("Supabase is not configured. Using static data.");
      // Use static data as fallback
      const staticInsight = staticInsightsWithBody.find(i => i.slug === slug);
      setInsight(staticInsight || null);
      setLoading(false);
      return;
    }

    const fetchInsight = async () => {
      const { data, error } = await supabase
        .from("insights")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

      if (error) {
        console.error("Error fetching insight:", error);
      }

      // Use Supabase data if available, otherwise fall back to static data
      if (data) {
        setInsight(data);
      } else {
        const staticInsight = staticInsightsWithBody.find(i => i.slug === slug);
        setInsight(staticInsight || null);
      }
      setLoading(false);
    };

    fetchInsight();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-secondary rounded w-3/4"></div>
              <div className="h-4 bg-secondary rounded w-1/2"></div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!insight) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1 className="text-4xl font-black mb-4">Article not found</h1>
            <Link to="/insights">
              <Button variant="outline" className="rounded-full">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Insights
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <article className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <Link to="/insights" className="inline-flex items-center gap-2 text-accent font-semibold mb-8 hover:gap-3 transition-smooth">
            <ArrowLeft className="w-5 h-5" />
            Back to Insights
          </Link>

          {insight.featured_image && (
            <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-8">
              <img 
                src={insight.featured_image} 
                alt={insight.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-balance">
              {insight.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {insight.description}
            </p>

            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="font-semibold">{insight.author_name}</span>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(insight.published_date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </div>
          </header>

          <div 
            className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-accent prose-img:rounded-2xl"
            dangerouslySetInnerHTML={{ __html: insight.body }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default InsightArticle;