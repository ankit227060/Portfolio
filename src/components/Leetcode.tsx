import React from 'react';
import { SectionTitle } from './ui/SectionTitle';

export function Leetcode() {
  return (
    <section id="leetcode" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl px-8">
        <SectionTitle>DSA Journey</SectionTitle>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Leetcode Activity Image */}
          <div className="relative w-full h-[25rem] overflow-hidden">
            <iframe
              src="https://codolio.com/profile/ankitghamdan/card"
              title="Leetcode Activity"
              className="absolute w-full h-full shadow-md"
            ></iframe>
          </div>
          
          {/* Leetcode Journey Text */}
          <div>
            <h3 className=" text-center text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              My DSA Journey
            </h3>
            <p className=" text-center text-lg text-gray-600 dark:text-gray-300 mb-4">
            Consistently working through LeetCode problems has sharpened my understanding of Data Structures and Algorithms. I find joy in solving complex challenges that not only enhance my logical thinking but also build my readiness for real-world technical interviews.
            </p>
            <p className=" text-center text-lg text-gray-600 dark:text-gray-300">
            I’ve tackled hundreds of problems spanning key topics like arrays, trees, graphs, and dynamic programming. Staying consistent with my practice, I aim to keep growing and expanding my problem-solving toolkit every single day.


            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
