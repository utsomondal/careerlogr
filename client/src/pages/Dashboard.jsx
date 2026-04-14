import Header from "../components/Dashboard/Header";
import DashboardCardHolder from "../components/Dashboard/DashboardCardHolder";

const Dashboard = () => {
  return (
    <div className="text-white p-3 md:p-6 lg:p-8">
      <Header />
      <DashboardCardHolder />
    </div>
  );
};

export default Dashboard;
