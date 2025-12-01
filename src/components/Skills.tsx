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
    <section id="skills" className="py-24 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 text-center">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Comprehensive skill set spanning full-stack development, competitive programming, and modern software engineering practices
          </p>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-secondary">
                  <h3 className="text-xl font-display font-bold text-foreground mb-6">
                    {category.title}
                  </h3>
                  <div className="space-y-3">
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
            className="mt-12 text-center"
          >
            <Card className="inline-block p-6 bg-gradient-to-r from-secondary/10 to-accent/10">
              <h3 className="text-lg font-display font-bold text-foreground mb-3">
                Languages
              </h3>
              <div className="flex gap-8">
                <div>
                  <span className="text-secondary font-medium">Arabic</span>
                  <span className="text-muted-foreground text-sm block">Native</span>
                </div>
                <div>
                  <span className="text-secondary font-medium">English</span>
                  <span className="text-muted-foreground text-sm block">Intermediate</span>
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
