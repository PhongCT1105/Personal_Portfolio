import Portfolio from '../assets/Portfolio.png';
import SpicyBites from '../assets/SpicyBites.png';
import Youtube from '../assets/Youtube.png';
import SyntheSearch from '../assets/synthesearch.png';
import CancerBanner from '../assets/Projects/Cancer_Detection/CancerBanner.png';
import CancerFlowChart from '../assets/Projects/Cancer_Detection/CancerFlowChart.png';

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
        title: 'Cancer Detection with Gene Sequence',
        desc: 'A machine learning system for cancer detection, type classification, and key gene identification using DNA microarray data',
        modalDesc:
          'Our project adopts a white-box approach to predict cancer types and identify key genes using genetic sequencing data. With a high-dimensional dataset containing over 50,000 features, we employed advanced feature selection techniques to reduce redundancy and improve model performance. The final integrated models achieved 90% accuracy while maintaining a recall score of 1.0 across all cancer types, ensuring no cancer cases were missed. This approach highlights the effectiveness of machine learning for handling complex, high-dimensional data in cancer diagnosis.',
        images: [CancerFlowChart, Youtube, Youtube],
        keyFeatures: [
          'White-box approach ensuring interpretability and reliable predictions',
          'Achieved 90% accuracy and 1.0 recall across all cancer types, minimizing false negatives',
          'Handled high-dimensional data with over 50,000 features using advanced feature selection methods (Variance Threshold, ANOVA, Mutual Information)',
          'Revealed top predictive genes for each cancer type, highlighting potential biomarkers for early detection and treatment planning',
        ],
        technologies: [
          'Python',
          'Scikit-Learn',
          'Pandas',
          'Matplotlib',
          'Streamlit',
        ],
        duration: 'Sep 2024 - Dec 2024',
        role: 'ML Developer & Team Lead: Designed, optimized, programmed, and evaluated the machine learning pipeline.',
        demoVideo: '',
        method:
          'Supervised Learning, Esemble Method, Feature Selection, Clustering, Classification',
        live: 'https://genes2cancer.streamlit.app/',
        github: 'https://github.com/PhongCT1105/Cancer_Detector.git',
      },
      {
        banner: CancerBanner,
        title: 'Gene Expression Clustering Analysis',
        desc: 'Identifying key gene patterns through clustering algorithms',
        modalDesc:
          'Implemented unsupervised learning techniques to cluster high-dimensional gene expression data. Leveraged K-Means with PCA for dimensionality reduction, visualized genetic similarities, and discovered key gene clusters relevant to specific cancer types. Clustering performance was evaluated using Adjusted Rand Index and Silhouette Score.',
        images: [CancerFlowChart, CancerBanner],
        keyFeatures: [
          'K-Means clustering with PCA for dimensionality reduction',
          'Visualization of gene clusters and cancer relationships',
          'Evaluation using ARI and Silhouette Score metrics',
        ],
        technologies: ['Python', 'Seaborn', 'NumPy', 'Pandas', 'Matplotlib'],
        duration: 'Apr 2023 - Jun 2023',
        role: 'Data Analyst: Implemented clustering models and performed evaluation.',
        demoVideo: '',
        method: 'Unsupervised Learning, Dimensionality Reduction, Clustering',
        live: '#',
        github: '#',
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
