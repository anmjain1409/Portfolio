import { ArrowRight, ExternalLink, Github } from "lucide-react";
import mindscopeImage from "../assets/MindScope.png"

export const ProjectsSection = () => {
  const project = {
    title: "MindScope",
    description:
      "MindScope is an AI-powered multi-module web platform built with Streamlit. It offers a suite of intelligent tools for text analysis, feature exploration, document characterization, and image recognition—all in one place. With its modular design and user-friendly interface, MindScope empowers users to extract insights from various data types directly through their browser.",
    image: mindscopeImage,
    tags: ["Python", "Streamlit", "AI", "Image Recognition"],
    demoUrl: "https://main-file-ebon.vercel.app",
    githubUrl: "https://github.com/anmjain1409",
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Project</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore my AI-powered platform combining modular tools for analyzing text, images, and documents—all from your browser.
        </p>

        <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
          <div className="h-48 overflow-hidden">
            <img
              src={project.image}
              alt="MindScope Project Screenshot"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">
              {project.description}
            </p>

            <div className="flex justify-between items-center">
              <div className="flex space-x-3">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  <ExternalLink size={20} />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/anmjain1409"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
