import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import brightmindImage from "@/assets/brightmind-project.jpg";
import libraryImage from "@/assets/library-project.jpg";
import dotnetImage from "@/assets/dotnet-project.jpg";
import competitiveImage from "@/assets/competitive-programming.jpg";

const projects = [
  {
    title: "BrightMind - E-Learning Platform",
    description: "Responsive web-based learning platform for interactive educational content. Built all UI components from scratch using pure HTML, CSS, and JavaScript, showcasing strong frontend fundamentals without relying on frameworks.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
    image: brightmindImage,
    type: "Frontend Development",
  },
  {
    title: "Online Library System",
    description: "Full-featured library management system with RESTful APIs for managing books, users, and borrowing operations. Implemented secure authentication, role-based access control, and efficient data operations with MongoDB.",
    tags: ["Node.js", "Express.js", "MongoDB", "REST API", "JWT Auth"],
    image: libraryImage,
    type: "Backend Development",
  },
  {
    title: "ASP.NET Core Applications",
    description: "Enterprise-level web applications built during ITI intensive training. Developed using ASP.NET Core MVC, Entity Framework, and Angular, following Agile methodology and best practices in software architecture.",
    tags: ["ASP.NET Core", "C#", "Entity Framework", "Angular", "SQL Server"],
    image: dotnetImage,
    type: "Full Stack Development",
  },
  {
    title: "Competitive Programming",
    description: "Achieved Honorable Mention in ICPC ECPC Qualifications. Solved 200+ algorithmic problems on Codeforces and LeetCode using C++, demonstrating strong problem-solving skills and algorithmic thinking.",
    tags: ["C++", "Algorithms", "Data Structures", "Problem Solving"],
    image: competitiveImage,
    type: "Competitive Programming",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-10 sm:mb-12 md:mb-16 text-center">
            Featured Projects
          </h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-3 sm:p-4">
                      <span className="text-white text-xs sm:text-sm font-medium">{project.type}</span>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-2 sm:mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 flex-1">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-3 py-1 bg-secondary/10 text-secondary rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="group/btn"
                        asChild
                      >
                        <a href="https://github.com/KhaledSalem4" target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </a>
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
