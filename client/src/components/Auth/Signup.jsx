import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        // const email = form.email.value;
        // const password = form.password.value;

        // Example toast (replace this with your actual registration logic)
        toast.success(`Welcome, ${name}! Registration successful.`);
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
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            SignUp
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
