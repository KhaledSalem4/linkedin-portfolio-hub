import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "Figma", "Jest", "CI/CD"],
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-16 text-center">
            Skills & Expertise
          </h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-display font-bold text-secondary mb-6 pb-3 border-b-2 border-secondary/20">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1), duration: 0.4 }}
                      className="flex items-center space-x-3 group"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-150 transition-transform" />
                      <span className="text-foreground group-hover:text-secondary transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
