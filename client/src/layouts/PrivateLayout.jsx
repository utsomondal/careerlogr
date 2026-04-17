import { useState, useContext } from "react";
import { Outlet, useLocation, Navigate } from "react-router";
import { IoIosMenu } from "react-icons/io";
import Sidebar from "../components/Dashboard/Sidebar";
import AuthContext from "../context/AuthContext";

const PrivateLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user } = useContext(AuthContext);

  const pageName =
    location.pathname === "/" ? "Dashboard" : location.pathname.slice(1);

  if (user === null) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="h-screen overflow-hidden bg-dark-800">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className="h-screen overflow-y-auto bg-dark-900 md:pl-64">
        {/* Mobile Topbar */}
        <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-dark-500 bg-dark-800">
          <button onClick={() => setIsOpen(true)}>
            <IoIosMenu size={24} color="white" />
          </button>

          <span className="text-white/50 font-semibold text-xs capitalize">
            {pageName}
          </span>
        </div>

        <Outlet />
      </main>
    </div>
  );
};

export default PrivateLayout;
