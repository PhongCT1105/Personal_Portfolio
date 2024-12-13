import React, { useEffect, useState } from 'react';

const About = () => {
  const experienceTimeline = [
    {
      role: 'Machine Learning Intern',
      company: 'FPT Software, Vietnam',
      duration: 'June 2024 - August 2024',
      description:
        'Developed an AI-powered wedding album image management system using Azure AI Vision, improving model accuracy by 15%. Implemented a deep learning image clustering system for a 5000-image dataset.',
    },
    {
      role: 'Lead Software Engineer',
      company: 'Mass General Brigham Hospital',
      duration: 'March 2024 - May 2024',
      description:
        'Led a team of 11 in developing a hospital management system using Agile methodology. Delivered a Logistic Regression-based scheduling system with 90% accuracy.',
    },
    {
      role: 'Artificial Intelligence Intern',
      company: 'Vietnam National University',
      duration: 'July 2023 - August 2023',
      description:
        'Built a clinical decision support system to detect pneumonia and pulmonary edema using deep convolutional neural networks with an F1 score of 0.832.',
    },
    {
      role: 'Data Science Intern',
      company: 'FPT Software, Vietnam',
      duration: 'July 2023 - August 2023',
      description:
        'Created a ground truth database for human pose detection with 10,000 labeled images, achieving 88% model accuracy in real-time applications.',
    },
  ];

  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [
              ...new Set([...prev, entry.target.id]),
            ]);
          } else {
            setVisibleSections((prev) =>
              prev.filter((id) => id !== entry.target.id)
            );
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.timeline-item').forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative" id="about">
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
              About Me
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Hi, I'm Phong Cao
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              A passionate Artificial Intelligence and Computer Science student
              specializing in AI solutions, Machine Learning, and Full-Stack
              Development.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  My Journey
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  As a graduate student at Worcester Polytechnic Institute, I
                  have developed expertise in cutting-edge fields like Machine
                  Learning, Deep Learning, and Full-Stack Development. My
                  journey includes internships at top organizations,
                  contributing to projects in AI-powered research tools, image
                  clustering, and cancer detection systems.
                </p>
              </div>
              <div className="border border-red-200 rounded-lg md:p-7 py-7 shadow-lg shadow-red-300 overflow-y-auto max-h-[400px] hide-scrollbar scroll-smooth">
                <h3 className="text-2xl font-semibold text-red-600">
                  Experience Timeline
                </h3>
                <div className="mt-6 space-y-8">
                  {experienceTimeline.map((exp, index) => (
                    <div
                      key={index}
                      id={`timeline-${index}`}
                      className={`timeline-item relative pl-4 border-l border-gray-300 opacity-0 transition-opacity duration-700 ${
                        visibleSections.includes(`timeline-${index}`)
                          ? 'opacity-100'
                          : ''
                      }`}
                    >
                      <div className="absolute -left-2.5 w-5 h-5 bg-red-500 rounded-full"></div>
                      <h4 className="text-lg font-bold text-gray-800">
                        {exp.role}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {exp.company} | {exp.duration}
                      </p>
                      <p className="text-gray-700 mt-2">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900">
              More About Me
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Beyond coding, I enjoy exploring new technologies and helping
              others through teaching. I have worked on a range of projects
              including cancer detection systems and AI research synthesis
              tools, showcasing my passion for impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
