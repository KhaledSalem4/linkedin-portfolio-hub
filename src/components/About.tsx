import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-8">
            About Me
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              I'm a passionate developer and designer with a keen eye for detail and a love for creating
              seamless digital experiences. With expertise in modern web technologies and a commitment to
              clean, maintainable code, I bring ideas to life through elegant solutions.
            </p>
            
            <p>
              My approach combines technical proficiency with creative thinking, ensuring that every project
              not only functions flawlessly but also delivers an exceptional user experience. I believe in
              continuous learning and staying current with industry trends to provide cutting-edge solutions.
            </p>
            
            <p>
              When I'm not coding, you'll find me exploring new design trends, contributing to open-source
              projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "5+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" },
              { number: "15+", label: "Technologies" },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-display font-bold text-secondary">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
