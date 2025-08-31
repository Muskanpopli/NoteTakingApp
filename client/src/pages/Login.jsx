import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, loadUserFromStorage } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);

  const [email, setEmail] = useState("");
  const [name, setName] = useState(""); 

  useEffect(() => {
    dispatch(loadUserFromStorage());
    if (userState.isLoggedIn) navigate("/dashboard");
  }, [dispatch, userState.isLoggedIn, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name: name || "User", email };
    dispatch(login(userData));
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login / Signup</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600"
          />
          <button className="bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
