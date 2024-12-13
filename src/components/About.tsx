import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython,
  faJs,
  faReact,
  faNode,
  faHtml5,
  faCss3Alt,
  faJava,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const About = () => {
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
              <div className="border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300">
                <h3 className="text-2xl font-semibold text-red-600">
                  Skills & Expertise
                </h3>
                <div className="flex items-center justify-center flex-wrap gap-3">
                  <div className="border border-red-300 flex items-center gap-2 w-max px-3 py-2 rounded-lg shadow-md shadow-red-300">
                    <FontAwesomeIcon
                      icon={faPython}
                      className="text-blue-500 w-8 h-8"
                    />
                    <span className="font-semibold">Python</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-2 w-max px-3 py-2 rounded-lg shadow-md shadow-red-300">
                    <FontAwesomeIcon
                      icon={faJs}
                      className="text-yellow-500 w-8 h-8"
                    />
                    <span className="font-semibold">JavaScript</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-2 w-max px-3 py-2 rounded-lg shadow-md shadow-red-300">
                    <FontAwesomeIcon
                      icon={faHtml5}
                      className="text-orange-500 w-8 h-8"
                    />
                    <span className="font-semibold">HTML</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-2 w-max px-3 py-2 rounded-lg shadow-md shadow-red-300">
                    <FontAwesomeIcon
                      icon={faCss3Alt}
                      className="text-blue-600 w-8 h-8"
                    />
                    <span className="font-semibold">CSS</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-2 w-max px-3 py-2 rounded-lg shadow-md shadow-red-300">
                    <FontAwesomeIcon
                      icon={faReact}
                      className="text-cyan-500 w-8 h-8"
                    />
                    <span className="font-semibold">React.js</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-2 w-max px-3 py-2 rounded-lg shadow-md shadow-red-300">
                    <FontAwesomeIcon
                      icon={faNode}
                      className="text-green-500 w-8 h-8"
                    />
                    <span className="font-semibold">Node.js</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-2 w-max px-3 py-2 rounded-lg shadow-md shadow-red-300">
                    <FontAwesomeIcon
                      icon={faDatabase}
                      className="text-red-500 w-8 h-8"
                    />
                    <span className="font-semibold">SQL</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-2 w-max px-3 py-2 rounded-lg shadow-md shadow-red-300">
                    <FontAwesomeIcon
                      icon={faJava}
                      className="text-red-700 w-8 h-8"
                    />
                    <span className="font-semibold">Java</span>
                  </div>
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
