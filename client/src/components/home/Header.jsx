import { Link, useNavigate } from "react-router-dom";
import NotFoundImg from "../../assets/download.png";
const Header = () => {
    const navigate = useNavigate(); // Define navigate function

    const handleClick = () => {
        navigate('/admission');
    };

    return (
        <header className="bg-yellow-100 p-4 flex flex-col md:flex-row justify-center md:justify-between items-center">
            <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
                <img
                    src={NotFoundImg}
                    alt="School Logo"
                    className="h-14 w-14 md:h-18 md:w-18 rounded-lg"
                />
                <div className="text-center md:text-left md:ml-4 lg:ml-16">
                    <Link to="/" className="block">
                        <h1 className="text-lg md:text-2xl font-bold text-green-800">
                            THAKARPARA HIGH SCHOOL
                        </h1>
                        <p className="text-sm md:text-base">
                            School Code: 126088, EIIN: 126088
                        </p>
                    </Link>
                </div>
            </div>
            <div className="flex items-center">
                <button
                    onClick={handleClick}
                    className="bg-red-500 text-white px-3 py-2 md:px-4 md:py-2 rounded hover:bg-red-600"
                >
                    Online Admission 2025
                </button>
                <div className="ml-4">
                    <Link to="/signin">
                        <button className="w-[100px] bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                            Signin
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
