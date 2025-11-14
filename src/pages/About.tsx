import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CalendlyModal from "@/components/CalendlyModal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Target, Zap, Award } from "lucide-react";

const About = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const values = [
    {
      icon: Heart,
      title: "Empathy First",
      description: "We design with compassion, understanding that every user has unique needs and challenges.",
    },
    {
      icon: Target,
      title: "Impact Driven",
      description: "Our work is measured by the real-world impact it creates for users and businesses alike.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay ahead of trends, constantly exploring new ways to solve old problems.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Quality is non-negotiable. We deliver work that exceeds expectations every time.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        {/* Header */}
        <section className="px-6 lg:px-12 mb-32">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-balance">
                  Designing for everyone.
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  We're a team of passionate designers, researchers, and accessibility experts committed to creating digital experiences that work for all users.
                </p>
              </div>

              <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <div className="text-8xl font-black text-accent/30">aX</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="px-6 lg:px-12 mb-32 bg-secondary/30 py-20">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { number: "150+", label: "Projects Delivered" },
                { number: "50+", label: "Happy Clients" },
                { number: "8", label: "Years Experience" },
                { number: "100%", label: "WCAG Compliance" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl md:text-6xl font-black text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-6 lg:px-12 mb-32">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="text-center p-8 rounded-2xl border border-border bg-card hover:bg-secondary/50 transition-smooth animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
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
                Let's work together
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to start your next project? Let's create something amazing together.
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

export default About;
