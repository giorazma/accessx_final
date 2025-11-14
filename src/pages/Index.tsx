import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import CalendlyModal from "@/components/CalendlyModal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        
        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-12 bg-secondary/30">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-balance">
              Ready to make your product accessible?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's discuss how we can help you create better experiences for all users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="rounded-full px-8 py-6 text-lg font-semibold"
                onClick={() => setIsCalendlyOpen(true)}
              >
                Book a Call
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg font-semibold">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <ServicesSection />

        {/* Bottom CTA Section */}
        <section className="py-16 px-6 lg:px-12 bg-accent/5">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Let's Start the Conversation
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Schedule a call to discuss how we can improve your product's accessibility and user experience.
            </p>
            <Button 
              size="lg" 
              className="rounded-full px-8 py-6 text-lg font-semibold"
              onClick={() => setIsCalendlyOpen(true)}
            >
              Book a Call
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </div>
  );
};

export default Index;
