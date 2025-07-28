import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../contexts/AuthContext";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // Basic validation
        if (password.length < 6) {
            toast.error("Password should be at least 6 characters");
            return;
        }

        try {
            setLoading(true);
            await signup(email, password, name);
            toast.success(`Welcome, ${name}! Registration successful.`);
            // Navigate to dashboard after successful registration
            navigate("/dashboard");
        } catch (error) {
            console.error("Registration error:", error);
            // Handle different Firebase error codes
            switch (error.code) {
                case 'auth/email-already-in-use':
                    toast.error("This email is already registered. Please use a different email or try signing in.");
                    break;
                case 'auth/invalid-email':
                    toast.error("Please enter a valid email address.");
                    break;
                case 'auth/weak-password':
                    toast.error("Password should be at least 6 characters.");
                    break;
                case 'auth/network-request-failed':
                    toast.error("Network error. Please check your internet connection.");
                    break;
                default:
                    toast.error("Registration failed. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-700">SignUp Now!</h1>
                </div>

                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-6 relative">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-9 text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    <div className="mb-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 ${loading
                                ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                                : "bg-blue-500 text-white hover:bg-blue-600"
                                }`}
                        >
                            {loading ? "Creating Account..." : "SignUp"}
                        </button>
                    </div>
                </form>
                <div className="text-center mt-4">
                    <p className="text-gray-600">
                        Already have an account?
                        <Link to="/signin" className="text-blue-500 hover:underline ml-1">
                            Signin
                        </Link>
                    </p>
                </div>
            </div>
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />
        </div>
    );
};

export default Signup;
