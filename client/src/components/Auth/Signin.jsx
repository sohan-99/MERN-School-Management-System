import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log("Email:", email);
        console.log("Password:", password);
        // Add authentication logic here
    };

    const handleGoogleSignIn = () => {
        console.log("Google sign in clicked");
        // Add Google sign-in logic here
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
                            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            Signin
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
                        className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-md hover:bg-blue-600 hover:text-white focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Sign in with Google
                    </button>
                </div>
            </div>
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />
        </div>
    );
};

export default Signin;
