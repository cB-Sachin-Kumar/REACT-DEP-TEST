import { useDispatch, useSelector } from "react-redux";
import { Menu, LogOut, User } from "lucide-react";
import { logout } from "../store/slice/authSlice";
import { Link } from "react-router-dom";

const Header = ({ onToggleSidebar }) => {
  const dispatch = useDispatch();
  const { user, role: roleFromState } = useSelector((s) => s.auth);
  const role = typeof user === "string" ? user : user?.role || roleFromState;

  const handleLogout = () => {
    dispatch(logout());
  };

  const getRoleColor = (role) => {
    switch (role) {
      case "Secretary-Login":
        return "text-blue-600 bg-blue-100";
      case "user-login":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <header className="antialiased fixed w-full z-50">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            <button
              id="toggleSidebar"
              onClick={onToggleSidebar}
              aria-expanded="true"
              aria-controls="sidebar"
              className="hidden p-2 mr-3 text-gray-600 rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                {" "}
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h14M1 6h14M1 11h7"
                />{" "}
              </svg>
            </button>
            <button
              aria-expanded="true"
              aria-controls="sidebar"
              className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                className="w-[18px] h-[18px]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
              <span className="sr-only">Toggle sidebar</span>
            </button>
            <a href="https://flowbite.com" className="flex mr-4">
              <img
                src="https://i.ibb.co/R2y2KNf/image.png"
                className="mr-3 h-12 w-10"
                alt="FlowBite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                शिक्षा विभाग ,बिहार सरकार
              </span>
            </a>
          </div>
          <div className="flex items-center lg:order-2">
            <button
              type="button"
              className="hidden sm:inline-flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 ring-4 ring-primary-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              <User className="w-4 h-4 mr-2 -ml-1" />
              {role}
            </button>
            <button
              type="button"
              className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              onClick={handleLogout}
            >
              <LogOut className="w-5 h-5 " />
            </button>
          </div>

          {/* */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
