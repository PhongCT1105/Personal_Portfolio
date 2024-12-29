// Import images
import FPTImage from '../assets/FPT.png';
import HUstImage from '../assets/Hust.png';
import VNUImage from '../assets/VNU.png';

const experiencedata = [
  {
    role: 'Machine Learning Intern (MLOps)',
    company: 'FPT Software, Vietnam',
    duration: 'June 2024 - August 2024',
    description: [
      'Built an AI-powered wedding album solution with Azure AI Vision, Cosmos DB, Blob Storage.',
      'Designed a pipeline for 5000 images and fine-tuned a deep learning clustering model.',
      'Achieved 15% accuracy improvement and $27,000 revenue projection.',
    ],
    image: FPTImage,
  },
  {
    role: 'Data Science Intern',
    company: 'FPT Software, Vietnam',
    duration: 'July 2023 - August 2023',
    description: [
      'Created a ground truth database for human pose detection with 11 poses and 10,000 images.',
      'Improved model accuracy to 88% using Python frameworks like OpenCV and Pandas.',
      'Enabled real-time applications for human pose detection.',
    ],
    image: FPTImage,
  },
  {
    role: 'Artificial Intelligence Summer Intern',
    company: 'Vietnam National University, Vietnam',
    duration: 'June 2022 - August 2022',
    description: [
      'Built a clinical decision support system for pneumonia and pulmonary edema detection using GoogLeNet CNNs.',
      'Earned a Gold Medal at INOVA Croatia 2022 for outstanding performance.',
    ],
    image: VNUImage,
  },
  {
    role: 'Summer Online Research Intern',
    company: 'Vietnam National University, Vietnam',
    duration: 'May 2021 - August 2021',
    description: [
      'Collaborated on research involving CNN models for image recognition in computer vision',
      'Researched AI materials, summarized and translated insights from 8 studies to support',
    ],
    image: HUstImage,
  },
];

export default experiencedata;
