import React, { useEffect, useState, useMemo } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { db } from '../firebase';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Visualize = () => {
  const [data, setData] = useState<any[]>([]);

  // Fetch data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'stats'));
        const fetchedData: any[] = [];
        querySnapshot.forEach((doc) => {
          console.log('Fetched Document:', doc.id, doc.data()); // Debugging log
          fetchedData.push({ id: doc.id, ...doc.data() });
        });
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Transform fetched data for chart visualization
  const chartData = useMemo(() => {
    const initialData = {
      pageViews: { labels: [], data: [] },
      durationViewTime: { labels: [], data: [] },
      visitorCount: 0,
    };

    const consolidatedData = data.reduce((acc, doc) => {
      if (doc.id === 'pageViews') {
        acc.pageViews.labels = Object.keys(doc).filter((key) => key !== 'id');
        acc.pageViews.data = Object.values(doc).filter(
          (value) => typeof value === 'number'
        );
      } else if (doc.id === 'durationViewTime') {
        acc.durationViewTime.labels = Object.keys(doc).filter(
          (key) => key !== 'id'
        );
        acc.durationViewTime.data = Object.values(doc).filter(
          (value) => typeof value === 'number'
        );
      } else if (doc.id === 'visitorCount') {
        acc.visitorCount = doc.count;
      }
      return acc;
    }, initialData);

    return {
      pageViews: {
        labels: consolidatedData.pageViews.labels,
        datasets: [
          {
            label: 'Page Views',
            data: consolidatedData.pageViews.data,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
        ],
      },
      durationViewTime: {
        labels: consolidatedData.durationViewTime.labels,
        datasets: [
          {
            label: 'Time Spent (seconds)',
            data: consolidatedData.durationViewTime.data,
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
          },
        ],
      },
      visitorCount: consolidatedData.visitorCount,
    };
  }, [data]);

  // Render visualization
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Data Visualization</h1>

      <div className="mb-6">
        <h2 className="text-xl font-bold">Visitor Count</h2>
        <p className="text-lg font-semibold text-gray-700">
          {chartData.visitorCount || 'No visitor data available'}
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold">Page Views</h2>
        {chartData.pageViews.labels.length > 0 ? (
          <Bar
            data={chartData.pageViews}
            options={{
              responsive: true,
              plugins: {
                legend: { position: 'top' },
                title: { display: true, text: 'Page Views by Section' },
              },
            }}
          />
        ) : (
          <p className="text-center text-gray-500">
            No page views data available
          </p>
        )}
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold">Time Spent</h2>
        {chartData.durationViewTime.labels.length > 0 ? (
          <Bar
            data={chartData.durationViewTime}
            options={{
              responsive: true,
              plugins: {
                legend: { position: 'top' },
                title: {
                  display: true,
                  text: 'Time Spent (seconds) by Section',
                },
              },
            }}
          />
        ) : (
          <p className="text-center text-gray-500">
            No time spent data available
          </p>
        )}
      </div>
    </div>
  );
};

export default Visualize;
