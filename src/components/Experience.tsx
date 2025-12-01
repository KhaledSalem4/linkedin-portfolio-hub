import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Senior Developer",
    company: "Tech Company",
    period: "2022 - Present",
    description: "Leading development of innovative web applications using modern frameworks and best practices. Mentoring junior developers and driving technical decisions.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description: "Built and maintained client websites and applications. Collaborated with designers and stakeholders to deliver high-quality digital solutions.",
  },
  {
    title: "Frontend Developer",
    company: "Startup Inc",
    period: "2019 - 2020",
    description: "Developed responsive user interfaces and improved application performance. Implemented modern design systems and component libraries.",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-16 text-center">
            Experience
          </h2>

          <div className="max-w-3xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-secondary">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-secondary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 md:mt-0 bg-muted px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
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
