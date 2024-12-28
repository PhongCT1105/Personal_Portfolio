import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { getDurationTrackingStats } from '../utils/firebaseUtils';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Define chart data type
type DoughnutChartData = ChartData<'doughnut', number[], string>;

const DurationTrackingDoughnutChart: React.FC = () => {
  const [chartData, setChartData] = useState<DoughnutChartData | null>(null);

  useEffect(() => {
    (async () => {
      const stats = await getDurationTrackingStats();
      const labels = stats.map((item) => item.section); // X-axis labels (sections)
      const data = stats.map((item) => item.totalTime); // Y-axis data (time)

      setChartData({
        labels,
        datasets: [
          {
            label: 'Total Time Spent (seconds)',
            data,
            backgroundColor: [
              'rgba(75, 192, 192, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
            ], // Colors for each section
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ], // Border colors
            borderWidth: 1,
          },
        ],
      });
    })();
  }, []);

  // Define chart options type
  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Time Spent in Each Section',
      },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {chartData ? (
        <Doughnut data={chartData} options={options} />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default DurationTrackingDoughnutChart;