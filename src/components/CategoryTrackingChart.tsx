import React, { useEffect, useState, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { motion, useAnimation } from 'framer-motion';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const CategoryTrackingChart: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [interactions, setInteractions] = useState<number[]>([]);
  const chartRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();

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

  // Intersection Observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the component is visible
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, [controls]);

  // Prepare chart data
  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Interactions',
        data: interactions,
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ], // Add more colors if needed
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
        display: false,
        text: 'Category Interactions',
      },
    },
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={chartRef}
      className="w-full max-w-3xl mx-auto p-4"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.h2
        className="text-2xl font-bold text-center mb-4"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        }}
      >
        Category Interaction Tracking
      </motion.h2>
      <Doughnut data={data} options={options} />
    </motion.div>
  );
};

export default CategoryTrackingChart;
