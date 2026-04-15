import { useQuery } from "@tanstack/react-query";
import { getRecentApplications } from "../../api/application";
import { statusColors } from "../ApplicationPage/statusConfig";

const RecentApplications = () => {
  const { data } = useQuery({
    queryKey: ["recentApplications"],
    queryFn: () => getRecentApplications(5),
    staleTime: 1000 * 60,
    refetchOnWindowFocus: true,
  });

  const applications = data?.data || [];

  return (
    <div className="bg-dark-700/80 border border-white/10 rounded-2xl backdrop-blur-xl shadow-sm px-5">
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
                  {new Date(app.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {applications.length === 0 && (
        <p className="text-white/50 text-sm mt-3">
          No recent applications found
        </p>
      )}
    </div>
  );
};

export default RecentApplications;
