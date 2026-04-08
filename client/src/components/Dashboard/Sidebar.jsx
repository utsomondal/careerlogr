import { IoLogOutOutline } from "react-icons/io5";
import Logo from "../Logo";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import { logoutUser } from "../../api/auth";
import Avatar from "./Avatar";
import Navbar from "./Navbar";

const Sidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    logout();
    navigate("/", { replace: true });
  };

  return (
    <div className="w-64 text-white bg-dark-600 p-4 h-screen flex flex-col">
      {/* Logo */}
      <div className="border-b border-dark-500 pb-4">
        <Logo />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1">
        {/* top */}
        <Navbar />

        {/* bottom */}
        <div>
          <div className="flex items-center gap-3 mb-4 border-t border-dark-500 pt-4">
            <Avatar name={user?.name || "User"} />

            <div className="flex flex-col">
              <span className="font-medium text-white">
                {user?.name || "User"}
              </span>
              <span className="text-[0.8rem] text-white/60">
                {user?.email || "user@example.com"}
              </span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 border-t border-dark-500 pt-4"
          >
            <IoLogOutOutline size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
