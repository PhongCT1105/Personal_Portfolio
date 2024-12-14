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
  frameworksAndTools: [
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

export default skillsData;
