export interface WorkDetail {
  id: string;
  title: string;
  thumbnail_image: string | null;
  category: string;
  description: string;
  case_study_body: string;
  external_link: string | null;
  tags: string[] | null;
  slug: string;
}

export type WorkSummary = Omit<WorkDetail, "case_study_body" | "external_link">;

const workDetailsList: WorkDetail[] = [
  {
    id: "1",
    title: "E-Commerce Platform Accessibility Overhaul",
    thumbnail_image: null,
    category: "Accessibility Audit",
    description:
      "Transformed a leading e-commerce platform to meet WCAG 2.2 AA standards, resulting in 40% increase in conversions from users with disabilities.",
    case_study_body: `
      <p>
        A national retailer asked accessX to conduct a comprehensive accessibility audit of their flagship e-commerce experience.
        Keyboard traps, missing form labels, and inconsistent heading structures created constant friction for shoppers relying on assistive technology.
      </p>
      <p>
        Our team partnered with product, engineering, and QA to build an accessibility roadmap that prioritized checkout, account, and search flows.
        We paired manual testing with automated coverage, then introduced component-level guidance so fixes became reusable building blocks.
      </p>
      <p>
        Within eight weeks the organization achieved WCAG 2.2 AA compliance across core funnels and saw a 40% lift in completed checkouts from customers using screen readers or alternative input devices.
      </p>
    `,
    external_link: null,
    tags: ["WCAG 2.2", "E-Commerce", "Screen Readers"],
    slug: "ecommerce-accessibility",
  },
  {
    id: "2",
    title: "Healthcare App UX Research",
    thumbnail_image: null,
    category: "UX Research",
    description:
      "Conducted comprehensive user research with elderly patients to redesign a telehealth platform for improved usability and accessibility.",
    case_study_body: `
      <p>
        accessX led a mixed-methods research program for a telehealth provider whose appointments skewed older than the industry average.
        Participants reported difficulty navigating appointment reminders and struggled to understand post-visit summaries.
      </p>
      <p>
        We organized moderated sessions with caregivers, low-vision participants, and patients with limited technical experience.
        The insights surfaced friction in language, contrast, and task sequencing that wasn't captured by analytics data alone.
      </p>
      <p>
        The redesigned experience now includes adaptive text sizing, simplified onboarding, and clear status messaging.
        As a result the organization reported a 25% reduction in missed appointments and a measurable increase in patient satisfaction scores.
      </p>
    `,
    external_link: null,
    tags: ["Healthcare", "User Research", "Inclusive Design"],
    slug: "healthcare-ux-research",
  },
  {
    id: "3",
    title: "Banking App Inclusive Redesign",
    thumbnail_image: null,
    category: "UI/UX Design",
    description:
      "Reimagined a mobile banking experience to serve users with cognitive disabilities, low vision, and motor impairments.",
    case_study_body: `
      <p>
        A regional bank partnered with accessX to overhaul its mobile app after customers reported difficulty paying bills on touch devices.
        Critical controls were hidden behind gestures and language around transfers lacked clarity for customers with cognitive disabilities.
      </p>
      <p>
        We ran co-design workshops with customers using switch controls and screen magnifiers and translated those learnings into a refreshed design system.
        High-contrast color tokens, simplified navigation, and robust focus states were rolled out across the experience.
      </p>
      <p>
        Post-launch analytics showed a 30% increase in successful bill payments from customers using assistive technology and a 15-point gain in the bank's app store accessibility rating.
      </p>
    `,
    external_link: "https://example.com/case-study/banking-inclusive-design",
    tags: ["Finance", "Mobile Design", "Cognitive Accessibility"],
    slug: "banking-inclusive-design",
  },
  {
    id: "4",
    title: "Educational Platform Audit & Training",
    thumbnail_image: null,
    category: "Design Audit",
    description:
      "Performed detailed accessibility audit and provided team training for a major online learning platform reaching millions of students.",
    case_study_body: `
      <p>
        When an edtech company expanded into public school districts they needed proof that their experience supported students using a range of assistive technologies.
        accessX conducted an in-depth audit and delivered hands-on training for the product teams responsible for rapid release cycles.
      </p>
      <p>
        Beyond identifying issues, we embedded accessibility champions within each squad and created lightweight scorecards so teams could track progress sprint-to-sprint.
      </p>
      <p>
        The program resulted in a dramatic reduction in accessibility-related support tickets and helped the company earn preferred vendor status with three state education departments.
      </p>
    `,
    external_link: null,
    tags: ["Education", "Audit", "Team Training"],
    slug: "education-platform-audit",
  },
];

export const staticWorkDetails: Record<string, WorkDetail> = Object.fromEntries(
  workDetailsList.map((work) => [work.slug, work])
);

export const staticWorks: WorkSummary[] = workDetailsList.map(({
  case_study_body,
  external_link,
  ...summary
}) => summary);
