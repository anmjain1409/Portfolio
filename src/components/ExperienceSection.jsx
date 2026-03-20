import impactqaLogo from "@/assets/IMPACTQA1.png";
import cienaLogo from "@/assets/Ciena.png";
import ypsilonLogo from "@/assets/ypsilon_it_solutions.png";
import iitLogo from "@/assets/E&ICT Academy.png";
import navAjnaLogo from "@/assets/navAjnaLogo.jpg";

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
              role: "Trainee Software Engineer",
              company: "NavAjna Technologies",
              logo: navAjnaLogo,
              year: "MAR 2026 - PRESENT",
              description:
                "Working as a Trainee Software Engineer, focusing on developing AI/ML-based solutions and backend applications using Python.",
              skills: [
                "Python",
                "Machine Learning",
                "Artificial Intelligence",
                "NumPy",
                "Pandas",
              ],
            },
            {
              role: "Development Intern",
              company: "IMPACTQA SERVICES PVT LTD",
              logo: impactqaLogo,
              year: "FEB 2025 - MAY 2025",
              certificateLink:
                "https://drive.google.com/file/d/1M2d0L3ZLbmpKCvBBTOTwmRHw5hFG5bLO/view?usp=sharing",
              description:
                "Worked on a real-time web application using Flask. Designed REST APIs, integrated Postman testing, and containerized the app using Docker. Gained experience in microservices and backend development.",
              skills: ["Flask", "Docker", "Postman", "JWT", "Microservices"],
            },
            {
              role: "Summer Intern",
              company: "CIENA INDIA PVT LTD, Gurgaon",
              logo: cienaLogo,
              year: "JUNE 2024 - SEPT 2024",
              certificateLink:
                "https://drive.google.com/file/d/14Kc4TdgWcxpIpzZIQjRF1kV4YvigSvdX/view?usp=sharing",
              description:
                "Worked on automation tools using Python. Improved a log analysis tool and optimized debugging workflows. Collaborated in agile environment and used Git for version control.",
              skills: ["Python", "Git", "Automation", "Agile", "Debugging"],
            },
            {
              role: "Industrial Trainee",
              company: "YPSILON IT SOLUTIONS, Indore",
              logo: ypsilonLogo,
              year: "JULY 2023 - AUG 2023",
              description:
                "Built responsive web apps like Flipkart and BookMyShow clones using HTML, CSS, JS, and Flask. Implemented authentication, search, and cart features.",
              skills: ["HTML", "CSS", "JavaScript", "Flask"],
            },
            {
              role: "Online Summer Training",
              company: "E&ICT Academy, IIT Kanpur",
              logo: iitLogo,
              year: "MAY 2023 - JUN 2023",
              description:
                "Completed Python training focused on data science using Pandas, NumPy, and visualization tools. Worked on EDA and basic ML models.",
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

              <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground">
                {exp.description}
              </p>

              {exp.certificateLink && (
                <div className="mt-4">
                  <a
                    href={exp.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-primary hover:underline"
                  >
                    📄 View Internship Completion Letter
                  </a>
                </div>
              )}

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