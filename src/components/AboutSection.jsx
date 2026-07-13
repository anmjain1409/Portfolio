import { Brain, Server, ScanEye } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Hi, I'm <span className="text-primary">Anmol Jain</span>
        </h2>

        <h3 className="text-xl text-muted-foreground text-center mb-12">
          AI Engineer | Generative AI | Backend Systems
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              AI Engineer | Generative AI & Backend Systems
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              Associate AI Engineer I with hands-on experience in building
              production-ready AI applications and intelligent backend systems.
              Skilled in Python, FastAPI, Large Language Models (LLMs), Machine
              Learning, and Neo4j, with experience in developing REST APIs,
              real-time streaming services, and AI-powered automation workflows.
              I work on integrating Generative AI and computer vision
              technologies into scalable backend systems to solve real-world
              business problems.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I enjoy transforming complex ideas into practical AI solutions and
              continuously exploring modern technologies in Generative AI,
              intelligent automation, and scalable backend development.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1O1HAFFKUP6TDOOvmUidrlYDjhyRlDxSK/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Generative AI & LLMs */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <Brain className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Generative AI & LLMs
                  </h4>

                  <p className="text-muted-foreground mt-1 leading-relaxed">
                    Building intelligent AI applications using Large Language
                    Models, prompt engineering, tool calling, and agentic
                    workflows to automate real-world business processes.
                  </p>
                </div>
              </div>
            </div>

            {/* AI Backend Engineering */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <Server className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    AI Backend Engineering
                  </h4>

                  <p className="text-muted-foreground mt-1 leading-relaxed">
                    Designing scalable AI backend services using Python and
                    FastAPI, with REST APIs, real-time SSE streaming,
                    microservices, and Docker-based deployment.
                  </p>
                </div>
              </div>
            </div>

            {/* Machine Learning & Computer Vision */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <ScanEye className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Machine Learning & Computer Vision
                  </h4>

                  <p className="text-muted-foreground mt-1 leading-relaxed">
                    Developing machine learning and computer vision solutions
                    using Hugging Face Transformers, OpenCV, and YOLO for
                    intelligent data processing and real-time analytics.
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