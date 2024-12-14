import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Heatmap Component
const ContributionHeatmap = () => {
  const [contributions, setContributions] = useState<number[][]>([]);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const username = 'PhongCT1105'; // Replace with your GitHub username

        // Fetch events (limited to public events)
        const response = await axios.get(
          `https://api.github.com/users/${username}/events`
        );
        const processedData = processContributionData(response.data);
        setContributions(processedData);
      } catch (error) {
        console.error('Error fetching contributions:', error);
      }
    };

    fetchContributions();
  }, []);

  const processContributionData = (events: any[]) => {
    // Initialize heatmap data: 7 days (rows) x 53 weeks (columns)
    const heatmapData: number[][] = Array.from({ length: 7 }, () =>
      Array(53).fill(0)
    );

    events.forEach((event) => {
      const eventDate = new Date(event.created_at);
      const week = getWeekOfYear(eventDate);
      const day = eventDate.getDay(); // 0 = Sunday, 6 = Saturday
      heatmapData[day][week]++;
    });

    return heatmapData;
  };

  const getWeekOfYear = (date: Date): number => {
    const start = new Date(date.getFullYear(), 0, 1);
    const diff = date.getTime() - start.getTime();
    return Math.floor(diff / (7 * 24 * 60 * 60 * 1000));
  };

  const getHeatmapColor = (count: number): string => {
    if (count === 0) return '#ebedf0'; // Light gray (no contributions)
    if (count < 5) return '#c6e48b'; // Light green
    if (count < 10) return '#7bc96f'; // Medium green
    if (count < 20) return '#239a3b'; // Dark green
    return '#196127'; // Very dark green
  };

  return (
    <div className="contribution-heatmap">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        Contributions in the Last Year
      </h3>
      <div className="grid grid-cols-53 gap-1">
        {contributions.flatMap((week, dayIndex) =>
          week.map((count, weekIndex) => (
            <div
              key={`${dayIndex}-${weekIndex}`}
              className="w-6 h-6 rounded-sm"
              style={{
                backgroundColor: getHeatmapColor(count),
              }}
              title={`${count} contributions`}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ContributionHeatmap;
