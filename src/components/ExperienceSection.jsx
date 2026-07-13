import impactqaLogo from "@/assets/IMPACTQA1.png";
import cienaLogo from "@/assets/Ciena.png";
import ypsilonLogo from "@/assets/ypsilon_it_solutions.png";
import iitLogo from "@/assets/E&ICT Academy.png";
import navAjnaLogo from "@/assets/navAjnaLogo.jpg";

export const ExperienceSection = () => {
  const experiences = [
    {
      type: "progression",
      company: "NavAjna Technologies Pvt Ltd",
      location: "Hyderabad, Telangana · On-site",
      logo: navAjnaLogo,
      year: "MAR 2026 - PRESENT",
      roles: [
        {
          role: "Associate AI Engineer I",
          year: "APR 2026 - PRESENT",
          description:
            "Developing scalable AI-powered backend applications using Python and FastAPI for enterprise analytics and intelligent automation. Working on LLM integration, intelligent query processing, computer vision analytics, and production-ready AI backend services.",
          skills: [
            "Python",
            "FastAPI",
            "LLM",
            "Neo4j",
            "Machine Learning",
            "REST APIs",
          ],
        },
        {
          role: "Trainee Software Engineer",
          year: "MAR 2026 - APR 2026",
          description:
            "Developed backend applications and REST APIs using Python and Flask. Worked on AI/ML use cases, including computer vision with OpenCV and YOLO, while gaining hands-on experience in backend architecture and enterprise AI workflows.",
          skills: [
            "Python",
            "Flask",
            "REST APIs",
            "OpenCV",
            "YOLO",
          ],
        },
      ],
    },
    {
      type: "single",
      company: "ImpactQA Services Pvt Ltd",
      location: "Noida, Uttar Pradesh · On-site",
      logo: impactqaLogo,
      year: "FEB 2025 - MAY 2025",
      role: "Development Intern",
      certificateLink:
        "https://drive.google.com/file/d/1M2d0L3ZLbmpKCvBBTOTwmRHw5hFG5bLO/view?usp=sharing",
      description:
        "Built a Flask-based web application with RESTful APIs and secure JWT authentication. Developed backend logic, tested API endpoints using Postman, and containerized the application with Docker for consistent deployment across environments.",
      skills: [
        "Python",
        "Flask",
        "Docker",
        "Postman",
        "JWT",
        "REST APIs",
      ],
    },
    {
      type: "single",
      company: "Ciena India Pvt Ltd",
      location: "Gurugram, Haryana · On-site",
      logo: cienaLogo,
      year: "JUNE 2024 - SEPT 2024",
      role: "Summer Intern",
      certificateLink:
        "https://drive.google.com/file/d/14Kc4TdgWcxpIpzZIQjRF1kV4YvigSvdX/view?usp=sharing",
      description:
        "Developed and enhanced Python-based internal automation tools, including a log analysis solution that consolidated system logs for faster troubleshooting. Automated data workflows, improved debugging efficiency, and collaborated with developers and testers in an Agile environment.",
      skills: [
        "Python",
        "Git",
        "Automation",
        "Log Analysis",
        "Agile",
        "Debugging",
      ],
    },
    {
      type: "single",
      company: "Ypsilon IT Solutions",
      location: "Indore, Madhya Pradesh · On-site",
      logo: ypsilonLogo,
      year: "JULY 2023 - AUG 2023",
      role: "Industrial Trainee",
      description:
        "Developed responsive web applications and full-stack clones of Flipkart and BookMyShow using HTML, CSS, JavaScript, Python, and Flask. Implemented product listings, search, authentication, and backend routing while gaining hands-on experience in scalable web application development.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "Flask",
      ],
    },
    {
      type: "single",
      company: "E&ICT Academy, IIT Kanpur",
      location: "Kanpur, Uttar Pradesh · Online",
      logo: iitLogo,
      year: "MAY 2023 - JUN 2023",
      role: "Online Summer Training",
      description:
        "Completed intensive Python training focused on data analysis, visualization, and data science. Worked with Pandas and NumPy for data manipulation, performed exploratory data analysis, and created visualizations using Matplotlib on real-world datasets.",
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "EDA",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-background">
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-primary">Experience</span>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, idx) => {
            /* ================= NAVAJNA CAREER PROGRESSION ================= */

            if (exp.type === "progression") {
              return (
                <div
                  key={idx}
                  className="bg-card border border-primary/20 p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-left"
                >
                  {/* Company Header */}
                  <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-8">
                    <div className="flex items-start gap-4">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-12 h-12 rounded object-contain border border-muted"
                      />

                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-primary">
                          {exp.company}
                        </h3>

                        <p className="text-sm md:text-base text-muted-foreground mt-1">
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    <span className="text-sm md:text-base text-muted-foreground font-medium whitespace-nowrap">
                      {exp.year}
                    </span>
                  </div>

                  {/* Career Progression Timeline */}
                  <div className="ml-5 md:ml-6">
                    {exp.roles.map((role, roleIdx) => (
                      <div
                        key={roleIdx}
                        className="relative pl-10 pb-10 last:pb-0"
                      >
                        {/* Timeline Line */}
                        {roleIdx !== exp.roles.length - 1 && (
                          <div className="absolute left-[7px] top-4 bottom-0 w-[2px] bg-primary/30" />
                        )}

                        {/* Timeline Dot */}
                        <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-sm" />

                        {/* Position & Date */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                          <h4 className="text-xl md:text-2xl font-semibold text-primary">
                            {role.role}
                          </h4>

                          <span className="text-sm md:text-base text-muted-foreground font-medium whitespace-nowrap">
                            {role.year}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-foreground">
                          {role.description}
                        </p>

                        {/* Skills */}
                        <div className="mt-5 flex flex-wrap gap-3">
                          {role.skills.map((skill, skillIdx) => (
                            <span
                              key={skillIdx}
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
              );
            }

            /* ================= SINGLE EXPERIENCE CARDS ================= */

            return (
              <div
                key={idx}
                className="bg-card border border-primary/20 p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-left"
              >
                {/* Company Header */}
                <div className="flex items-start gap-4 mb-8">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-12 h-12 rounded object-contain border border-muted"
                  />

                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-primary">
                      {exp.company}
                    </h3>

                    <p className="text-sm md:text-base text-muted-foreground mt-1">
                      {exp.location}
                    </p>
                  </div>
                </div>

                {/* Position */}
                <div className="ml-5 md:ml-6">
                  <div className="relative pl-10">
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-sm" />

                    {/* Position & Date */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <h4 className="text-xl md:text-2xl font-semibold text-primary">
                        {exp.role}
                      </h4>

                      <span className="text-sm md:text-base text-muted-foreground font-medium whitespace-nowrap">
                        {exp.year}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-foreground">
                      {exp.description}
                    </p>

                    {/* Certificate */}
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

                    {/* Skills */}
                    <div className="mt-5 flex flex-wrap gap-3">
                      {exp.skills.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className="text-xs md:text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};