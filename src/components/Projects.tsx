import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "EcoCollect API",
    description: "Environmental waste collection platform with gamification. Users earn points based on the 2kg rule for recycling different materials. RESTful API with full CRUD operations.",
    tags: ["ASP.NET Core", "SQL Server", "REST API", "Entity Framework"],
    type: "Backend Development",
    repoUrl: "https://github.com/KhaledSalem4",
    demoUrl: null,
  },
  {
    title: "BrightMind - E-Learning Platform",
    description: "Responsive web-based learning platform for interactive educational content. Built all UI components from scratch without frameworks.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    type: "Frontend Development",
    repoUrl: "https://github.com/KhaledSalem4",
    demoUrl: null,
  },
  {
    title: "Online Library System",
    description: "Full-featured library management system with RESTful APIs. Secure authentication, role-based access control, and efficient MongoDB operations.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT Auth"],
    type: "Backend Development",
    repoUrl: "https://github.com/KhaledSalem4",
    demoUrl: null,
  },
  {
    title: "Enterprise .NET Applications",
    description: "Enterprise-level web applications built during ITI intensive training. Following Agile methodology and best practices in software architecture.",
    tags: ["ASP.NET Core", "Angular", "Entity Framework", "SQL Server"],
    type: "Full Stack Development",
    repoUrl: "https://github.com/KhaledSalem4",
    demoUrl: null,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in full-stack development
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 h-full flex flex-col bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {project.type}
                    </span>
                    <div className="flex gap-2">
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`View ${project.title} repository`}
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`View ${project.title} demo`}
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2.5 py-1 bg-muted text-muted-foreground rounded font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-fit border-primary/30 text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Repo
                    </a>
                  </Button>
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
