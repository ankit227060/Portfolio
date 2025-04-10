import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { ExperienceCard } from "./ui/ExperienceCard";

const experiences = [
  {
    title: "Android App Developer Intern",
    company: "CodSoft",
    period: "Jul 2024 - Aug 2024",
    description: `Worked on building and optimizing Android applications to deliver smooth and responsive user experiences.
    Created and enhanced a feature-rich mobile app interface that led to a 40% boost in user retention and engagement.
    Applied modern UI/UX principles to ensure intuitive navigation and full compatibility across diverse screen sizes and Android versions.`,
    skills: ["Java", "Android Studio", "XML", "Git", "Vercel"],
  },
  
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Experience</SectionTitle>
        <div className="relative border-l-2 border-blue-600 dark:border-blue-500 max-w-5xl mx-auto space-y-10">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
