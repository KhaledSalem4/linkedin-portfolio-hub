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
              I'm a motivated Full Stack .NET Developer with hands-on experience in building robust web applications 
              using C#, ASP.NET Core, and SQL Server. I graduated with a Very Good grade from Suez Canal University's 
              Faculty of Computer and Information Sciences, where I developed a strong foundation in software engineering 
              principles and modern development practices.
            </p>
            
            <p>
              My technical expertise spans the full development stack - from crafting responsive frontends with Angular 
              and JavaScript to building secure RESTful APIs with ASP.NET Core and Entity Framework. I'm passionate about 
              writing clean, maintainable code following SOLID principles and design patterns, always striving to deliver 
              high-quality solutions that meet real-world needs.
            </p>
            
            <p>
              Through intensive training at ITI and working on diverse projects, I've gained practical experience in Agile 
              methodologies, team collaboration, and modern development tools. I'm also an active competitive programmer 
              with 200+ problems solved on Codeforces and LeetCode, constantly sharpening my problem-solving skills.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "2024", label: "Graduate" },
              { number: "200+", label: "Problems Solved" },
              { number: "10+", label: "Projects Built" },
              { number: "12+", label: "Technologies" },
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
