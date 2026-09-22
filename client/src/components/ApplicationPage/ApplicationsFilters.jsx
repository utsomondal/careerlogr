import { FiSearch } from "react-icons/fi";

const STATUSES = [
  "All",
  "Applied",
  "Screening",
  "Interview",
  "Offer",
  "Rejected",
];

const ApplicationsFilters = ({
  search,
  onSearchChange,
  status,
  onStatusChange,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6">
      {/* Search */}
      <div className="relative flex-1">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by company..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent placeholder:text-gray-500"
        />
      </div>

      {/* Status filter */}
      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className="sm:w-48 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent appearance-none cursor-pointer"
      >
        {STATUSES.map((s) => (
          <option key={s} value={s} className="bg-dark-800">
            {s === "All" ? "All statuses" : s}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ApplicationsFilters;