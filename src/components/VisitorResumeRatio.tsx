import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Ensure this points to your Firebase config file
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const VisitorResumeRatio = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [resumeClicks, setResumeClicks] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch visitor count
        const visitorDoc = doc(db, 'stats', 'visitorCount');
        const visitorSnap = await getDoc(visitorDoc);
        const visitorData = visitorSnap.exists() ? visitorSnap.data().count : 0;

        // Fetch resume clicks
        const resumeDoc = doc(db, 'resumeClicks', 'default');
        const resumeSnap = await getDoc(resumeDoc);
        const resumeData = resumeSnap.exists() ? resumeSnap.data().count : 0;

        // Update state
        setVisitorCount(visitorData);
        setResumeClicks(resumeData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Calculate the ratio
  const ratio = resumeClicks / (visitorCount || 1);

  // Prepare data for visualization
  const chartData = {
    labels: ['Resume Clicks', 'Other Visitors'],
    datasets: [
      {
        data: [resumeClicks, visitorCount - resumeClicks],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  // Render loading or chart
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Visitor-Resume Ratio
      </h1>
      {loading ? (
        <p className="text-center">Loading data...</p>
      ) : (
        <div>
          <Pie data={chartData} />
          <p className="mt-4 text-center">
            Ratio of Resume Clicks to Total Visitors:{' '}
            <strong>{(ratio * 100).toFixed(2)}%</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default VisitorResumeRatio;
