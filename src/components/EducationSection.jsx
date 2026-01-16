import tmuLogo from "@/assets/TMU.png";
import shivamLogo from "@/assets/SHIVAM HS.png";
import cdacLogo from "@/assets/cdacimage.png";

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 bg-background">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-primary">Education</span>
        </h2>
        {/* PG-DAC */}
        <div className="bg-card border border-primary/20 p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-left">
          <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-4">
            <div className="flex items-start gap-4">
              <img
                src={cdacLogo}
                alt="CDAC Logo"
                className="w-12 h-12 rounded object-contain border border-muted"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-primary">
                  Post Graduate Diploma in Advanced Computing (PG-DAC)
                </h3>
                <p className="text-base md:text-lg font-semibold text-primary mt-1">
                  Centre for Development of Advanced Computing (CDAC), Hyderabad
                </p>
              </div>
            </div>
            <span className="text-sm md:text-base text-muted-foreground font-medium">
              Present
            </span>
          </div>

          <p className="text-[15px] md:text-[16px] text-muted-foreground mb-2">
            Focus Areas:{" "}
            <span className="text-foreground font-medium">
              Data Structures & Algorithms, Core Java, Spring Boot, RESTful APIs,
              SQL, MongoDB, Web Development
            </span>
          </p>

          <p className="text-[15px] md:text-[16px] text-foreground">
            Currently pursuing the PG-DAC program at CDAC Hyderabad with a strong
            focus on industry-oriented software development. The curriculum emphasizes
            backend and full-stack engineering, scalable application design, database
            management, and hands-on project work. This program is enhancing my
            problem-solving abilities and preparing me for backend and full-stack
            developer roles in a professional environment.
          </p>
        </div>


        <div className="space-y-12">
          {/* B.Tech */}
          <div className="bg-card border border-primary/20 p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-left">
            <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-4">
              <div className="flex items-start gap-4">
                <img
                  src={tmuLogo}
                  alt="TMU Logo"
                  className="w-12 h-12 rounded object-contain border border-muted"
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-primary">
                    Bachelor of Technology(B.Tech)
                  </h3>
                  <p className="text-base md:text-lg font-semibold text-primary mt-1">
                    Teerthanker Mahaveer University, Moradabad(U.P)
                  </p>
                </div>
              </div>
              <span className="text-sm md:text-base text-muted-foreground font-medium">
                2021 – 2025
              </span>
            </div>

            <p className="text-[15px] md:text-[16px] text-muted-foreground mb-2">
              Branch: <span className="text-foreground font-medium">Computer Science and Engineering (CSE)</span>
            </p>
            <p className="text-[15px] md:text-[16px] text-muted-foreground mb-2">
              Specialization: <span className="text-foreground font-medium">Artificial Intelligence, Machine Learning & Deep Learning (AIMLDL)</span>
            </p>
            
            <p className="text-[15px] md:text-[16px] text-muted-foreground mb-2">
              CGPA: <span className="text-foreground font-medium">7.67</span>
            </p>
            <p className="text-[15px] md:text-[16px] text-foreground">
              I am pursuing my B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence, Machine Learning, and Deep Learning (AIMLDL). During my studies, I have built a strong foundation in data structures, algorithms, software development, and modern web technologies. The program has provided exposure to both theoretical and practical aspects of computing, including hands-on experience in Python, machine learning concepts, web development, and system design. I have also participated in technical workshops and internships, which have further strengthened my problem-solving, coding, and analytical skills.
            </p>
          </div>

          {/* Higher Secondary School */}
          <div className="bg-card border border-primary/20 p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-left">
            <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-4">
              <div className="flex items-start gap-4">
                <img
                  src={shivamLogo}
                  alt="Shivam Higher Secondary Logo"
                  className="w-12 h-12 rounded object-contain border border-muted"
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-primary">
                    Higher Secondary School
                  </h3>
                  <p className="text-base md:text-lg font-semibold text-primary mt-1">
                    Shivam Higher Secondary School
                  </p>
                </div>
              </div>
              <span className="text-sm md:text-base text-muted-foreground font-medium">
                2021
              </span>
            </div>

            <p className="text-[15px] md:text-[16px] text-muted-foreground mb-2">
              Stream: <span className="text-foreground font-medium">PCM (Physics, Chemistry, Mathematics)</span>
            </p>
            <p className="text-[15px] md:text-[16px] text-muted-foreground mb-2">
              Percentage: <span className="text-foreground font-medium">65.40%</span>
            </p>
            <p className="text-[15px] md:text-[16px] text-foreground">
              In Higher Secondary School, I chose the PCM stream, which helped build strong analytical and mathematical skills. I focused on understanding core scientific concepts, problem-solving, and logic building. This foundation played a crucial role in shaping my interest in programming, engineering, and structured thinking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
