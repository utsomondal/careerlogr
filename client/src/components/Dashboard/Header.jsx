import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import useGreetings from "../../hooks/useGreetings";

const Header = () => {
  const { greeting, subtext, icon: Icon } = useGreetings();
  const { user } = useAuth();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-5 animate-fade-in">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="mt-1 text-accent shrink-0">
          {Icon && <Icon size={18} className="sm:w-5 sm:h-5" />}
        </div>
        <div className="min-w-0">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white leading-snug">
            {greeting}{" "}
            <span className="text-accent wrap-break-word">
              {user?.name || "there"}
            </span>{" "}
            👋
          </p>
          <p className="text-xs sm:text-sm text-dark-500 mt-1 line-clamp-2">
            {subtext}
          </p>
        </div>
      </div>
      <div className="flex justify-start sm:justify-end">
        <Link
          to="/application/add"
          className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-accent text-black text-xs sm:text-sm font-semibold
           hover:bg-accent/90 transition-all duration-150 active:scale-95 hover:-translate-y-px whitespace-nowrap"
        >
          <IoMdAdd size={16} />
          Add New
        </Link>
      </div>
    </div>
  );
};

export default Header;
