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
                    className="h-20 w-20 md:h-16 md:w-16 rounded-full object-cover"
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
                <div
                    onClick={handleClick}
                    className="group relative cursor-pointer p-2 w-32 border-2 dark:border-[#656fe2] border-[#c0c6fc] bg-white rounded-full overflow-hidden text-black text-center font-semibold"
                >
                    <span className="translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block">
                        Admission
                    </span>
                    <div className="flex gap-2 text-white bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none">
                        <span>Online Admission</span>
                    </div>
                </div>

                <Link to="/welcome">
                    <button className="group relative flex h-12 w-[120px] items-center justify-between border-2 dark:border-[#656fe2] border-[#394481] rounded-full bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f7f8ff] to-[#ffffff] font-medium dark:text-neutral-200 text-black">
                        <span className="pl-4">Login</span>
                        <div className="relative h-9 w-9 overflow-hidden dark:bg-white bg-black rounded-full mr-1">
                            <div className="absolute top-[0.7em] left-[-0.1em] grid place-content-center transition-all w-full h-full duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                                <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 dark:fill-black fill-white">
                                    <path
                                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                        fillRule="evenodd"
                                        clipRule="evenodd"></path>
                                </svg>
                                <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mb-1 -translate-x-4 dark:fill-black fill-white">
                                    <path
                                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                        fillRule="evenodd"
                                        clipRule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                    </button>
                </Link>

            </div>
        </header>
    );
};

export default Header;
