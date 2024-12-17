import Portfolio from '../assets/Portfolio.png';
import SpicyBites from '../assets/SpicyBites.png';
import Youtube from '../assets/Youtube.png';
import SyntheSearch from '../assets/synthesearch.png';
import CancerBanner from '../assets/Projects/Cancer_Detection/CancerBanner.png';

export interface Project {
  banner: string; // Banner image
  images: string[]; // Gallery images
  title: string; // Project title
  desc: string; // Short description for the card
  modalDesc: string; // Detailed description for the modal
  keyFeatures: string[]; // Key features of the project
  technologies: string[]; // Technologies used
  duration: string; // Project timeline/duration
  role: string; // Role or contribution
  demoVideo: string; // Demo video link
  method: string; // Methodology or approach
  live: string; // Live project link
  github: string; // GitHub repository link
}

export interface Category {
  name: string;
  projects: Project[];
}

export const categories: Category[] = [
  {
    name: 'Machine Learning',
    projects: [
      {
        banner: CancerBanner,
        title: 'Cancer Detection with Gene Expression',
        desc: 'Using gene expression data for cancer prediction.',
        modalDesc:
          'This project involves building a machine learning system that uses gene sequence and microarray analysis to predict cancer types, subtypes, and identify critical genes.',
        images: [SpicyBites, Youtube],
        keyFeatures: [
          'Gene expression classification',
          'Subtype prediction accuracy of 90%',
          'Feature selection using clustering algorithms',
        ],
        technologies: ['Python', 'Scikit-Learn', 'Pandas', 'Matplotlib'],
        duration: 'Jan 2023 - Mar 2023',
        role: 'ML Developer: Built and optimized the model pipeline.',
        demoVideo: '',
        method: 'Supervised Classification, Feature Selection, Clustering',
        live: 'https://genes2cancer.streamlit.app/',
        github: 'https://github.com/PhongCT1105/Cancer_Detector.git',
      },
      {
        banner: SpicyBites,
        title: 'Gene Expression Clustering Analysis',
        desc: 'Analyzing gene data to identify key patterns.',
        modalDesc:
          'Developed a clustering algorithm to analyze large-scale gene datasets. Identified gene clusters relevant to specific cancer types.',
        images: [SyntheSearch, Portfolio],
        keyFeatures: ['K-Means clustering', 'Data visualization'],
        technologies: ['Python', 'Seaborn', 'NumPy', 'Pandas'],
        duration: 'Apr 2023 - Jun 2023',
        role: 'Data Analyst: Implemented clustering algorithms.',
        demoVideo: 'https://www.youtube.com/embed/example2',
        method: 'Unsupervised Learning, Clustering',
        live: '#',
        github: '#',
      },
    ],
  },
  {
    name: 'LLM / GenAI',
    projects: [
      {
        banner: SyntheSearch,
        title: 'AI-powered Research Synthesis Tool',
        desc: 'AI-driven synthesis of research documents.',
        modalDesc:
          'Built a research synthesis tool using LLMs to analyze, summarize, and synthesize relevant research papers. Optimized search queries to identify related documents.',
        images: [Portfolio, SpicyBites],
        keyFeatures: [
          'AI-assisted literature synthesis',
          'Supports large-scale datasets',
          'Customizable search parameters',
        ],
        technologies: ['Python', 'GPT-4 API', 'LangChain', 'Streamlit'],
        duration: 'May 2023 - July 2023',
        role: 'Lead Engineer: Integrated GPT-4 APIs.',
        demoVideo: 'https://www.youtube.com/embed/synthesearch-demo',
        method: 'NLP Techniques, Semantic Analysis',
        live: '#',
        github: '#',
      },
    ],
  },
  {
    name: 'Computer Vision',
    projects: [
      {
        banner: CancerBanner,
        title: 'Urban Traffic Monitoring System',
        desc: 'Real-time traffic analysis using computer vision.',
        modalDesc:
          'Designed a computer vision-based system for monitoring urban traffic. Implemented object detection models to identify vehicles, track traffic density, and suggest optimization measures.',
        images: [Portfolio, SpicyBites],
        keyFeatures: [
          'Real-time vehicle detection',
          'Traffic density analysis',
          'Scalable to large intersections',
        ],
        technologies: ['Python', 'OpenCV', 'YOLOv5', 'TensorFlow'],
        duration: 'Aug 2023 - Oct 2023',
        role: 'Vision Engineer: Trained and deployed YOLO models.',
        demoVideo: 'https://www.youtube.com/embed/traffic-demo',
        method: 'Object Detection, Deep Learning',
        live: '#',
        github: '#',
      },
    ],
  },
  {
    name: 'Web Development',
    projects: [
      {
        banner: Portfolio,
        title: 'Portfolio Website',
        desc: 'A personal portfolio showcasing my projects.',
        modalDesc:
          'Developed a responsive and modern portfolio website to showcase skills, projects, and achievements. Built with React, ensuring optimized performance and accessibility.',
        images: [Portfolio, SpicyBites],
        keyFeatures: [
          'Responsive design',
          'Dynamic content rendering',
          'Deployed on Vercel',
        ],
        technologies: ['React', 'TypeScript', 'Tailwind CSS'],
        duration: 'Nov 2023 - Dec 2023',
        role: 'Frontend Developer: Designed and implemented the UI.',
        demoVideo: '',
        method: 'Component-Based Development',
        live: 'https://rohitsingh93300-portfolio.vercel.app/',
        github: 'https://github.com/rohitsingh93300/portfolio',
      },
    ],
  },
];
