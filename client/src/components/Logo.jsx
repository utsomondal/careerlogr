import { FaArrowTrendUp } from "react-icons/fa6";

const Logo = () => {
  return (
    <div className="flex items-center gap-3 mb-12 group cursor-pointer">
      <div className="w-10 h-10 bg-linear-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg shadow-accent/20 transition-transform group-hover:scale-105">
        <FaArrowTrendUp className="text-white" size={18} />
      </div>
      <div className="flex flex-col leading-none">
        <h1 className="text-xl text-white font-bold">HIRETRACK</h1>
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-medium">
          Analytics Platform
        </span>
      </div>
    </div>
  );
};

export default Logo;
