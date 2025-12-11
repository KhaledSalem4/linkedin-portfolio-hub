import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import profileImage from "@/assets/khaled-profile.jpg";

// Tech icons as simple components
const techIcons = [
  { name: "Angular", color: "#DD0031" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "C#", color: "#512BD4" },
  { name: "ASP.NET", color: "#512BD4" },
  { name: "SQL", color: "#CC2927" },
  { name: "GitHub", color: "#181717" },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-20">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Available for opportunities
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
            >
              Hi, I'm{" "}
              <span className="text-primary">Khaled</span>
              <br />
              <span className="text-muted-foreground">Full Stack Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Specialized in building robust web applications using{" "}
              <span className="text-foreground font-medium">C#</span>,{" "}
              <span className="text-foreground font-medium">ASP.NET Core</span>, and{" "}
              <span className="text-foreground font-medium">Angular</span>. 
              Passionate about clean architecture and delivering high-quality solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-medium group"
                asChild
              >
                <a href="/Khaled_Salem_CV.pdf" download="Khaled_Salem_CV.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/KhaledSalem4"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/khaled-salem-121a94260"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Photo and tech icons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            {/* Photo container with 3D effect */}
            <div className="relative mx-auto w-fit" style={{ perspective: "1000px" }}>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-3xl scale-110" />
              
              {/* 3D Photo frame */}
              <motion.div
                className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl"
                initial={{ rotateY: 0, rotateX: 0 }}
                whileHover={{ 
                  rotateY: 10, 
                  rotateX: -5,
                  scale: 1.05,
                  z: 50
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{ 
                  transformStyle: "preserve-3d",
                  boxShadow: "0 25px 50px -12px rgba(139, 0, 0, 0.4), 0 0 40px rgba(139, 0, 0, 0.2)"
                }}
              >
                <img
                  src={profileImage}
                  alt="Khaled Ahmed Salem - Full Stack Developer"
                  className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover"
                  loading="eager"
                  style={{ transform: "translateZ(20px)" }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              
              {/* Floating decorative elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl"
                animate={{ y: [0, -8, 0], rotateZ: [0, 2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-primary/20 rounded-2xl"
                animate={{ y: [0, 8, 0], rotateZ: [0, -2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Tech icons grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              {techIcons.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="px-3 py-2 bg-muted rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors cursor-default"
                  title={tech.name}
                >
                  {tech.name}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
