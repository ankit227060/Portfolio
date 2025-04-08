import { User2, Code2, Lightbulb } from "lucide-react";
import { GoGoal } from "react-icons/go";
import { SectionTitle } from "./ui/SectionTitle";

const aboutSections = [
  {
    icon: User2,
    title: "About Me",
    description: [
      "Passionate full-stack developer with a strong focus on software engineering.",
      "Enthusiastic about tackling challenges and developing efficient, scalable solutions.",
      "Continuously exploring new technologies to enhance my expertise and stay ahead in the field.",
    ],
    color: "bg-blue-600",
  },
  {
    icon: Code2,
    title: "About My Work",
    description: [
      "Build fast, scalable web applications with the latest technologies.",
      "Tackle complex coding challenges and enhance performance.",
      "Engage in open-source contributions and stay updated with tech innovations.",
    ],
    color: "bg-purple-600",
  },
  {
    icon: GoGoal,
    title: "Future Vision",
    description: [
      "Create impactful software solutions that address real-world problems on a large scale.",
      "Enhance my expertise as a full-stack developer by mastering modern frameworks and technologies.",
      "Support and uplift the developer community by actively contributing to open-source projects.",
    ],
    color: "bg-green-600",
  },
  {
    icon: Lightbulb,
    title: "What I Believe In",
    description: [
      "Tech exists to make life easier, not harder.",
      "Effective software is about solving real issues, not just writing lines of code.",
      "Staying curious and learning consistently is the key to staying ahead in technology.",
    ],
    color: "bg-orange-600",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />
      </div>

      <div className="container mx-auto px-6 relative">
        <SectionTitle>About Me</SectionTitle>

        {/* Introduction */}
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Hey!👋 I'm <span className="text-blue-600 font-semibold">Ankit</span>,
            a final-year Computer Science Engineering student and passionate Full-Stack Developer.
            I enjoy turning innovative ideas into efficient, scalable web solutions while tackling challenging coding problems. 
            My tech journey is driven by a constant thirst for knowledge, hands-on experience with emerging technologies, and a desire to create meaningful digital products
          </p>

          <div className="mt-6 flex justify-center">
            <span className="text-sm sm:text-base inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-lg shadow">
            I enjoy creating digital solutions and tackling real-world challenges.
            </span>
          </div>
        </div>

        {/* About Section Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {aboutSections.map(({ icon: Icon, title, description, color }) => (
            <div key={title} className="relative group">
              {/* Background Effect */}
              <div className={`absolute inset-0 ${color} rounded-xl blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`} />

              {/* Card Content */}
              <div className="relative bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4 space-x-4">
                  {/* Icon */}
                  <div className={`p-3 ${color} rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
                </div>
                <ul className="text-sm sm:text-base list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1">
                  {description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
