import { Briefcase, Code, Brain } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Hi, I'm <span className="text-primary">Anmol Jain</span>
        </h2>
        <h3 className="text-xl text-muted-foreground text-center mb-12">
          Full Stack Developer | AI Engineer
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Developer & AI Engineer
            </h3>

            <p className="text-muted-foreground">
              Associate AI Engineer with hands-on experience in backend development and AI/ML-based applications. Skilled in Python, Java, Spring Boot, and React.js, with expertise in building REST APIs, integrating machine learning models, and working with databases like MySQL, PostgreSQL, and Neo4j.

              Experienced in developing scalable full-stack applications and NLP-based solutions using Hugging Face Transformers. Passionate about solving real-world problems through efficient, data-driven systems and continuously enhancing technical skills in AI and backend development.
            </p>

            <p className="text-muted-foreground">
              I enjoy turning ideas into real-world solutions and continuously learning
              new technologies to stay ahead in the tech space.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1S4OQ01lrAXAj5H0cSJI6u2Hc5MrfonUT/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Web Development */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive and scalable web applications using modern frameworks, with strong backend integration and REST API development.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Management */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Managing end-to-end development using agile methodologies, ensuring efficient delivery, code quality, and collaboration.
                  </p>
                </div>
              </div>
            </div>

            {/* AI & Backend Development */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI & Backend Development</h4>
                  <p className="text-muted-foreground">
                    Developing AI/ML-based applications and scalable backend systems using Python, integrating machine learning models and working with databases like MySQL, PostgreSQL, and Neo4j.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};