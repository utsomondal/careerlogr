const colorMap = {
  green: "text-green-400",
  red: "text-red-400",
  blue: "text-blue-400",
  yellow: "text-yellow-400",
  purple: "text-purple-400",
  white: "text-white",
};

const StatCard = ({ icon: Icon, value, label, subtext, color = "white" }) => {
  const textColor = colorMap[color] || "text-white";

  return (
    <div
      className="bg-dark-700/80 border border-white/10 rounded-xl sm:rounded-2xl 
      p-3 sm:p-5 backdrop-blur-xl 
      shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      {/* ICON */}
      <div className={`mb-2 sm:mb-4 ${textColor}`}>
        {Icon && <Icon size={14} className="sm:hidden" />}
        {Icon && <Icon size={18} className="hidden sm:block" />}
      </div>

      {/* VALUE */}
      <p className="text-xl sm:text-3xl font-semibold text-white leading-none">
        {value}
      </p>

      {/* LABEL */}
      <p className="text-xs sm:text-sm text-dark-400 mt-1 sm:mt-2">{label}</p>

      {/* SUBTEXT */}
      {subtext && (
        <p className={`text-[10px] sm:text-xs mt-1 sm:mt-2 ${textColor}`}>
          {subtext}
        </p>
      )}
    </div>
  );
};

export default StatCard;
