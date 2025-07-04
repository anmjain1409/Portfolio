import impactqaLogo from "@/assets/IMPACTQA1.png";
import cienaLogo from "@/assets/Ciena.png";
import ypsilonLogo from "@/assets/YPsilon IT SOLUTIONS.png";
import iitLogo from "@/assets/E&ICT Academy.png";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-background">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-primary">Experience</span>
        </h2>

        <div className="space-y-12">
          {[
            {
              role: "Development Intern",
              company: "IMPACTQA SERVICES PVT LTD",
              logo: impactqaLogo,
              year: "FEB2025 - MAY2025",
              description: `During my internship, I worked on a real-time web application project using Flask, a lightweight Python web framework. I was responsible for designing RESTful APIs, implementing core backend logic, and integrating the application with Postman for testing endpoints. Additionally, I containerized the entire application using Docker, which ensured consistency across development and production environments. Through this experience, I gained hands-on exposure to deploying microservices, debugging server issues, and following best practices in backend development. It significantly strengthened my skills in Python, API development, and container orchestration.`,
              skills: ["Flask", "Docker", "Postman", "JWT", "Microservices"],
            },
            {
              role: "Summer Intern",
              company: "CIENA INDIA PVT LTD, Gurgaon",
              logo: cienaLogo,
              year: "JUNE2024 - SEPT2024",
              description: `As a Summer Intern at Ciena India Private Limited, I contributed to the development and enhancement of internal automation tools using Python. One of my key projects was working on a Company Log Analysis Tool, where I improved and launched a new version that consolidated logs into a single file, making it significantly easier to identify and troubleshoot issues. This upgrade improved diagnostic speed and reduced manual effort for the team. I collaborated closely with developers and testers to ensure the tool met real-time requirements and integrated well with existing workflows. Alongside coding, I documented the tool’s usage and setup procedures, which streamlined onboarding and future maintenance. I also worked on automating various tasks and optimizing data workflows, leading to improved team efficiency. My internship gave me strong exposure to real-world problem-solving, agile practices, and technical collaboration in a fast-paced environment. I regularly used Git for version control and participated in code reviews and knowledge-sharing sessions.`,
              skills: ["Python", "Git", "Automation", "Agile", "Debugging"],
            },
            {
              role: "Industrial Trainee",
              company: "YPSILON IT SOLUTIONS, Indore",
              logo: ypsilonLogo,
              year: "JULY2023 - AUG2023",
              description: `I developed dynamic, responsive web applications by creating clones of popular platforms like Flipkart and BookMyShow to strengthen my full-stack development skills. These projects involved building functional user interfaces and integrating key features such as product listings, filtering, search, user login, and cart management. I used HTML, CSS, and JavaScript to design clean and interactive frontends that closely mimicked the real platforms. On the backend, I employed Python and Flask to handle routing, user authentication, and data management. I focused on writing modular, maintainable code and ensured responsiveness across various devices. These projects helped me understand the architecture of scalable web applications. I also learned how to debug cross-browser issues and improve page load performance. By replicating real-world apps, I enhanced my ability to analyze features and implement them from scratch. This experience boosted both my problem-solving skills and practical knowledge of web technologies.`,
              skills: ["HTML", "CSS", "JavaScript", "Flask"],
            },
            {
              role: "Online Summer Training",
              company: "E&ICT Academy, IIT Kanpur",
              logo: iitLogo,
              year: "MAY2023- JUN2023",
              description: `I successfully completed an intensive Python training program focused on data science, analysis, and visualization. The training covered the core concepts of data manipulation using Pandas and NumPy, enabling me to clean, transform, and analyze real-world datasets efficiently. I also gained hands-on experience in creating insightful visualizations using Matplotlib and Seaborn, which helped me interpret data trends effectively. As part of the program, I worked on end-to-end data pipelines, from raw data ingestion to analysis and reporting. I collaborated with peers on data science projects, applying techniques such as exploratory data analysis (EDA), statistical modeling, and data storytelling. Additionally, I explored model building and deployment, using simple machine learning models for prediction tasks. The projects also included sharing findings through dashboards and reports. This experience strengthened my analytical thinking and technical proficiency. It gave me a strong foundation in the practical application of Python for solving real data problems.`,
              skills: ["Python", "Pandas", "NumPy", "Matplotlib", "EDA"],
            },
          ].map((exp, idx) => (
            <div
              key={idx}
              className="bg-card border border-primary/20 p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-left"
            >
              <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-12 h-12 rounded object-contain border border-muted"
                  />
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-primary">
                      {exp.role}
                    </h3>
                    <p className="text-base md:text-lg font-semibold text-primary mt-1">
                      {exp.company}
                    </p>
                  </div>
                </div>
                <span className="text-sm md:text-base text-muted-foreground font-medium">
                  {exp.year}
                </span>
              </div>

              <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground text-left">
                {exp.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs md:text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
