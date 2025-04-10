import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'B.Tech CS AIML',
    institution: 'St. Andrews Institute of Technology and Management, Gurgaon',
    period: '2022 - 2026',
    score: '65%',
  },
  {
    degree: '12th',
    institution: 'The Dev Public School',
    period: '2021 - 2022',
    score: '81.8%',
  },
  {
    degree: '10th',
    institution: "The Dev Public School",
    period: '2019 - 2020',
    score: '80.2%',
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Educations</SectionTitle>
        <div className="max-w-5xl mx-auto space-y-10">
          {education.map((edu, index) => (
            <EducationCard key={edu.degree} {...edu} isLast={index === education.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
