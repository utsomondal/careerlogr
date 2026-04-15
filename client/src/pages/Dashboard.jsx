import Header from "../components/Dashboard/Header";
import DashboardCardHolder from "../components/Dashboard/DashboardCardHolder";
import RecentApplications from "../components/Dashboard/RecentApplications";
import { Link } from "react-router";

const Dashboard = () => {
  return (
    <div className="text-white p-3 md:p-6 lg:p-8">
      <Header />
      <DashboardCardHolder />
      <div className="mt-4">
        <div className="flex items-center justify-between mb-2 text-sm">
          <p>Recent Applications</p>
          <Link className="text-accent hover:underline" to={"/applications"}>
            View All
          </Link>
        </div>
        <div>
          <RecentApplications />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
