import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Layout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <aside className="w-60 bg-white dark:bg-gray-800 shadow-md p-6 flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-blue-600">NoteApp</h1>
        <nav className="flex flex-col gap-2">
          {!userState.isLoggedIn && (
            <Link to="/login" className="hover:text-blue-500">
              Login
            </Link>
          )}
          <Link to="/dashboard" className="hover:text-blue-500">
            Dashboard
          </Link>
          <Link to="/settings" className="hover:text-blue-500">
            Settings
          </Link>

          {userState.isLoggedIn && (
            <button
              onClick={handleLogout}
              className="text-left mt-2 hover:text-red-500"
            >
              Logout
            </button>
          )}
        </nav>

        <ThemeToggle />
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
