import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll
      const sections = navLinks.map(link => link.href.replace('#', '')).filter(Boolean);
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(`#${section}`);
          return;
        }
      }
      setActiveSection("#");
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
            : "bg-background/80 backdrop-blur-sm"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection("#")}
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              aria-label="Go to home"
            >
              <Logo size={36} />
              <span className="font-bold text-lg text-foreground hidden sm:block">
                Khaled Salem
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-4 py-2 text-sm font-medium transition-colors relative group ${
                    activeSection === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  <span 
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
                      activeSection === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`} 
                  />
                </button>
              ))}
              <div className="ml-4 pl-4 border-l border-border">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-foreground hover:text-primary transition-colors"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-background border-l border-border z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <Logo size={32} />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-foreground hover:text-primary transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <nav className="flex-1 py-6" aria-label="Mobile navigation">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => scrollToSection(link.href)}
                      className={`w-full px-6 py-4 text-left text-lg font-medium transition-colors ${
                        activeSection === link.href
                          ? "text-primary bg-primary/10 border-r-2 border-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </nav>
                
                <div className="p-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    © 2024 Khaled Salem
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
