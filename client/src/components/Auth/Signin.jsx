import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../contexts/AuthContext";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/config";

const Signin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            setLoading(true);
            await login(email, password);
            toast.success("Login successful!");
            navigate("/");
        } catch (error) {
            console.error("Login error:", error);
            switch (error.code) {
                case 'auth/user-not-found':
                    toast.error("No account found with this email. Please sign up first.");
                    break;
                case 'auth/wrong-password':
                    toast.error("Incorrect password. Please try again.");
                    break;
                case 'auth/invalid-email':
                    toast.error("Please enter a valid email address.");
                    break;
                case 'auth/user-disabled':
                    toast.error("This account has been disabled.");
                    break;
                case 'auth/network-request-failed':
                    toast.error("Network error. Please check your internet connection.");
                    break;
                default:
                    toast.error("Login failed. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            setGoogleLoading(true);
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            toast.success(`Welcome, ${result.user.displayName}!`);
            navigate("/");
        } catch (error) {
            console.error("Google sign-in error:", error);
            switch (error.code) {
                case 'auth/popup-closed-by-user':
                    toast.error("Sign-in cancelled. Please try again.");
                    break;
                case 'auth/network-request-failed':
                    toast.error("Network error. Please check your internet connection.");
                    break;
                default:
                    toast.error("Google sign-in failed. Please try again.");
            }
        } finally {
            setGoogleLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-700">Signin now!</h1>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
                            className={`w-full py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-300 ${loading
                                    ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                                    : "bg-blue-500 text-white hover:bg-blue-600"
                                }`}
                        >
                            {loading ? "Signing in..." : "Signin"}
                        </button>
                    </div>
                </form>
                <p className="text-center text-gray-600">
                    New to Thakarpara High School?{" "}
                    <Link to="/signup" className="text-blue-500 hover:underline">
                        SignUp
                    </Link>
                </p>
                <div className="text-center mt-4">
                    <button
                        onClick={handleGoogleSignIn}
                        disabled={googleLoading}
                        className={`w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 ${googleLoading
                                ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                                : "text-gray-700 hover:bg-blue-600 hover:text-white"
                            }`}
                    >
                        {googleLoading ? "Signing in with Google..." : "Sign in with Google"}
                    </button>
                </div>
            </div>
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />
        </div>
    );
};

export default Signin;
