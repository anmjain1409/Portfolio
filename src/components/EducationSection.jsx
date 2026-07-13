import tmuLogo from "@/assets/TMU.png";
import cdacLogo from "@/assets/cdacimage.png";

export const EducationSection = () => {
  const education = [
    {
      degree: "Post Graduate Diploma in Advanced Computing (PG-DAC)",
      institute: "Centre for Development of Advanced Computing (C-DAC)",
      location: "Hyderabad, Telangana",
      logo: cdacLogo,
      year: "AUG 2025 - FEB 2026",
      details: [
        {
          label: "Coursework",
          value:
            "Data Structures & Algorithms, DBMS, Core Java, Advanced Java, Spring Boot, React.js, Software Engineering",
        },
      ],
      description:
        "Completed the PG-DAC program at C-DAC Hyderabad with a strong focus on industry-oriented software development. The curriculum covered backend and full-stack application development, database management, software engineering, and scalable application design, with hands-on experience in building real-world software solutions.",
    },
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science Engineering",
      institute: "Teerthanker Mahaveer University",
      location: "Moradabad, Uttar Pradesh",
      logo: tmuLogo,
      year: "AUG 2021 - JUN 2025",
      details: [
        {
          label: "Branch",
          value: "Computer Science Engineering (CSE)",
        },
        {
          label: "Specialization",
          value:
            "Artificial Intelligence, Machine Learning & Deep Learning (AIMLDL)",
        },
      ],
      description:
        "Completed my B.Tech in Computer Science Engineering with a specialization in Artificial Intelligence, Machine Learning, and Deep Learning (AIMLDL). Built a strong foundation in data structures, algorithms, software development, machine learning, and modern web technologies, with hands-on experience in Python and AI-based application development.",
    },
  ];

  return (
    <section id="education" className="py-24 px-6 bg-background">
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-primary">Education</span>
        </h2>

        {/* Education Cards */}
        <div className="space-y-12">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-card border border-primary/20 p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-left"
            >
              {/* Education Header */}
              <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <img
                    src={edu.logo}
                    alt={`${edu.institute} logo`}
                    className="w-12 h-12 rounded object-contain border border-muted"
                  />

                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-primary">
                      {edu.degree}
                    </h3>

                    <p className="text-base md:text-lg font-semibold text-primary mt-1">
                      {edu.institute}
                    </p>

                    <p className="text-sm md:text-base text-muted-foreground mt-1">
                      {edu.location}
                    </p>
                  </div>
                </div>

                <span className="text-sm md:text-base text-muted-foreground font-medium whitespace-nowrap">
                  {edu.year}
                </span>
              </div>

              {/* Education Details */}
              <div className="space-y-2">
                {edu.details.map((detail, detailIdx) => (
                  <p
                    key={detailIdx}
                    className="text-[15px] md:text-[16px] text-muted-foreground"
                  >
                    {detail.label}:{" "}
                    <span className="text-foreground font-medium">
                      {detail.value}
                    </span>
                  </p>
                ))}
              </div>

              {/* Description */}
              <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-foreground">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};