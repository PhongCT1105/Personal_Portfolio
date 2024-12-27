import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

interface ProjectTrackingChartProps {
  limit?: number; // Optional prop to limit the number of projects
}

const ProjectTrackingChart: React.FC<ProjectTrackingChartProps> = ({
  limit,
}) => {
  const [projects, setProjects] = useState<string[]>([]);
  const [interactions, setInteractions] = useState<number[]>([]);

  // Fetch data from Firestore
  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'projectTracking'));
        const projectData: { name: string; interactions: number }[] = [];

        querySnapshot.forEach((doc) => {
          projectData.push({
            name: doc.id, // Document ID is the project name
            interactions: doc.data().interactions || 0, // Default to 0 if undefined
          });
        });

        // Sort by interactions and limit the results
        const sortedProjects = projectData
          .sort((a, b) => b.interactions - a.interactions)
          .slice(0, limit || projectData.length);

        setProjects(sortedProjects.map((p) => p.name));
        setInteractions(sortedProjects.map((p) => p.interactions));
      } catch (error) {
        console.error('Error fetching project tracking data:', error);
      }
    };

    fetchProjectData();
  }, [limit]);

  // Prepare chart data
  const data = {
    labels: projects,
    datasets: [
      {
        data: interactions,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ], // Colors for each section
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Top Projects',
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default ProjectTrackingChart;
