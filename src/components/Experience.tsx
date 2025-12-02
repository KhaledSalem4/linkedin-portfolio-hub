import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: ".NET Full Stack Developer - Intensive Training",
    company: "Information Technology Institute (ITI)",
    location: "Port Said Branch",
    period: "July 2025 - Nov 2025",
    description: "Completed intensive training program focused on full-stack .NET development. Developed and deployed web applications using ASP.NET Core and Angular frameworks. Collaborated within a team environment following Agile methodology. Gained hands-on experience in SQL Server, Entity Framework, and RESTful API development.",
  },
  {
    title: "Frontend Developer",
    company: "BrightMind - E-Learning Platform",
    location: "External Freelance / ITI",
    period: "July 2025 - Nov 2025",
    description: "Designed and developed a responsive web-based learning platform for interactive educational content. Built all UI components from scratch using pure HTML, CSS, and JavaScript without frameworks, demonstrating strong fundamentals in frontend development.",
  },
  {
    title: "Backend Developer - Graduation Project",
    company: "Suez Canal University",
    location: "Online Library System",
    period: "May 2024",
    description: "Developed and maintained RESTful APIs for managing books, users, and borrowing operations using Node.js and Express. Implemented secure user authentication and role-based access control. Integrated MongoDB for efficient data storage and retrieval.",
  },
  {
    title: "Java & OOP Training",
    company: "Information Technology Institute (ITI)",
    location: "Ismailia, Egypt",
    period: "Summer 2022",
    description: "Completed summer training program focused on Java programming, Object-Oriented Programming (OOP) principles, and multithreading concepts. Built solid foundation in core programming concepts and best practices.",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-10 sm:mb-12 md:mb-16 text-center">
            Experience & Training
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-secondary">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-3">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-base sm:text-lg text-secondary font-medium">{exp.company}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">{exp.location}</p>
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground mt-2 lg:mt-0 bg-muted px-3 py-1.5 rounded-full whitespace-nowrap self-start">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{exp.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
