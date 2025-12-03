import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Building Scalable APIs with ASP.NET Core",
    excerpt: "Best practices for designing and implementing RESTful APIs using ASP.NET Core, including authentication, validation, and error handling.",
    category: "Backend",
    readTime: "8 min read",
    date: "Coming Soon",
  },
  {
    title: "Clean Architecture in .NET Applications",
    excerpt: "A deep dive into implementing clean architecture patterns in enterprise .NET applications for maintainability and testability.",
    category: "Architecture",
    readTime: "12 min read",
    date: "Coming Soon",
  },
  {
    title: "Angular State Management with RxJS",
    excerpt: "Exploring reactive state management patterns in Angular applications using RxJS observables and subjects.",
    category: "Frontend",
    readTime: "10 min read",
    date: "Coming Soon",
  },
];

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blog
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sharing insights on development, architecture, and best practices
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 bg-card hover:border-primary/30 transition-all duration-300 group cursor-pointer">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-xs font-medium px-2.5 py-1 bg-primary/10 text-primary rounded">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-muted-foreground text-xs">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                    
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 hidden sm:block" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center mt-8"
          >
            <p className="text-muted-foreground text-sm">
              More articles coming soon. Stay tuned!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
