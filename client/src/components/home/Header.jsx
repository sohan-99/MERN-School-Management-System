import { Link, useNavigate } from "react-router-dom";
import NotFoundImg from "../../assets/download.png";

const Header = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/admission');
    };

    return (
        <header className="bg-white shadow-md p-4 md:px-10 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
                <img
                    src={NotFoundImg}
                    alt="School Logo"
                    className="h-16 w-16 md:h-16 md:w-16 rounded-full object-cover"
                />
                <div className="text-center md:text-left">
                    <Link to="/" className="block">
                        <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
                            THAKARPARA HIGH SCHOOL
                        </h1>
                        <p className="text-sm text-gray-500">
                            School Code: 126088, EIIN: 126088
                        </p>
                    </Link>
                </div>
            </div>

            <div className="flex items-center gap-4 mt-4 md:mt-0">
                <button
                    onClick={handleClick}
                    className="bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-2 rounded-md hover:from-green-700 hover:to-green-600 transition duration-200"
                >
                    Online Admission 2025
                </button>
                <Link to="/signin">
                    <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-200">
                        Sign In
                    </button>
                </Link>
            </div>
        </header>
    );
};

export default Header;
