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
import {
  faDatabase,
  faCloud,
  faDiagramProject,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

const skillsData = {
  languages: [
    { name: 'Python', icon: faPython },
    { name: 'JavaScript', icon: faJs },
    { name: 'HTML', icon: faHtml5 },
    { name: 'CSS', icon: faCss3Alt },
    { name: 'Java', icon: faJava },
  ],
  frameworksTools: [
    { name: 'React', icon: faReact },
    { name: 'Node.js', icon: faNode },
    { name: 'SQL', icon: faDatabase },
    { name: 'Cloud Services', icon: faCloud },
  ],
  softSkills: [
    { name: 'Agile Methodology', icon: faDiagramProject },
    { name: 'UML Diagrams', icon: faDiagramProject },
    { name: 'ERD (Entity Relationship Diagram)', icon: faDiagramProject },
    { name: 'Subsystem Design', icon: faDiagramProject },
    { name: 'Leadership', icon: faUsers },
  ],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative bg-gray-200 py-12 z-10" // Updated background color
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-red-600">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div
              key={category}
              className="p-6 border rounded-lg shadow-lg bg-white"
            >
              <h3 className="text-2xl font-semibold text-gray-800 capitalize text-center mb-4">
                {category.replace(/([A-Z])/g, ' $1')}
              </h3>
              <div className="grid grid-cols-2 gap-6 justify-center">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center text-center border px-4 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-50"
                  >
                    <FontAwesomeIcon
                      icon={skill.icon}
                      className="text-red-500 w-8 h-8 mb-2"
                    />
                    <span className="text-gray-700 font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
