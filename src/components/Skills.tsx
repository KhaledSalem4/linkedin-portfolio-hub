import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "RxJS", "Responsive Design"],
  },
  {
    title: "Backend",
    skills: ["C#", "ASP.NET Core", "Node.js", "Express.js", "REST APIs", "Entity Framework", "JWT Auth"],
  },
  {
    title: "Database",
    skills: ["SQL Server", "MongoDB", "PostgreSQL", "Entity Framework", "Database Design"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Visual Studio", "VS Code", "Postman", "Swagger", "Docker"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technical expertise spanning the full development stack
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillGroups.map((group, groupIndex) => (
              <motion.div
                key={groupIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: groupIndex * 0.1, duration: 0.5 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-bold text-primary border-b border-primary/30 pb-2">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ delay: groupIndex * 0.1 + skillIndex * 0.03 }}
                      className="text-sm px-3 py-1.5 bg-muted text-foreground rounded-md hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-16 text-center"
          >
            <h3 className="text-lg font-bold text-foreground mb-4">Languages</h3>
            <div className="flex justify-center gap-6 flex-wrap">
              <div className="px-6 py-3 bg-muted rounded-lg">
                <span className="font-medium text-foreground">Arabic</span>
                <span className="text-muted-foreground text-sm block">Native</span>
              </div>
              <div className="px-6 py-3 bg-muted rounded-lg">
                <span className="font-medium text-foreground">English</span>
                <span className="text-muted-foreground text-sm block">Intermediate</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
