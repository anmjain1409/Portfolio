import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // AI & Generative AI
  { name: "Large Language Models (LLMs)", category: "ai" },
  { name: "Generative AI", category: "ai" },
  { name: "OpenAI API", category: "ai" },
  { name: "Groq", category: "ai" },
  { name: "Hugging Face Transformers", category: "ai" },
  { name: "LangChain", category: "ai" },
  { name: "Prompt Engineering", category: "ai" },
  { name: "Agentic AI", category: "ai" },
  { name: "Model Context Protocol (MCP)", category: "ai" },
  { name: "Natural Language Processing (NLP)", category: "ai" },
  { name: "Machine Learning", category: "ai" },
  { name: "Computer Vision", category: "ai" },
  { name: "Scikit-learn", category: "ai" },
  { name: "OpenCV", category: "ai" },
  { name: "YOLO", category: "ai" },
  { name: "NumPy", category: "ai" },
  { name: "Pandas", category: "ai" },

  // Backend
  { name: "Python", category: "backend" },
  { name: "FastAPI", category: "backend" },
  { name: "Flask", category: "backend" },
  { name: "Java", category: "backend" },
  { name: "Spring Boot", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "Microservices", category: "backend" },

  // Databases
  { name: "PostgreSQL", category: "databases" },
  { name: "MySQL", category: "databases" },
  { name: "MongoDB", category: "databases" },
  { name: "Neo4j", category: "databases" },
  { name: "TimescaleDB", category: "databases" },
  { name: "SQL", category: "databases" },

  // Frontend
  { name: "React.js", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },

  // Tools & Platforms
  { name: "Docker", category: "tools" },
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Streamlit", category: "tools" },
  { name: "ngrok", category: "tools" },
  { name: "WhatsApp Business API", category: "tools" },

  // Core Concepts
  { name: "Data Structures & Algorithms", category: "concepts" },
  { name: "Object-Oriented Programming (OOP)", category: "concepts" },
  { name: "JWT Authentication", category: "concepts" },
  { name: "REST API Design", category: "concepts" },
  { name: "Server-Sent Events (SSE)", category: "concepts" },
  { name: "Microservices Architecture", category: "concepts" },
  { name: "CRUD Operations", category: "concepts" },
  { name: "Dependency Mapping", category: "concepts" },
  { name: "Agile Development", category: "concepts" },
];

const categories = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI & GenAI" },
  { id: "backend", label: "Backend" },
  { id: "databases", label: "Databases" },
  { id: "frontend", label: "Frontend" },
  { id: "tools", label: "Tools" },
  { id: "concepts", label: "Core Concepts" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={`${skill.category}-${skill.name}`}
              className="bg-card border border-primary/10 px-4 py-5 rounded-xl shadow-sm card-hover flex items-center justify-center text-center min-h-[80px]"
            >
              <h3 className="font-medium text-sm md:text-base">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};