import { Search, Accessibility, FileText, Map, FolderTree, BarChart3 } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "UX Research & Usability Testing",
      description: "Discover how users interact with your product through moderated sessions, remote testing, and user interviews.",
    },
    {
      icon: Accessibility,
      title: "Accessibility Audits & WCAG Compliance",
      description: "Ensure your digital products are inclusive and compliant with WCAG standards.",
    },
    {
      icon: FileText,
      title: "Concept & Prototype Testing",
      description: "Validate ideas early and often. Test concepts, wireframes, and prototypes with real users.",
    },
    {
      icon: Map,
      title: "UX Strategy & User Journey Analysis",
      description: "Map the complete user experience from awareness to advocacy. Identify friction points and optimize touchpoints.",
    },
    {
      icon: FolderTree,
      title: "Card Sorting & Tree Testing",
      description: "Optimize information architecture and navigation structures. Help users find what they need quickly.",
    },
    {
      icon: BarChart3,
      title: "A/B Testing & Funnel Analysis",
      description: "Make data-driven decisions with quantitative research. Identify conversion blockers and optimize user flows.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 sm:mb-20 space-y-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
            What we do
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive services to transform your digital products
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 sm:p-8 rounded-2xl border border-border bg-card hover:bg-secondary/50 transition-smooth hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 sm:mb-6 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
