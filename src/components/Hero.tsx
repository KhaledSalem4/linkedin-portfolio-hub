import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/khaled-profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-secondary/20 px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(195,228,237,0.1),transparent_50%)]" />
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8, type: "spring" }}
            className="flex justify-center mb-6 sm:mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-full blur-2xl opacity-60 animate-pulse" />
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary-foreground/20 shadow-glow-lg">
                <img 
                  src={profileImage} 
                  alt="Khaled Ahmed Salem" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-12 h-12 sm:w-16 sm:h-16 bg-accent rounded-full border-4 border-background flex items-center justify-center shadow-glow">
                <span className="text-xl sm:text-2xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-3 sm:space-y-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-primary-foreground tracking-tight leading-tight">
              Khaled Ahmed Salem
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 font-light">
              Full Stack .NET Developer
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed px-4"
          >
            Specialized in building robust web applications using C#, ASP.NET Core, and Angular.
            Passionate about modern web technologies, clean architecture, and delivering high-quality solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto group hover:shadow-lg transition-all duration-300 text-base sm:text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
              <Mail className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex gap-3 w-full sm:w-auto justify-center">
              <Button
                size="icon"
                variant="outline"
                className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 text-primary-foreground h-12 w-12 sm:h-11 sm:w-11"
                asChild
              >
                <a href="https://github.com/KhaledSalem4" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 text-primary-foreground h-12 w-12 sm:h-11 sm:w-11"
                asChild
              >
                <a href="https://linkedin.com/in/khaled-salem-121a94260" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="pt-8 sm:pt-12"
          >
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors touch-manipulation"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="h-6 w-6 sm:h-7 sm:w-7 animate-bounce" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
