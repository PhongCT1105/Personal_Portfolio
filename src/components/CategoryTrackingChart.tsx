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

const CategoryTrackingChart: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [interactions, setInteractions] = useState<number[]>([]);

  // Fetch data from Firestore
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'categoryTracking'));
        const categoryNames: string[] = [];
        const categoryInteractions: number[] = [];

        querySnapshot.forEach((doc) => {
          categoryNames.push(doc.id); // Document ID is the category name
          categoryInteractions.push(doc.data().interactions || 0); // Default to 0 if undefined
        });

        setCategories(categoryNames);
        setInteractions(categoryInteractions);
      } catch (error) {
        console.error('Error fetching category tracking data:', error);
      }
    };

    fetchCategoryData();
  }, []);

  // Prepare chart data
  const data = {
    labels: categories,
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
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Category Interactions',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Categories',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Interactions',
        },
      },
    },
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">
        Category Interaction Tracking
      </h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default CategoryTrackingChart;
