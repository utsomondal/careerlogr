import { FiCalendar, FiClock, FiSend, FiStar } from "react-icons/fi";
import StatCard from "./StatCard";
import { useQuery } from "@tanstack/react-query";
import { getApplicationStats } from "../../api/application";

const DashboardCardHolder = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["application-data"],
    queryFn: getApplicationStats,
  });

  if (isLoading) return <p>...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      <StatCard
        icon={FiSend}
        value={data.totalApplied}
        label="Total Applied"
        subtext="All time"
        color="blue"
      />

      <StatCard
        icon={FiClock}
        value={data.inProgress}
        label="In Progress"
        subtext="Active applications"
        color="yellow"
      />

      <StatCard
        icon={FiCalendar}
        value={data.interviewed}
        label="Interviews"
        subtext={"You're getting closer!"}
        color="purple"
      />

      <StatCard
        icon={FiStar}
        value={data.offered}
        label="Offers Received"
        subtext="Keep going!"
        color="green"
      />
    </div>
  );
};

export default DashboardCardHolder;
