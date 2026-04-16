import { Link } from "react-router";
import { statusColors } from "./statusConfig";
import { FiArrowUpRight, FiEdit2, FiTrash2 } from "react-icons/fi";

const ApplicationRow = ({ application, onConfirmDelete }) => {
  const {
    _id,
    company,
    role,
    salary,
    status,
    dateApplied,
    isRemote,
    jobUrl,
    notes,
  } = application;

  return (
    <>
      <tr className="relative border-b border-white/4 hover:bg-dark-800/50 transition-colors duration-150 group">
        <td className="py-4 px-5">
          <span className="text-white/85 text-sm font-medium truncate">
            {company}
          </span>
        </td>

        <td className="py-4 px-5 text-white/60 text-sm">{role}</td>

        <td className="py-4 px-5">
          <span
            className={`text-xs px-2.5 py-1 rounded-full border font-medium ${
              statusColors[status] ?? "bg-white/5 text-white/30 border-white/10"
            }`}
          >
            {status}
          </span>
        </td>

        <td className="py-4 px-5">
          <span className="text-sm text-white/60">
            {new Date(dateApplied).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </td>

        <td className="py-4 px-5">
          <span className="text-sm text-white/60">{salary || "—"}</span>
        </td>

        <td className="py-4 px-5">
          <span
            className={`text-xs px-2.5 py-1 rounded-full border font-medium ${
              isRemote
                ? "bg-teal-500/10 text-teal-400 border-teal-500/20"
                : "bg-white/5 text-white/30 border-white/10"
            }`}
          >
            {isRemote ? "Remote" : "On-site"}
          </span>
        </td>

        <td className="py-4 px-5">
          {jobUrl ? (
            <a
              href={jobUrl}
              target="_blank"
              rel="noreferrer"
              title="Open job posting"
              className="inline-flex items-center gap-1 text-[12px] text-white/60 hover:text-accent border border-white/6 hover:border-accent/20 hover:bg-accent/5 px-2.5 py-1 rounded-md transition-colors duration-150"
            >
              <span>View Job</span>
              <FiArrowUpRight size={12} />
            </a>
          ) : (
            <span className="text-xs text-white/20">—</span>
          )}
        </td>

        <td className="py-4 px-5">
          <div className="flex items-center gap-2 transition-opacity duration-150">
            <Link to={`/application/update/${application._id}`}>
              <button
                title="Edit application"
                className="p-1.5 rounded-md text-white/60 hover:text-amber-400 hover:bg-amber-400/10 transition-colors duration-150"
              >
                <FiEdit2 size={16} />
              </button>
            </Link>

            <button
              onClick={onConfirmDelete}
              title="Delete application"
              className="p-1.5 rounded-md text-white/60 hover:text-red-400 hover:bg-red-400/10 transition-colors duration-150"
            >
              <FiTrash2 size={16} />
            </button>
          </div>
        </td>

        {notes && (
          <td className="absolute left-5 top-5 -translate-y-full hidden group-hover:block z-100 w-72">
            <div className="relative bg-dark-700/95 backdrop-blur-md border border-white/10 text-white/70 text-xs p-3 rounded-xl shadow-xl">
              <p className="text-white/40 mb-1 text-[10px] uppercase tracking-wide">
                Notes
              </p>
              <p className="text-white/70 leading-relaxed line-clamp-4">
                {notes}
              </p>
              <div className="absolute -bottom-1 left-5 w-2.5 h-2.5 bg-dark-700 rotate-45 border-r border-b border-white/10"></div>
            </div>
          </td>
        )}
      </tr>
    </>
  );
};

export default ApplicationRow;
