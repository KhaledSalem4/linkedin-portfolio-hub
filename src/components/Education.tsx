import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Trophy } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "ICPC ECPC Qualifications",
      organization: "Suez Canal University",
      achievement: "Honorable Mention",
      date: "August 2023",
      icon: Trophy,
      description: "Competed in competitive programming contest, solved algorithmic problems using C++",
    },
    {
      title: "Information Systems & Database Training",
      organization: "Port Said Container and Cargo Handling Co.",
      date: "Summer 2023",
      icon: Award,
      description: "Practical training in information systems and database management",
    },
  ];

  return (
    <section id="education" className="py-24 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-16 text-center">
            Education & Achievements
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Main Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card className="p-8 border-l-4 border-l-secondary hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-6">
                  <div className="bg-secondary/10 p-4 rounded-full">
                    <GraduationCap className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                          Bachelor of Computer and Information Sciences
                        </h3>
                        <p className="text-lg text-secondary font-medium">
                          Suez Canal University
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Ismailia, Egypt
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0 text-right">
                        <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full font-medium">
                          Grade: Very Good
                        </span>
                        <p className="text-sm text-muted-foreground mt-2">
                          Aug 2019 - May 2024
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="font-semibold text-foreground mb-3">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Data Structures",
                          "Algorithms Analysis",
                          "OOP",
                          "Software Engineering",
                          "Database Management",
                          "System Analysis",
                          "Design Patterns",
                          "SOLID Principles",
                          "Computer Architecture",
                          "Artificial Intelligence",
                        ].map((course, index) => (
                          <span
                            key={index}
                            className="text-xs px-3 py-1 bg-muted text-foreground rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Certifications */}
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-accent">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 p-3 rounded-full">
                        <cert.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-display font-bold text-foreground mb-2">
                          {cert.title}
                        </h3>
                        <p className="text-secondary font-medium text-sm mb-1">
                          {cert.organization}
                        </p>
                        {cert.achievement && (
                          <p className="text-accent font-medium text-sm mb-2">
                            {cert.achievement}
                          </p>
                        )}
                        <p className="text-xs text-muted-foreground mb-3">{cert.date}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Additional Achievement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Card className="p-6 bg-gradient-to-r from-secondary/5 to-accent/5 border-none">
                <div className="text-center">
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">
                    Competitive Programming Achievement
                  </h3>
                  <p className="text-muted-foreground">
                    Solved <span className="text-secondary font-bold">200+ problems</span> on 
                    Codeforces and LeetCode, demonstrating strong algorithmic thinking and problem-solving skills
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
