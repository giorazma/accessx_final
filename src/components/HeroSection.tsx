import heroPattern from "@/assets/hero-pattern.png";

const HeroSection = () => {
  return (
    <section className="min-h-[50vh] flex items-center pt-20 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-5 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-balance leading-[1.05]">
              Experience-driven.{" "}
              <span className="block">Accessibility-focused.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
              Get fully dedicated, scalable accessibility and UX teams adjusted to your workstyle.
            </p>
          </div>

          {/* Right Visual */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-secondary/50 backdrop-blur-sm">
              <img
                src={heroPattern}
                alt="Abstract geometric pattern"
                className="w-full h-full object-cover transition-smooth hover:scale-105"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/4 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -z-10 bottom-1/4 left-0 w-40 h-40 sm:w-64 sm:h-64 bg-accent/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
