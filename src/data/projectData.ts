import SyntheSearchBanner from '../assets/Projects/SyntheSearch/SyntheSearchBanner.png';
import MassBanner from '../assets/Projects/Brigham_Hospital/MassBanner.jpg';
import CancerBanner from '../assets/Projects/Cancer_Detection/CancerBanner.jpg';
import TrafficBanner from '../assets/Projects/Traffic/TrafficBanner.png';
import StockBanner from '../assets/Projects/Stock_Pred/StockBanner.png';
import PortfolioBanner from '../assets/Projects/Portfolio/PortfolioBanner.png';
import AnalyticBanner from '../assets/Projects/Analytic/AnalyticBanner.png';
import DatabaseBanner from '../assets/Projects/Database/DatabaseBanner.png';
import VehicleBanner from '../assets/Projects/Vehicle/VehicleBanner.jpg';

// Additional images
import SyntheSearch1 from '../assets/Projects/SyntheSearch/SyntheSearch1.png';
import SyntheSearch2 from '../assets/Projects/SyntheSearch/SyntheSearch2.png';
import SyntheSearch3 from '../assets/Projects/SyntheSearch/SyntheSearch3.png';

import Mass1 from '../assets/Projects/Brigham_Hospital/Mass1.png';
import Mass2 from '../assets/Projects/Brigham_Hospital/Mass2.png';
import Mass3 from '../assets/Projects/Brigham_Hospital/Mass3.png';
import Mass4 from '../assets/Projects/Brigham_Hospital/Mass4.png';
import Mass5 from '../assets/Projects/Brigham_Hospital/Mass5.png';
import Mass6 from '../assets/Projects/Brigham_Hospital/Mass6.png';

import Cancer1 from '../assets/Projects/Cancer_Detection/Cancer1.png';
import Cancer2 from '../assets/Projects/Cancer_Detection/Cancer2.png';
import Cancer3 from '../assets/Projects/Cancer_Detection/Cancer3.png';
import Cancer4 from '../assets/Projects/Cancer_Detection/Cancer4.png';
import Cancer5 from '../assets/Projects/Cancer_Detection/Cancer5.png';
import Cancer6 from '../assets/Projects/Cancer_Detection/Cancer6.png';

import Traffic1 from '../assets/Projects/Traffic/Traffic1.png';
import Traffic2 from '../assets/Projects/Traffic/Traffic2.png';

import Stock1 from '../assets/Projects/Stock_Pred/Stock1.png';
import Stock2 from '../assets/Projects/Stock_Pred/Stock2.png';
import Stock3 from '../assets/Projects/Stock_Pred/Stock3.png';

import Portfolio2 from '../assets/Projects/Portfolio/Portfolio2.png';
import Portfolio3 from '../assets/Projects/Portfolio/Portfolio3.png';

import Analytic1 from '../assets/Projects/Analytic/Analytic1.png';
import Analytic2 from '../assets/Projects/Analytic/Analytic2.png';
import Analytic3 from '../assets/Projects/Analytic/Analytic3.png';

import Database1 from '../assets/Projects/Database/Database1.png';
import Database2 from '../assets/Projects/Database/Database2.png';

import Vehicle1 from '../assets/Projects/Vehicle/Vehicle1.png';
import Vehicle2 from '../assets/Projects/Vehicle/Vehicle2.png';

export type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  link: string;
  liveDemo?: string; // Optional live demo link
  role: string;
  duration: string;
  images: string[];
  technologies: string[]; // New field for technologies used
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'SyntheSearch: AI-powered research assistance',
    description:
      'A web application that integrates GPT, LangChain, and LanceDB to retrieve, rank, and synthesize research papers.',
    category: 'LLM',
    imageUrl: SyntheSearchBanner,
    link: 'https://github.com/PhongCT1105/SyntheSearch',
    liveDemo: 'https://youtu.be/YWhtdnfZRRo?si=ZMGWDVQTBExCD2Ea',
    role: 'Team Lead / LLMOps Dev',
    duration: 'Nov 2024 - Present',
    images: [SyntheSearch1, SyntheSearch2, SyntheSearch3],
    technologies: [
      'LangChain',
      'LanceDB',
      'GPT-4',
      'React',
      'TypeScript',
      'TailwindCSS',
    ],
  },
  {
    id: 2,
    title: 'Web application for Mass General Brigham Hospital',
    description:
      'Comprehensive hospital kiosks enabling users to navigate, request services, and allowing admins to manage schedules and analyze service insights efficiently.',
    category: 'Web Development',
    imageUrl: MassBanner,
    link: 'https://github.com/PhongCT1105/Web-application-for-Mass-General-Brigham-Hospital.git',
    role: 'Lead Software Engineer',
    duration: 'Mar 2024 - May 2024',
    images: [Mass1, Mass2, Mass3, Mass4, Mass5, Mass6],
    technologies: [
      'AWS EC2 & RDS',
      'React',
      'TypeScript',
      'Express',
      'Docker',
      'Postgres',
      'Prisma ORM',
      'Keras',
      'TailwindCSS',
      'Agile Methodology',
    ],
  },
  {
    id: 3,
    title: 'Machine Learning System for Cancer Detection',
    description:
      'Predicts cancer types, identifies key genes, and supports personalized treatment with advanced feature selection and machine learning models.',
    category: 'Machine Learning',
    imageUrl: CancerBanner,
    link: 'https://github.com/PhongCT1105/Cancer_Detector',
    liveDemo: 'https://genes2cancer.streamlit.app/',
    role: 'Machine Learning Research / Web Developer',
    duration: 'Sep 2024 - Dec 2024',
    images: [Cancer1, Cancer2, Cancer3, Cancer4, Cancer5, Cancer6],
    technologies: [
      'Scikit-learn',
      'Supervised',
      'Unsupervised',
      'Ensemble',
      'Bagging',
      'ANOVA',
      'Mutual Information',
      'Streamlit',
    ],
  },
  {
    id: 4,
    title: 'AI Traffic Management System',
    description:
      'Developed an AI-driven solution for real-time vehicle detection, classification, and speed calculation to enhance urban traffic management.',
    category: 'Computer Vision',
    imageUrl: TrafficBanner,
    link: 'https://github.com/PhongCT1105/AI-traffic-management',
    liveDemo: 'https://sparkly-rugelach-ff7f15.netlify.app/',
    role: 'AI Developer / Web Developer',
    duration: 'Jun 2022 - Aug 2022',
    images: [Traffic1, Traffic2],
    technologies: ['Python', 'YOLOv5', 'OpenCV', 'HTML', 'CSS', 'JS'],
  },
  {
    id: 5,
    title: 'S&P 500 Stock Prediction',
    description:
      'Utilized ARIMA and LSTM models to predict S&P 500 stock closing prices with a focus on accuracy and trend analysis.',
    category: 'Machine Learning',
    imageUrl: StockBanner,
    link: 'https://github.com/PhongCT1105/S-P_500_Stock_Prediction.git',
    liveDemo: 'https://stockpredictsp500.streamlit.app/',
    role: 'Machine Learning / Web Developer',
    duration: 'Sep 2024 - Dec 2024',
    images: [Stock1, Stock2, Stock3],
    technologies: ['LSTM', 'ARIMA', 'Scikit-learn', 'Streamlit'],
  },
  {
    id: 6,
    title: 'Personal Portfolio',
    description: 'It is this website 🔁',
    category: 'Web Development',
    imageUrl: PortfolioBanner,
    link: 'https://github.com/PhongCT1105/Personal_Portfolio.git',
    role: 'FullStack Developer',
    duration: 'Dec 2024',
    images: [Portfolio2, Portfolio3],
    technologies: ['Firebase', 'Docker', 'React', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: 7,
    title: 'MovieLens Data Analysis for Streaming Insights',
    description:
      'Analyzed the MovieLens 1M dataset to identify target demographics and genres for optimizing streaming platform success.',
    category: 'Machine Learning',
    imageUrl: AnalyticBanner,
    link: 'https://github.com/PhongCT1105/MovieLen_Analytic.git',
    role: 'Data Analyst',
    duration: 'Mar 2023 - Apr 2023',
    images: [Analytic1, Analytic2, Analytic3],
    technologies: ['Python', 'Matplotlib', 'Seaborn'],
  },
  {
    id: 8,
    title: 'TPC-H Benchmark Analysis',
    description:
      'Analyzed and optimized TPC-H benchmark queries, focusing on performance evaluation, relational algebra.',
    category: 'Web Development',
    imageUrl: DatabaseBanner,
    link: 'https://github.com/PhongCT1105/TPC_H_BenchMark_Analysis.git',
    role: 'Backend Developer',
    duration: 'Mar 2024 - May 2024',
    images: [Database1, Database2],
    technologies: ['SQLite'],
  },
  {
    id: 9,
    title: 'Predictive Modeling for Vehicle Pricing Optimization',
    description:
      'Built models to predict vehicle prices using car features and market trends for profitability.',
    category: 'Web Development',
    imageUrl: VehicleBanner,
    link: 'https://github.com/PhongCT1105/Vehicle_Pricing_Estimate.git',
    role: 'Machine Learning Developer',
    duration: 'Apr 2024 - May 2024',
    images: [Vehicle1, Vehicle2],
    technologies: ['Scikit-learn', 'Matplotlib', 'Seaborn'],
  },
];

export const categories = [
  'All',
  'Machine Learning',
  'LLM',
  'Computer Vision',
  'Web Development',
];
