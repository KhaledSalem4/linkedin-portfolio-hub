import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured online shopping platform with payment integration, inventory management, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, team collaboration features, and analytics.",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "WebSocket"],
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&h=500&fit=crop",
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio showcase with stunning animations, smooth transitions, and responsive design.",
    tags: ["React", "Tailwind", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather data visualization with location-based forecasts and interactive maps.",
    tags: ["Vue.js", "API Integration", "Chart.js"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-16 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-1">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-3 py-1 bg-secondary/10 text-secondary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="group/btn">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button variant="outline" size="sm" className="group/btn">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
