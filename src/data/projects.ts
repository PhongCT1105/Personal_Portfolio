export type Project = {
    id: number;
    title: string;
    description: string;
    category: "Machine Learning" | "LLM/GenAI" | "Computer Vision" | "Web Development";
    technologies: string[];
    imageUrl: string;
    link: string;
    role: string;
    duration: string;
    images: string[];
    github?: string;
    demoVideo?: string;
  };
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "Machine Learning Project",
      description: "A machine learning project using regression models.",
      category: "Machine Learning",
      technologies: ["Python", "Scikit-learn", "Pandas"],
      imageUrl: "https://via.placeholder.com/400",
      link: "https://example.com/ml-project",
      role: "Data Scientist",
      duration: "Jan 2022 - June 2022",
      images: [
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
      ],
      github: "https://github.com/example/ml-project",
      demoVideo: "https://www.youtube.com/watch?v=example",
    },
    {
      id: 2,
      title: "GenAI App",
      description: "An app powered by GPT-4 and other LLM/GenAI tools.",
      category: "LLM/GenAI",
      technologies: ["Python", "OpenAI API", "FastAPI"],
      imageUrl: "https://via.placeholder.com/400",
      link: "https://example.com/genai-app",
      role: "AI Developer",
      duration: "July 2022 - Dec 2022",
      images: [
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
      ],
      github: "https://github.com/example/genai-app",
    },
  ];
  