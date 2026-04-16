import { ArrowRight, ExternalLink, Github } from "lucide-react";
import mindscopeImage from "../assets/MindScope.png";
import stayspotImage from "../assets/stayspot.png";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "StaySpot",
      description:
        "Full-stack property booking platform with real-time availability, role-based access control, and secure JWT authentication.",
      image: stayspotImage,
      tags: ["Java", "Spring Boot", "React", "MySQL", "JWT"],
      demoUrl: "https://stayspot-frontend.onrender.com/",
      githubUrl: "https://github.com/anmjain1409/StaySpot",
    },
    {
      title: "MindScope",
      description:
        "AI-powered multi-module platform for NLP, image recognition, and data analysis built using Streamlit.",
      image: mindscopeImage,
      tags: ["Python", "Streamlit", "AI", "NLP"],
      demoUrl: "https://main-file-ebon.vercel.app",
      githubUrl: "https://github.com/anmjain1409",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore my projects showcasing AI, full-stack development, and real-world applications.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
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

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
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