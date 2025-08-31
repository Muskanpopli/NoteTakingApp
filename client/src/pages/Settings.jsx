import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, setFontSize } from "../store/settingsSlice";
import { logout } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

export default function Settings() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const settings = useSelector((state) => state.settings);

  const [fontSize, setFontSizeLocal] = useState(settings.fontSize);

  const handleFontSizeChange = (e) => setFontSizeLocal(e.target.value);

  const saveSettings = () => {
    dispatch(setFontSize(fontSize));
    alert("Settings saved!");
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Font Size</label>
          <input
            type="text"
            value={fontSize}
            onChange={handleFontSizeChange}
            className="p-2 w-full border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <ThemeToggle />

        <div className="flex gap-4">
          <button
            onClick={saveSettings}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Save Settings
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
