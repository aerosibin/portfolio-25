import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="hero-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore my innovative solutions spanning IoT, robotics, AI, and data science
          </p>
          
          <Button size="lg" variant="default" asChild>
            <a href="https://github.com/aerosibin" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;