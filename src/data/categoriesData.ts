import Portfolio from '../assets/Portfolio.png';
import SpicyBites from '../assets/SpicyBites.png';
import Youtube from '../assets/Youtube.png';
import SyntheSearch from '../assets/synthesearch.png';
import CancerBanner from '../assets/Projects/Cancer_Detection/CancerBanner.png';

export interface Project {
  banner: string;
  images: string[];
  title: string;
  desc: string;
  method: string;
  live: string;
  github: string;
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
        desc: 'A machine learning system leveraging gene sequence data and microarray analysis for cancer prediction, type and subtype classification, and important gene identification.',
        images: [SpicyBites, Youtube],
        method: 'Supervised Classification, Feature Selection, Clustering',
        live: 'https://genes2cancer.streamlit.app/',
        github: 'https://github.com/PhongCT1105/Cancer_Detector.git',
      },
      {
        banner: SpicyBites,
        title: 'Cancer detection with Gene Expression',
        desc: 'A machine learning model that predicts user behavior.',
        images: [SyntheSearch, Portfolio],
        method: 'Machine Learning',
        live: '#',
        github: '#',
      },
      {
        banner: SyntheSearch,
        title: 'S&P 500 stock prediction',
        desc: 'An NLP-driven chatbot for customer service automation.',
        images: [Youtube, SpicyBites],
        method: 'Machine Learning',
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

        title: 'AI-powered research synthesis tool',
        desc: 'An advanced AI project that leverages deep learning models.',
        images: [Portfolio, SpicyBites],
        method: 'Machine Learning',
        live: '#',
        github: '#',
      },
    ],
  },
  {
    name: 'Computer Vision',
    projects: [
      {
        banner: SyntheSearch,

        title: 'Urban Traffic Monitoring System',
        desc: 'An advanced AI project that leverages deep learning models.',
        images: [Portfolio, SpicyBites],
        method: 'Machine Learning',
        live: '#',
        github: '#',
      },
      {
        banner: SyntheSearch,

        title: 'Clinical decision support system using CNN',
        desc: 'A machine learning model that predicts user behavior.',
        images: [SpicyBites, Youtube],
        method: 'Machine Learning',
        live: '#',
        github: '#',
      },
    ],
  },
  {
    name: 'Web Development',
    projects: [
      {
        banner: SyntheSearch,

        title: 'Portfolio Website',
        desc: 'A personal portfolio website showcasing web dev skills.',
        images: [Portfolio, SpicyBites],
        method: 'Machine Learning',
        live: 'https://rohitsingh93300-portfolio.vercel.app/',
        github: 'https://github.com/rohitsingh93300/portfolio',
      },
      {
        banner: SyntheSearch,

        title: 'Web application for Mass General Brigham Hospital',
        desc: 'A responsive restaurant website with integrated ordering system.',
        images: [SpicyBites, Youtube],
        method: 'Machine Learning',
        live: 'https://spicybites.netlify.app/',
        github: 'https://github.com/rohitsingh93300/YtSpicyBites',
      },
      {
        banner: SyntheSearch,

        title: 'TPC-H Benchmark analyzed research',
        desc: 'A responsive restaurant website with integrated ordering system.',
        images: [SpicyBites, Portfolio],
        method: 'Machine Learning',
        live: 'https://spicybites.netlify.app/',
        github: 'https://github.com/rohitsingh93300/YtSpicyBites',
      },
    ],
  },
];
