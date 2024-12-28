import CategoryTrackingChart from './CategoryTrackingChart';
import ProjectTrackingChart from './ProjectTrackingChart';
import VisitorResumeRatio from './VisitorResumeRatio';
import VisitorLineChart from './VisitorLineChart';
import DurationTrackingBarChart from './DurationTrackingDoughnutChart'; // Import the new chart

function Visualize() {
  return (
    <div className="bg-gray-50 shadow-lg rounded-lg py-20">
      {/* General Title */}
      <h3 className="p-4 text-2xl font-bold text-center mb-8">
        Data Analytics Showcase
      </h3>

      {/* Section 1: User Interaction Overview */}
      <section className="bg-blue-50 shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-center mb-4">
          User Interaction Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="w-full overflow-x-auto">
              <CategoryTrackingChart />
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-center text-sm font-semibold mb-2">
              Top 5 Projects with Most Visitors Interactions
            </h3>
            <div className="w-full overflow-x-auto">
              <ProjectTrackingChart limit={5} />
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="w-full overflow-x-auto">
              <VisitorResumeRatio />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Visitor Metrics */}
      <section className="bg-blue-50 shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold text-center mb-4">Visitor Metrics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="col-span-1 sm:col-span-3 md:col-span-2 bg-white shadow-md rounded-lg p-4">
            <h3 className="text-center text-sm font-semibold mb-2">
              Total Visitors Over Time
            </h3>
            <div className="w-full overflow-x-auto">
              <VisitorLineChart />
            </div>
          </div>

          <div className="col-span-1 sm:col-span-3 md:col-span-1 bg-white shadow-md rounded-lg p-4">
            <h3 className="text-center text-sm font-semibold mb-2">
              Duration Tracking
            </h3>
            <div className="w-full h-full" style={{ minHeight: '300px' }}>
              <DurationTrackingBarChart />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Visualize;
