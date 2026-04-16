import { useQuery } from "@tanstack/react-query";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import { getJobType } from "../../api/application";

const JobType = () => {
  const { data } = useQuery({
    queryKey: ["jobType"],
    queryFn: getJobType,
  });

  const stats = data?.data;

  const total = (stats?.Remote || 0) + (stats?.Onsite || 0);

  const chartData = stats
    ? [
        { name: "Remote", value: stats.Remote, fill: "#4ade80" },
        { name: "Onsite", value: stats.Onsite, fill: "#60a5fa" },
      ]
    : [];

  if (!stats || total === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-white/50 text-sm">No job type data available</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius="80%"
            innerRadius="50%"
            paddingAngle={3}
            labelLine={false}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
            }}
            itemStyle={{ color: "#fff" }}
            labelStyle={{ color: "#9ca3af" }}
            formatter={(value, name) => [`${value} applications`, name]}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* CENTER CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <p className="text-xs text-white/50">Job Type</p>
        <p className="text-sm font-semibold text-white">{total}</p>
      </div>

      {/* SIMPLE LEGEND */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 text-xs text-white/70">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-green-400"></span>
          Remote: {stats.Remote}
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-blue-400"></span>
          Onsite: {stats.Onsite}
        </div>
      </div>
    </div>
  );
};

export default JobType;
