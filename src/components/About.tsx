import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

  const controls = useAnimation();
  const { ref: containerRef, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.6, // Wait for each animation to complete before starting the next
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.25, // Slow and smooth animation
        ease: 'easeInOut',
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: '#fef2f2', // Matches hover effect color
      color: '#dc2626', // Text color on hover
      boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
      transition: {
        duration: 0.3,
      },
    },
  };

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
              <div>
                <h3 className="text-2xl font-semibold text-red-600">
                  Experience Timeline
                </h3>
                <motion.div
                  ref={containerRef}
                  initial="hidden"
                  animate={controls}
                  variants={containerVariants}
                  className="mt-6 space-y-8"
                >
                  {experienceTimeline.map((exp, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover="hover"
                      className="timeline-item relative pl-4 border-l border-gray-300 px-3 py-2 rounded-md bg-white"
                    >
                      <div className="absolute -left-2.5 w-5 h-5 rounded-full bg-red-500"></div>
                      <h4 className="text-lg font-bold text-gray-800">
                        {exp.role}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {exp.company} | {exp.duration}
                      </p>
                      <p className="text-gray-700 mt-2">{exp.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
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
