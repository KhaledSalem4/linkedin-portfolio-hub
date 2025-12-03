import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: ".NET Full Stack Developer",
    company: "Information Technology Institute (ITI)",
    location: "Port Said Branch",
    period: "July 2025 - Nov 2025",
    points: [
      "Completed intensive training program focused on full-stack .NET development",
      "Developed and deployed web applications using ASP.NET Core and Angular",
      "Collaborated in Agile teams with daily standups and sprint planning",
      "Built RESTful APIs with Entity Framework and SQL Server",
    ],
    tech: ["ASP.NET Core", "Angular", "SQL Server", "Entity Framework"],
  },
  {
    title: "Frontend Developer",
    company: "BrightMind E-Learning Platform",
    location: "Freelance Project",
    period: "2024",
    points: [
      "Designed and developed responsive web-based learning platform",
      "Built all UI components from scratch using vanilla HTML, CSS, JavaScript",
      "Implemented interactive educational content features",
      "Achieved 100% mobile responsiveness across all devices",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "UI/UX"],
  },
  {
    title: "Backend Developer",
    company: "Suez Canal University",
    location: "Graduation Project",
    period: "May 2024",
    points: [
      "Developed RESTful APIs for library management system",
      "Implemented secure JWT authentication and role-based access",
      "Integrated MongoDB for efficient data storage and retrieval",
      "Deployed on cloud infrastructure with CI/CD pipeline",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
  },
  {
    title: "Java & OOP Training",
    company: "Information Technology Institute (ITI)",
    location: "Ismailia, Egypt",
    period: "Summer 2022",
    points: [
      "Completed intensive Java programming fundamentals course",
      "Mastered Object-Oriented Programming principles and patterns",
      "Built console and GUI applications with multithreading",
    ],
    tech: ["Java", "OOP", "Multithreading"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-32 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional journey and training highlights
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                  index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%] md:text-left"
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute top-0 w-4 h-4 bg-primary rounded-full border-4 border-background left-0 md:left-1/2 md:-translate-x-1/2`} />
                
                {/* Content */}
                <div className={`${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <span className="inline-block text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full mb-3">
                    {exp.period}
                  </span>
                  
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  
                  <p className="text-primary font-medium mb-1">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>
                  
                  <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-sm text-muted-foreground leading-relaxed">
                        • {point}
                      </li>
                    ))}
                  </ul>
                  
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
