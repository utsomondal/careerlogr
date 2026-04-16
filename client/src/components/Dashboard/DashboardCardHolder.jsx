import { FiCalendar, FiClock, FiSend, FiStar } from "react-icons/fi";
import StatCard from "./StatCard";
import { useQuery } from "@tanstack/react-query";
import { getApplicationStats } from "../../api/application";

const DashboardCardHolder = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["application-data"],
    queryFn: getApplicationStats,
    staleTime: 0,
    refetchOnWindowFocus: true,
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-24 rounded-xl bg-white/5 animate-pulse" />
        ))}
      </div>
    );
  }

  const stats = [
    {
      icon: FiSend,
      value: data.totalApplied,
      label: "Total Applied",
      subtext: "All time",
      color: "blue",
    },
    {
      icon: FiClock,
      value: data.inProgress,
      label: "In Progress",
      subtext: "Active applications",
      color: "yellow",
    },
    {
      icon: FiCalendar,
      value: data.interviewed,
      label: "Interviews",
      subtext: "You're getting closer!",
      color: "purple",
    },
    {
      icon: FiStar,
      value: data.offered,
      label: "Offers Received",
      subtext: "Keep going!",
      color: "green",
    },
  ];

  return (
    <div className="mt-6">
      <div
        className="
          flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible"
      >
        {stats.map((item, index) => (
          <div key={index} className="min-w-[80%] snap-center sm:min-w-0">
            <StatCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCardHolder;
