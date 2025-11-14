import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CalendlyModal from "@/components/CalendlyModal";
import { Search, Accessibility, FileText, Map, FolderTree, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const services = [
    {
      icon: Search,
      title: "UX Research & Usability Testing",
      description: "Discover how users interact with your product through moderated sessions, remote testing, and user interviews. Identify pain points and opportunities before they impact your bottom line.",
      features: [
        "User interviews & surveys",
        "Moderated usability testing",
        "Remote testing sessions",
        "Persona development",
        "Journey mapping",
        "Competitive analysis",
      ],
    },
    {
      icon: Accessibility,
      title: "Accessibility Audits & WCAG Compliance",
      description: "Ensure your digital products are inclusive and compliant with WCAG standards. Reach a wider audience while reducing legal risks and demonstrating social responsibility.",
      features: [
        "WCAG 2.1 compliance audit",
        "Screen reader testing",
        "Keyboard navigation testing",
        "Color contrast analysis",
        "Documentation & training",
        "Remediation support",
      ],
    },
    {
      icon: FileText,
      title: "Concept & Prototype Testing",
      description: "Validate ideas early and often. Test concepts, wireframes, and prototypes with real users to refine your vision before investing in full development.",
      features: [
        "Concept validation",
        "Wireframe testing",
        "Prototype evaluation",
        "First-click testing",
        "Design iteration support",
        "Stakeholder presentations",
      ],
    },
    {
      icon: Map,
      title: "UX Strategy & User Journey Analysis",
      description: "Map the complete user experience from awareness to advocacy. Identify friction points and optimize touchpoints to create seamless, delightful journeys.",
      features: [
        "User journey mapping",
        "Touchpoint analysis",
        "Experience audits",
        "Service blueprinting",
        "Opportunity identification",
        "Strategic recommendations",
      ],
    },
    {
      icon: FolderTree,
      title: "Card Sorting & Tree Testing",
      description: "Optimize information architecture and navigation structures. Help users find what they need quickly with research-backed site structures.",
      features: [
        "Open & closed card sorting",
        "Tree testing sessions",
        "Navigation analysis",
        "IA recommendations",
        "Taxonomy development",
        "Findability optimization",
      ],
    },
    {
      icon: BarChart3,
      title: "A/B Testing & Funnel Analysis",
      description: "Make data-driven decisions with quantitative research. Identify conversion blockers and optimize user flows to maximize business outcomes.",
      features: [
        "A/B test design",
        "Conversion funnel analysis",
        "Heatmap studies",
        "Analytics interpretation",
        "Hypothesis development",
        "Implementation support",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        {/* Header */}
        <section className="px-6 lg:px-12 mb-20">
          <div className="container mx-auto">
            <div className="max-w-4xl animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-balance">
                Services designed for impact.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Comprehensive UX and accessibility services to transform your digital products and make them work for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-6 lg:px-12 mb-32">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="p-8 rounded-2xl border border-border bg-card hover:bg-secondary/50 transition-smooth animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-6 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>

                  <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="px-6 lg:px-12 mb-32 bg-secondary/30 py-20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4">Our Process</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A proven methodology that delivers results
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discover", desc: "Understand goals, users, and challenges" },
                { step: "02", title: "Define", desc: "Strategic planning and problem framing" },
                { step: "03", title: "Design", desc: "Create and iterate on solutions" },
                { step: "04", title: "Deliver", desc: "Launch, measure, and optimize" },
              ].map((phase, index) => (
                <div
                  key={phase.step}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="text-6xl font-black text-accent/20 mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 lg:px-12">
          <div className="container mx-auto">
            <div className="bg-accent/10 rounded-3xl p-12 lg:p-20 text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Let's discuss your project
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Schedule a consultation to explore how we can help achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="rounded-full px-8 py-4 text-lg font-semibold"
                  onClick={() => setIsCalendlyOpen(true)}
                >
                  Book a Call
                </Button>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="rounded-full px-8 py-4 text-lg font-semibold">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </div>
  );
};

export default Services;
