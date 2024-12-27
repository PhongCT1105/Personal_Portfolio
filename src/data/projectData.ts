// projectData.ts

export type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  link: string;
  role: string;
  duration: string;
  images: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Linear Regression Analysis',
    description:
      'Explored predictive modeling with linear regression techniques.',
    category: 'Machine Learning',
    imageUrl: 'https://via.placeholder.com/400',
    link: 'https://example.com/linear-regression',
    role: 'Data Analyst',
    duration: 'Jan 2022 - Mar 2022',
    images: [
      'https://via.placeholder.com/400',
      'https://via.placeholder.com/400',
    ],
  },
  {
    id: 2,
    title: 'Decision Tree Classifier',
    description: 'Developed a decision tree model to classify financial data.',
    category: 'Machine Learning',
    imageUrl: 'https://via.placeholder.com/400',
    link: 'https://example.com/decision-tree',
    role: 'Machine Learning Engineer',
    duration: 'Apr 2022 - Jun 2022',
    images: [
      'https://via.placeholder.com/400',
      'https://via.placeholder.com/400',
    ],
  },
  {
    id: 3,
    title: 'Clustering for Market Segmentation',
    description:
      'Implemented clustering techniques to identify market segments.',
    category: 'Machine Learning',
    imageUrl: 'https://via.placeholder.com/400',
    link: 'https://example.com/clustering',
    role: 'Data Scientist',
    duration: 'Jul 2022 - Sep 2022',
    images: [
      'https://via.placeholder.com/400',
      'https://via.placeholder.com/400',
    ],
  },
  {
    id: 4,
    title: 'GPT-4 Text Generator',
    description: 'Built a text generator application using GPT-4.',
    category: 'LLM',
    imageUrl: 'https://via.placeholder.com/400',
    link: 'https://example.com/gpt4',
    role: 'AI Developer',
    duration: 'Oct 2022 - Dec 2022',
    images: [
      'https://via.placeholder.com/400',
      'https://via.placeholder.com/400',
    ],
  },
  {
    id: 5,
    title: 'Object Detection System',
    description: 'Implemented an object detection system using YOLO.',
    category: 'Computer Vision',
    imageUrl: 'https://via.placeholder.com/400',
    link: 'https://example.com/object-detection',
    role: 'Computer Vision Engineer',
    duration: 'Jan 2023 - Mar 2023',
    images: [
      'https://via.placeholder.com/400',
      'https://via.placeholder.com/400',
    ],
  },
  {
    id: 6,
    title: 'E-Commerce Website',
    description: 'Designed a React-based e-commerce platform.',
    category: 'Web Development',
    imageUrl: 'https://via.placeholder.com/400',
    link: 'https://example.com/e-commerce',
    role: 'Frontend Developer',
    duration: 'Apr 2023 - Jun 2023',
    images: [
      'https://via.placeholder.com/400',
      'https://via.placeholder.com/400',
    ],
  },
  {
    id: 7,
    title: 'Portfolio Website',
    description: 'Created a personal portfolio site using Next.js.',
    category: 'Web Development',
    imageUrl: 'https://via.placeholder.com/400',
    link: 'https://example.com/portfolio',
    role: 'Full Stack Developer',
    duration: 'Jul 2023 - Sep 2023',
    images: [
      'https://via.placeholder.com/400',
      'https://via.placeholder.com/400',
    ],
  },
  {
    id: 8,
    title: 'Blog Platform',
    description: 'Developed a blogging platform with user authentication.',
    category: 'Web Development',
    imageUrl: 'https://via.placeholder.com/400',
    link: 'https://example.com/blog',
    role: 'Backend Developer',
    duration: 'Oct 2023 - Dec 2023',
    images: [
      'https://via.placeholder.com/400',
      'https://via.placeholder.com/400',
    ],
  },
];

export const categories = [
  'All',
  'Machine Learning',
  'LLM',
  'Computer Vision',
  'Web Development',
];
