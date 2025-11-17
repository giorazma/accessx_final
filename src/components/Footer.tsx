import { Link, useLocation } from "react-router-dom";
import { Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isWorks = location.pathname === "/works" || location.pathname.startsWith("/works/");
  const isInsights = location.pathname === "/insights" || location.pathname.startsWith("/insights/");
  const isAbout = location.pathname === "/about";
  const isContact = location.pathname === "/contact";

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-primary font-white text-lg">aX</span>
              </div>
              <span className="text-2xl font-black">accessX</span>
            </div>
            <p className="text-muted-foreground">
              Transform your digital products with research-driven insights
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Dynamic Section - Changes based on current page */}
          <div>
            {isHome && (
              <>
                <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="/works" className="text-muted-foreground hover:text-foreground transition-smooth">
                      Our Work
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-muted-foreground hover:text-foreground transition-smooth">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-smooth">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </>
            )}
            {isWorks && (
              <>
                <h4 className="font-bold mb-4 text-lg">Explore</h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="/services" className="text-muted-foreground hover:text-foreground transition-smooth">
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/insights" className="text-muted-foreground hover:text-foreground transition-smooth">
                      Latest Insights
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-smooth">
                      Start a Project
                    </Link>
                  </li>
                </ul>
              </>
            )}
            {isInsights && (
              <>
                <h4 className="font-bold mb-4 text-lg">Resources</h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="/works" className="text-muted-foreground hover:text-foreground transition-smooth">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-muted-foreground hover:text-foreground transition-smooth">
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-muted-foreground hover:text-foreground transition-smooth">
                      About Us
                    </Link>
                  </li>
                </ul>
              </>
            )}
            {(isAbout || isContact) && (
              <>
                <h4 className="font-bold mb-4 text-lg">Services</h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="/services" className="text-muted-foreground hover:text-foreground transition-smooth">
                      UX Research
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-muted-foreground hover:text-foreground transition-smooth">
                      UI Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-muted-foreground hover:text-foreground transition-smooth">
                      Accessibility
                    </Link>
                  </li>
                </ul>
              </>
            )}
            {!isHome && !isWorks && !isInsights && !isAbout && !isContact && (
              <>
                <h4 className="font-bold mb-4 text-lg">Services</h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="/services" className="text-muted-foreground hover:text-foreground transition-smooth">
                      UX Research
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-muted-foreground hover:text-foreground transition-smooth">
                      UI Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-muted-foreground hover:text-foreground transition-smooth">
                      Accessibility
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@accessx.eu" className="text-muted-foreground hover:text-foreground transition-smooth">
                  hello@accessx.eu
                </a>
              </li>
              <li className="flex gap-4 pt-2">
                <a href="#" className="text-muted-foreground hover:text-accent transition-smooth">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-smooth">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-smooth">
                  <Github className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} accessX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
