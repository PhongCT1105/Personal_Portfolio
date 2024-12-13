import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython,
  faJs,
  faReact,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';

const skillsData = {
  languages: [
    { name: 'Python', icon: faPython },
    { name: 'JavaScript', icon: faJs },
  ],
  frameworksTools: [
    { name: 'React', icon: faReact },
    { name: 'NodeJS', icon: faNodeJs },
  ],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative bg-gray-100 py-12 z-10" // Ensures this section appears above the Particle component
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-red-600">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="p-4 border rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 capitalize">
                {category.replace(/([A-Z])/g, ' $1')}
              </h3>
              <div className="flex flex-wrap gap-4 mt-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 border px-3 py-2 rounded-md shadow-md"
                  >
                    <FontAwesomeIcon
                      icon={skill.icon}
                      className="text-red-500 w-6 h-6"
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
