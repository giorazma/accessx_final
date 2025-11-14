import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CalendlyModal from "@/components/CalendlyModal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { staticWorks } from "@/data/staticWorks";

const Works = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const works = staticWorks;
  const loading = false;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        {/* Header */}
        <section className="px-6 lg:px-12 mb-20">
          <div className="container mx-auto">
            <div className="max-w-4xl animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-balance">
                Our work speaks for itself.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                We've partnered with industry leaders to create digital experiences that are both beautiful and accessible to everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-6 lg:px-12">
          <div className="container mx-auto">
            {loading ? (
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-[4/3] rounded-2xl bg-secondary mb-6"></div>
                    <div className="h-6 bg-secondary rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-secondary rounded w-full"></div>
                  </div>
                ))}
              </div>
            ) : works.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground">No case studies available yet. Check back soon!</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {works.map((work, index) => (
                  <Link
                    key={work.id}
                    to={`/works/${work.slug}`}
                    className="group cursor-pointer animate-fade-in block"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <article>
                      {/* Image */}
                      {work.thumbnail_image ? (
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 transition-smooth group-hover:scale-[1.02] group-hover:shadow-2xl">
                          <img 
                            src={work.thumbnail_image} 
                            alt={work.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 mb-6 flex items-center justify-center transition-smooth group-hover:scale-[1.02] group-hover:shadow-2xl">
                          <span className="text-6xl font-black text-accent/30">
                            {work.title.substring(0, 2)}
                          </span>
                        </div>
                      )}

                      {/* Content */}
                      <div className="space-y-4">
                        <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-sm font-medium text-accent">
                          {work.category}
                        </div>

                        <h2 className="text-3xl font-bold group-hover:text-accent transition-smooth">
                          {work.title}
                        </h2>

                        <p className="text-muted-foreground leading-relaxed">
                          {work.description}
                        </p>

                        {work.tags && work.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {work.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-secondary rounded-full text-sm font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center gap-2 text-accent font-semibold pt-2 group-hover:gap-4 transition-smooth">
                          View case study <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 lg:px-12 mt-32">
          <div className="container mx-auto">
            <div className="bg-accent/10 rounded-3xl p-12 lg:p-20 text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Ready to start your project?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's create something amazing together that's accessible to everyone.
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

export default Works;
