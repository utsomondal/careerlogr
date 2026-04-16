import { Link } from "react-router";
import {
  FiArrowUpRight,
  FiEdit2,
  FiTrash2,
  FiCalendar,
  FiDollarSign,
  FiMapPin,
} from "react-icons/fi";
import { statusColors } from "./statusConfig";

const MobileApplicationCards = ({ applications, onDelete }) => {
  return (
    <div className="space-y-3">
      {applications.map((app) => (
        <div
          key={app._id}
          className="bg-dark-800/60 border border-white/10 rounded-xl p-4 backdrop-blur-md"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-white font-medium">{app.company}</p>
              <p className="text-white/60 text-sm">{app.role}</p>
            </div>

            <span
              className={`text-xs px-2.5 py-1 rounded-full border font-medium ${
                statusColors[app.status] ??
                "bg-white/5 text-white/30 border-white/10"
              }`}
            >
              {app.status}
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-3 text-xs text-white/60">
            <span className="flex items-center gap-1">
              <FiCalendar size={12} />
              {new Date(app.dateApplied).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>

            <span className="flex items-center gap-1">
              <FiDollarSign size={12} />
              {app.salary || "—"}
            </span>

            <span className="flex items-center gap-1">
              <FiMapPin size={12} />
              {app.isRemote ? "Remote" : "On-site"}
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link to={`/application/update/${app._id}`}>
                <button className="p-2 rounded-md bg-white/5 text-white/70 hover:text-amber-400">
                  <FiEdit2 size={14} />
                </button>
              </Link>

              <button
                onClick={() => onDelete(app)}
                className="p-2 rounded-md bg-white/5 text-white/70 hover:text-red-400"
              >
                <FiTrash2 size={14} />
              </button>
            </div>

            {app.jobUrl ? (
              <a
                href={app.jobUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs flex items-center gap-1 text-accent"
              >
                View <FiArrowUpRight size={12} />
              </a>
            ) : (
              <span className="text-xs text-white/20">No link</span>
            )}
          </div>

          {app.notes && (
            <p className="mt-3 text-xs text-white/40 line-clamp-2">
              {app.notes}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default MobileApplicationCards;
