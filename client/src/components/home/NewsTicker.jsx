import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NewsTicker = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => date.toLocaleDateString("en-CA");
  const formatTime = (date) =>
    date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });

  return (
    <div className="bg-white border border-gray-200 shadow-sm w-full px-4 py-3">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* News Section */}
        <div className="flex items-center w-full md:flex-1">
          {/* <span className="bg-indigo-600 text-white text-sm font-semibold px-3 py-1 rounded-md shrink-0">
            News
          </span> */}
          <button className='inline-flex w-fit mx-auto h-7 animate-background-shine items-center justify-center rounded-md   dark:bg-[linear-gradient(110deg,#1e2a78,45%,#3749be,55%,#1e2a78)] bg-[linear-gradient(110deg,#3d5af1,45%,#5471ff,55%,#3d5af1)] bg-[length:200%_100%] dark:hover:border-white px-6 font-medium text-white dark:text-white transition-colors focus:outline-none focus:ring-2 dark:focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
            News
          </button>
          <marquee className="ml-4 text-gray-700 text-sm md:text-base font-medium">
            Thakarpara High School is located in Thakarpara, Panchagarh, in the Rangpur division of Bangladesh. The school operates in a plain land region and offers education up to the Secondary level. With an EIIN (Educational Institute Identification Number) of 126088, it serves as an important educational center in the local community. Thakarpara High School is dedicated to providing quality education and fostering a supportive learning environment for students. The school is well-regarded in the area for its commitment to academic excellence and extracurricular activities that promote the overall development of students.
          </marquee>
        </div>

        {/* Date & Time Section */}
        <div className="flex items-center gap-2 text-sm font-medium">
          <Link to="/celender">
            <button className='inline-flex w-fit mx-auto h-7 animate-background-shine items-center justify-center rounded-md  border-2 dark:border-[#656fe2] border-[#c0c6fc] dark:bg-[linear-gradient(110deg,#1e2a78,45%,#3749be,55%,#1e2a78)] bg-[linear-gradient(110deg,#3d5af1,45%,#5471ff,55%,#3d5af1)] bg-[length:200%_100%] dark:hover:border-white px-6 font-medium text-white dark:text-white transition-colors focus:outline-none focus:ring-2 dark:focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
              Calendar
            </button>
          </Link>
          <button className='inline-flex w-fit mx-auto h-7 animate-background-shine items-center justify-center rounded-md   dark:bg-[linear-gradient(110deg,#1e2a78,45%,#3749be,55%,#1e2a78)] bg-[linear-gradient(110deg,#3d5af1,45%,#5471ff,55%,#3d5af1)] bg-[length:200%_100%] dark:hover:border-white px-6 font-medium text-white dark:text-white transition-colors focus:outline-none focus:ring-2 dark:focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
            {formatDate(currentTime)}
          </button>
          <button className='inline-flex w-fit mx-auto h-7 animate-background-shine items-center justify-center rounded-md   dark:bg-[linear-gradient(110deg,#1e2a78,45%,#3749be,55%,#1e2a78)] bg-[linear-gradient(110deg,#3d5af1,45%,#5471ff,55%,#3d5af1)] bg-[length:200%_100%] dark:hover:border-white px-6 font-medium text-white dark:text-white transition-colors focus:outline-none focus:ring-2 dark:focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
            {formatTime(currentTime)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
