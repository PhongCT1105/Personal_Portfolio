import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  ChartOptions,
} from 'chart.js';

import 'chartjs-adapter-date-fns';
import { getAllVisits } from '../utils/firebaseUtils'; // Adjust path if needed

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

const VisitorLineChart: React.FC = () => {
  const [visits, setVisits] = useState<
    { id: string; timestamp: string; count: number }[]
  >([]);

  // Fetch visits from Firestore
  useEffect(() => {
    (async () => {
      const data = await getAllVisits();
      setVisits(data);
    })();
  }, []);

  // Prepare chart data
  const chartData = {
    labels: visits.map((visit) => visit.timestamp), // X-axis labels (timestamps)
    datasets: [
      {
        label: 'Visitors Over Time',
        data: visits.map((visit) => visit.count), // Y-axis data (visitor counts)
        fill: false,
        borderColor: 'rgba(255, 0, 0, 1)', // Red line
        tension: 0.1, // Smooth line
      },
    ],
  };

  // Chart.js options
  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false, // Allow flexible resizing
    plugins: {
      title: {
        display: false,
        text: 'Total Visitors Over Time',
      },
    },
    scales: {
      x: {
        type: 'time', // Time scale
        time: {
          unit: 'day', // Unit for X-axis
          displayFormats: {
            day: 'MMM d', // Format for X-axis labels
          },
        },
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Visitor Count',
        },
      },
    },
  };

  return (
    <div className="w-full h-64 sm:h-96">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default VisitorLineChart;
