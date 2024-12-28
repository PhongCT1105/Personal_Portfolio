import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);

interface ProjectTrackingChartProps {
  limit?: number; // Optional prop to limit the number of projects
}

const ProjectTrackingChart: React.FC<ProjectTrackingChartProps> = ({
  limit = 5,
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

        // Sort by interactions and limit the results to the top 5
        const sortedProjects = projectData
          .sort((a, b) => b.interactions - a.interactions)
          .slice(0, limit);

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
        label: 'Interactions',
        data: interactions,
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bar color
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y' as const, // Use 'y' for horizontal bar chart
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Top 5 Projects with Most Visitors' Interactions",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Interactions',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Projects',
        },
        ticks: {
          stepSize: 1, // Ensure all numbers are displayed
          callback: function (_: string | number, index: number) {
            return `${index + 1}`; // Start numbering from 1
          },
        },
      },
    },
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <Bar data={data} options={options} />
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-2">Top 5 Projects:</h3>
        <ul className="list-decimal pl-8 space-y-2 bg-gray-100 p-4 rounded-lg shadow-md">
          {projects.map((project, index) => (
            <li
              key={index}
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              {project}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectTrackingChart;
