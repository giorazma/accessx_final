export interface InsightDetail {
  id: string;
  title: string;
  featured_image: string | null;
  description: string;
  body: string;
  author_name: string;
  published_date: string;
  slug: string;
}

export type InsightSummary = Omit<InsightDetail, "body">;

const insightDetailsList: InsightDetail[] = [
  {
    id: "1",
    title: "The Power of Inclusive Design Thinking",
    featured_image: null,
    description:
      "Discover how inclusive design principles can transform your product strategy and create experiences that work for everyone, not just the average user.",
    body: `
      <p>
        Inclusive design thinking recognizes that every interaction is shaped by a person's abilities, environment, and tools.
        Instead of designing for a single idealized user, teams anticipate a range of contexts and create solutions that flex to support them.
      </p>
      <p>
        At accessX we coach product teams to build personas rooted in permanent, situational, and temporary disabilities.
        When designers solve for a commuter holding a phone with one hand, they also help a new parent carrying a child or a power user recovering from an injury.
      </p>
      <p>
        Inclusive practices lead to resilient products, reduce costly rework, and signal that your organization values every customer.
      </p>
    `,
    author_name: "Sarah Chen",
    published_date: "2025-01-15",
    slug: "inclusive-design-thinking",
  },
  {
    id: "2",
    title: "WCAG 2.2: What's New and Why It Matters",
    featured_image: null,
    description:
      "A comprehensive guide to the latest Web Content Accessibility Guidelines updates and how they impact your digital products in 2025.",
    body: `
      <p>
        WCAG 2.2 introduces success criteria that respond to real-world feedback from users navigating modern interfaces.
        From more forgiving target sizes to updated focus appearance guidance, the new recommendations encourage accessible interactions across desktop and touch devices.
      </p>
      <p>
        Teams should pay close attention to Success Criterion 2.4.11 (Focus Appearance) and 2.5.7 (Dragging Movements), which make it easier for keyboard and pointer users to operate complex controls.
      </p>
      <p>
        Our audit checklist now includes these updates so your team can prepare for upcoming procurement and compliance requirements.
      </p>
    `,
    author_name: "AccessX Team",
    published_date: "2025-01-10",
    slug: "wcag-2-2-updates",
  },
  {
    id: "3",
    title: "Color Contrast: Beyond the Basics",
    featured_image: null,
    description:
      "Learn advanced techniques for ensuring your color palette works for users with various types of color vision deficiencies.",
    body: `
      <p>
        Passing automated contrast checks is only the starting point for accessible color systems.
        Designers should test color combinations in context, validate states like hover and error, and ensure information isn't encoded by color alone.
      </p>
      <p>
        We recommend pairing palette exploration with quick usability sessions that include people with low vision and color blindness.
        The feedback informs token naming, semantic usage, and fallback patterns for high contrast modes.
      </p>
      <p>
        Thoughtful color decisions create calmer, clearer experiences for everyone — not just users with diagnosed vision differences.
      </p>
    `,
    author_name: "Maria Rodriguez",
    published_date: "2025-01-05",
    slug: "color-contrast-advanced",
  },
  {
    id: "4",
    title: "Screen Reader Testing for Designers",
    featured_image: null,
    description:
      "A practical guide for designers to understand and test their work with screen readers, ensuring truly accessible experiences.",
    body: `
      <p>
        Designers don't need to be screen reader experts to deliver inclusive work — but they should understand how their choices translate to assistive technology.
        Quick spot checks with VoiceOver, NVDA, or JAWS reveal where headings, landmarks, and interactive elements need refinement.
      </p>
      <p>
        We encourage teams to build simple scripts that mirror core user journeys and run them during design reviews.
        Seeing how a page sounds often unlocks empathy and prompts clearer content decisions.
      </p>
      <p>
        Consistent testing habits empower designers to collaborate more effectively with QA and to advocate for accessible implementation details.
      </p>
    `,
    author_name: "James Wilson",
    published_date: "2024-12-28",
    slug: "screen-reader-testing",
  },
];

export const staticInsightDetails: Record<string, InsightDetail> = Object.fromEntries(
  insightDetailsList.map((insight) => [insight.slug, insight])
);

export const staticInsights: InsightSummary[] = insightDetailsList.map(({ body, ...summary }) => summary);
