import { Github, Linkedin, Mail } from "lucide-react";
import Logo from "./Logo";

const quickLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/KhaledSalem4", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/khaled-salem-121a94260", label: "LinkedIn" },
  { icon: Mail, href: "mailto:khaledas418@gmail.com", label: "Email" },
];

const Footer = () => {
  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="sm:col-span-2 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Logo size={32} />
                <span className="font-bold text-lg text-foreground">Khaled Salem</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                Full Stack .NET Developer passionate about building robust web applications 
                with clean architecture and modern technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
              <nav aria-label="Footer navigation">
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-bold text-foreground mb-4">Connect</h4>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="p-2 bg-muted hover:bg-primary/10 rounded-lg text-muted-foreground hover:text-primary transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Khaled Ahmed Salem. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
