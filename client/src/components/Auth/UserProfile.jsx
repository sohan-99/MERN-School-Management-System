import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserProfile = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully!");
      navigate("/signin");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to log out");
    }
  };

  if (!currentUser) {
    return (
      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate("/signin")}
          className="px-4 py-2 text-blue-600 hover:text-blue-800"
        >
          Sign In
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Sign Up
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">
          Welcome, {currentUser.displayName || currentUser.email}!
        </span>
      </div>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
