import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Khaled Salem | Full Stack .NET Developer</title>
        <meta name="description" content="Full Stack .NET Developer specialized in building robust web applications using C#, ASP.NET Core, and Angular. View my portfolio, projects, and experience." />
        <meta name="keywords" content="Khaled Salem, Full Stack Developer, .NET Developer, ASP.NET Core, Angular, C#, Portfolio" />
        <link rel="canonical" href="https://khaledsalem.dev" />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
