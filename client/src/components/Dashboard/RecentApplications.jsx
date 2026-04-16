import { useQuery } from "@tanstack/react-query";
import { getRecentApplications } from "../../api/application";
import { statusColors } from "../ApplicationPage/statusConfig";

const RecentApplications = () => {
  const { data } = useQuery({
    queryKey: ["recentApplications"],
    queryFn: () => getRecentApplications(6),
    staleTime: 0,
    refetchOnWindowFocus: true,
  });

  const applications = data?.data || [];

  return (
    <div className="bg-dark-700/80 border border-white/10 rounded-2xl backdrop-blur-xl shadow-sm p-4 sm:p-5">
      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden sm:block">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-white/80">
            <thead className="text-white/60 border-b border-white/10">
              <tr>
                <th className="py-3 px-2">Company</th>
                <th className="py-3 px-2">Role</th>
                <th className="py-3 px-2">Status</th>
                <th className="py-3 px-2">Date</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((app) => (
                <tr
                  key={app._id}
                  className="border-b border-white/5 hover:bg-white/5 transition"
                >
                  <td className="py-3 px-2">{app.company}</td>
                  <td className="py-3 px-2">{app.role}</td>

                  <td className="py-3 px-2">
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full border font-medium ${
                        statusColors[app.status] ??
                        "bg-white/5 text-white/30 border-white/10"
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>

                  <td className="py-3 px-2">
                    {new Date(app.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="space-y-3 sm:hidden">
        {applications.map((app) => (
          <div
            key={app._id}
            className="bg-dark-800/60 border border-white/5 rounded-xl p-4 space-y-2"
          >
            {/* Top Row */}
            <div className="flex items-center justify-between">
              <p className="font-medium text-white text-sm truncate">
                {app.company}
              </p>

              <span
                className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${
                  statusColors[app.status] ??
                  "bg-white/5 text-white/30 border-white/10"
                }`}
              >
                {app.status}
              </span>
            </div>

            {/* Role */}
            <p className="text-xs text-white/60 truncate">{app.role}</p>

            {/* Bottom Row */}
            <div className="flex items-center justify-between text-xs text-white/50">
              <span>
                {new Date(app.createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY STATE */}
      {applications.length === 0 && (
        <div className="flex items-center justify-center w-full py-10">
          <p className="text-white/60 text-sm text-center">
            No recent applications found
          </p>
        </div>
      )}
    </div>
  );
};

export default RecentApplications;
