import CategoryTrackingChart from './CategoryTrackingChart';
import ProjectTrackingChart from './ProjectTrackingChart';

function Visualize() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
      {/* Category Tracking Chart */}
      <div className="bg-white shadow-md rounded-lg p-2">
        <h3 className="text-center text-sm font-semibold mb-2">
          Category Tracking
        </h3>
        <CategoryTrackingChart />
      </div>

      {/* Project Tracking Chart */}
      <div className="bg-white shadow-md rounded-lg p-2">
        <h3 className="text-center text-sm font-semibold mb-2">
          Top 5 Projects
        </h3>
        <ProjectTrackingChart limit={5} />
      </div>

      {/* Additional Visualizations */}
      <div className="bg-white shadow-md rounded-lg p-2">
        <h3 className="text-center text-sm font-semibold mb-2">
          Visualization 3
        </h3>
        {/* Add the third chart/component here */}
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500 text-xs">Chart Placeholder</p>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-2">
        <h3 className="text-center text-sm font-semibold mb-2">
          Visualization 4
        </h3>
        {/* Add the fourth chart/component here */}
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500 text-xs">Chart Placeholder</p>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-2">
        <h3 className="text-center text-sm font-semibold mb-2">
          Visualization 5
        </h3>
        {/* Add the fifth chart/component here */}
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500 text-xs">Chart Placeholder</p>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-2">
        <h3 className="text-center text-sm font-semibold mb-2">
          Visualization 6
        </h3>
        {/* Add the sixth chart/component here */}
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500 text-xs">Chart Placeholder</p>
        </div>
      </div>
    </div>
  );
}

export default Visualize;
