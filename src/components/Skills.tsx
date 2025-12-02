import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C#", "TypeScript", "JavaScript (ES6)", "C++", "Python", "SQL", "HTML/CSS"],
    color: "secondary",
  },
  {
    title: "Frameworks & Technologies",
    skills: [
      "ASP.NET Core",
      "Angular",
      "Entity Framework",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "MVC Pattern",
    ],
    color: "accent",
  },
  {
    title: "Development Practices",
    skills: [
      "OOP & SOLID Principles",
      "Design Patterns",
      "Agile Methodology",
      "Unit Testing",
      "JWT Authentication",
      "Version Control (Git)",
    ],
    color: "secondary",
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Visual Studio Code",
      "Git & GitHub",
      "Postman",
      "Swagger",
      "NPM",
      "SQL Server",
      "Render",
      "Cloudinary",
    ],
    color: "accent",
  },
  {
    title: "Core Competencies",
    skills: [
      "Data Structures & Algorithms",
      "Database Design",
      "System Analysis",
      "Software Engineering",
      "Problem Solving",
      "API Development",
    ],
    color: "secondary",
  },
  {
    title: "Soft Skills",
    skills: [
      "Communication",
      "Team Collaboration",
      "Time Management",
      "Adaptability",
      "Continuous Learning",
      "Problem-Solving",
    ],
    color: "accent",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-3 sm:mb-4 text-center">
            Technical Skills
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-center mb-10 sm:mb-12 md:mb-16 max-w-2xl mx-auto px-4">
            Comprehensive skill set spanning full-stack development, competitive programming, and modern software engineering practices
          </p>

          <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              >
                <Card className="p-4 sm:p-6 h-full hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-secondary">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-foreground mb-4 sm:mb-6">
                    {category.title}
                  </h3>
                  <div className="space-y-2 sm:space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          duration: 0.4,
                        }}
                        className="flex items-center space-x-3 group"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-150 transition-transform flex-shrink-0" />
                        <span className="text-sm text-foreground group-hover:text-secondary transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Languages Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 sm:mt-10 md:mt-12 text-center"
          >
            <Card className="inline-block p-4 sm:p-6 bg-gradient-to-r from-secondary/10 to-accent/10 mx-4">
              <h3 className="text-base sm:text-lg font-display font-bold text-foreground mb-3">
                Languages
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div className="text-center sm:text-left">
                  <span className="text-secondary font-medium text-sm sm:text-base">Arabic</span>
                  <span className="text-muted-foreground text-xs sm:text-sm block">Native</span>
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-secondary font-medium text-sm sm:text-base">English</span>
                  <span className="text-muted-foreground text-xs sm:text-sm block">Intermediate</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
