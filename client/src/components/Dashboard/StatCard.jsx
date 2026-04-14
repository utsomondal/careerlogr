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
      className="bg-dark-700/80 border border-white/10 rounded-2xl p-5 backdrop-blur-xl 
      shadow-sm hover:shadow-md transition-all duration-200"
    >
      {/* ICON */}
      <div className={`mb-4 ${textColor}`}>{Icon && <Icon size={18} />}</div>

      {/* VALUE */}
      <p className="text-3xl font-semibold text-white leading-none">{value}</p>

      {/* LABEL */}
      <p className="text-sm text-dark-400 mt-2">{label}</p>

      {/* SUBTEXT */}
      {subtext && <p className={`text-xs mt-2 ${textColor}`}>{subtext}</p>}
    </div>
  );
};

export default StatCard;
