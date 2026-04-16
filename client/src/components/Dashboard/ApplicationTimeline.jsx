import { useQuery } from "@tanstack/react-query";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";
import { getApplicationTimeline } from "../../api/application";
import CustomTooltip from "./CustomTooltip";
import { useEffect, useState } from "react";

const ApplicationTimeline = () => {
  const { data } = useQuery({
    queryKey: ["applicationTimeline"],
    queryFn: getApplicationTimeline,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const chartData =
    data?.data?.map((item) => ({
      date: new Date(item._id).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      rawDate: item._id,
      applications: item.count,
    })) || [];

  const total = chartData.reduce((acc, curr) => acc + curr.applications, 0);

  const last = chartData[chartData.length - 1]?.applications || 0;
  const prev = chartData[chartData.length - 2]?.applications || 0;
  const trend = last - prev;

  return (
    <div className="w-full h-full p-2 sm:p-4 flex flex-col justify-between">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <p className="text-[10px] sm:text-xs text-gray-400">
            Total Applications
          </p>
          <p className="text-lg sm:text-xl font-semibold">{total}</p>
        </div>

        <div
          className={`text-xs sm:text-sm font-medium ${
            trend >= 0 ? "text-green-400" : "text-red-400"
          }`}
        >
          {trend >= 0 ? "+" : ""}
          {trend}
        </div>
      </div>

      {/* CHART */}
      <div className="flex-1">
        <ResponsiveContainer>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorApps" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4ade80" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#4ade80" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />

            <XAxis
              dataKey="date"
              stroke="#9ca3af"
              tick={{ fontSize: isMobile ? 10 : 12 }}
              tickLine={false}
              axisLine={false}
              interval={isMobile ? "preserveStartEnd" : 0}
            />

            <YAxis
              stroke="#9ca3af"
              tick={{ fontSize: isMobile ? 10 : 12 }}
              tickLine={false}
              axisLine={false}
              width={isMobile ? 25 : 35}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: "#4ade80", strokeWidth: 1 }}
            />

            <Area
              type="monotone"
              dataKey="applications"
              stroke="none"
              fill="url(#colorApps)"
            />

            <Line
              type="monotone"
              dataKey="applications"
              stroke="#4ade80"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: isMobile ? 4 : 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {!chartData.length && (
        <p className="text-center text-gray-400 text-xs sm:text-sm">
          No application data yet
        </p>
      )}
    </div>
  );
};

export default ApplicationTimeline;
