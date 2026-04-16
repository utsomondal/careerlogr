import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to={"/"} className="flex items-center gap-3 group cursor-pointer">
      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-linear-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg shadow-accent/20 transition-transform duration-200 group-hover:scale-105">
        <FaArrowTrendUp className="text-white" size={16} />
      </div>

      <div className="flex flex-col leading-none">
        <h1 className="text-lg sm:text-xl text-white font-bold tracking-wide">
          HIRETRACK
        </h1>

        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/50 font-medium">
          Analytics Platform
        </span>
      </div>
    </Link>
  );
};

export default Logo;
