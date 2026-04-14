import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import useGreetings from "../../hooks/useGreetings";

const Header = () => {
  const { greeting, icon: Icon } = useGreetings();
  const { user } = useAuth();

  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-2xl font-semibold flex items-center gap-2">
          <span>{Icon && <Icon className=" text-accent" />}</span>
          <span>
            {greeting}, {user?.name}
          </span>
        </p>
      </div>

      <div>
        <Link
          title="Add New Application"
          to="/application/add"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/20 text-accent text-sm font-medium hover:bg-accent/20 transition"
        >
          <IoMdAdd size={16} />
          Add New
        </Link>
      </div>
    </div>
  );
};

export default Header;
