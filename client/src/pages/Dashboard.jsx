import Header from "../components/Dashboard/Header";
import DashboardCardHolder from "../components/Dashboard/DashboardCardHolder";
import RecentApplications from "../components/Dashboard/RecentApplications";
import { Link } from "react-router";
import JobType from "../components/Dashboard/JobType";
import ApplicationTimeline from "../components/Dashboard/ApplicationTimeline";

const Dashboard = () => {
  return (
    <div className="text-white p-3 sm:p-4 md:p-6 lg:p-8 space-y-6 animate-fade-in">
      <Header />
      <DashboardCardHolder />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <p className="font-medium text-sm text-white">
              Recent Applications
            </p>
            <Link
              className="text-accent text-sm hover:underline"
              to="/applications"
            >
              View All
            </Link>
          </div>
          <RecentApplications />
        </div>
        <div className="lg:col-span-1 space-y-4">
          <p className="text-sm font-medium text-white">Job Type</p>
          <div className="bg-dark-700/80 border border-white/10 rounded-2xl backdrop-blur-xl shadow-sm p-3 sm:p-4">
            <div className="h-64 md:h-72 lg:h-80 xl:h-85">
              <JobType />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-sm font-medium text-white">Applications Over Time</p>
        <div className="bg-dark-700/80 border border-white/10 rounded-2xl backdrop-blur-xl shadow-sm p-3 sm:p-4">
          <div className="h-64 sm:h-72 md:h-80">
            <ApplicationTimeline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
