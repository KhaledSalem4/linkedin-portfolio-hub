import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href: "https://linkedin.com/in/yourprofile",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@yourusername",
    href: "https://twitter.com/yourusername",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-br from-primary via-primary/95 to-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(195,228,237,0.1),transparent_50%)]" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-8">
            Let's Connect
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {contactLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Button
                  variant="outline"
                  className="w-full h-auto p-6 bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 text-primary-foreground hover:text-primary-foreground group"
                  asChild
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start space-y-2"
                  >
                    <link.icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <div className="text-sm text-primary-foreground/60">{link.label}</div>
                      <div className="font-medium">{link.value}</div>
                    </div>
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 text-primary-foreground/60 text-sm"
          >
            <p>© 2024 Your Name. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
