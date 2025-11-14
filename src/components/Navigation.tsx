import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl sm:text-2xl font-black">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground text-xs sm:text-sm font-bold">aX</span>
            </div>
            <span>accessX</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link 
              to="/works" 
              className={`font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-accent after:transition-transform ${
                isActive("/works") 
                  ? "text-accent after:scale-x-100" 
                  : "text-foreground hover:text-accent after:scale-x-0 hover:after:scale-x-100"
              } transition-smooth`}
            >
              Works
            </Link>
            
            <Link 
              to="/services" 
              className={`font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-accent after:transition-transform ${
                isActive("/services") 
                  ? "text-accent after:scale-x-100" 
                  : "text-foreground hover:text-accent after:scale-x-0 hover:after:scale-x-100"
              } transition-smooth`}
            >
              Services
            </Link>

            <Link 
              to="/about" 
              className={`font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-accent after:transition-transform ${
                isActive("/about") 
                  ? "text-accent after:scale-x-100" 
                  : "text-foreground hover:text-accent after:scale-x-0 hover:after:scale-x-100"
              } transition-smooth`}
            >
              About
            </Link>

            <Link 
              to="/insights" 
              className={`font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-accent after:transition-transform ${
                isActive("/insights") 
                  ? "text-accent after:scale-x-100" 
                  : "text-foreground hover:text-accent after:scale-x-0 hover:after:scale-x-100"
              } transition-smooth`}
            >
              Insights
            </Link>

            <Link to="/contact">
              <Button className={`rounded-full px-6 font-semibold ${isActive("/contact") ? "ring-2 ring-accent" : ""}`}>
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                to="/works"
                className={`font-medium py-2 transition-smooth ${
                  isActive("/works") ? "text-accent font-bold" : "text-foreground hover:text-accent"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Works
              </Link>
              <Link
                to="/services"
                className={`font-medium py-2 transition-smooth ${
                  isActive("/services") ? "text-accent font-bold" : "text-foreground hover:text-accent"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about"
                className={`font-medium py-2 transition-smooth ${
                  isActive("/about") ? "text-accent font-bold" : "text-foreground hover:text-accent"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/insights"
                className={`font-medium py-2 transition-smooth ${
                  isActive("/insights") ? "text-accent font-bold" : "text-foreground hover:text-accent"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Insights
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className={`rounded-full px-6 font-semibold w-full mt-2 ${isActive("/contact") ? "ring-2 ring-accent" : ""}`}>
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
